/**
 * Mailchimp API Integration
 * 
 * Ce module gère la synchronisation des abonnés avec Mailchimp.
 * Documentation API: https://mailchimp.com/developer/marketing/api/
 */

interface MailchimpConfig {
 apiKey: string;
 audienceId: string;
 serverPrefix: string; // ex: "us1", "us2", etc. (extrait de l'API key)
}

interface MailchimpMember {
 email_address: string;
 status: 'subscribed' | 'unsubscribed' | 'cleaned' | 'pending';
 merge_fields?: {
 FNAME?: string;
 LNAME?: string;
 PHONE?: string;
 CITY?: string;
 };
 tags?: string[];
}

/**
 * Extraire le préfixe serveur de l'API key Mailchimp
 * Format: xxxxx-usX
 */
function getServerPrefix(apiKey: string): string {
 const parts = apiKey.split('-');
 if (parts.length < 2) {
 throw new Error('Invalid Mailchimp API key format');
 }
 return parts[1];
}

/**
 * Créer la configuration Mailchimp depuis les variables d'environnement
 */
export function getMailchimpConfig(): MailchimpConfig | null {
 const apiKey = process.env.MAILCHIMP_API_KEY;
 const audienceId = process.env.MAILCHIMP_AUDIENCE_ID;

 if (!apiKey || !audienceId) {
 console.warn('Mailchimp not configured: missing API_KEY or AUDIENCE_ID');
 return null;
 }

 return {
 apiKey,
 audienceId,
 serverPrefix: getServerPrefix(apiKey)};
}

/**
 * Ajouter ou mettre à jour un abonné dans Mailchimp
 */
export async function syncSubscriberToMailchimp(subscriber: {
 email: string;
 name?: string | null;
 phone?: string | null;
 city?: string | null;
 tags?: string | null;
 isSubscribed: number;
}): Promise<{ success: boolean; mailchimpId?: string; error?: string }> {
 const config = getMailchimpConfig();
 if (!config) {
 return { success: false, error: 'Mailchimp not configured' };
 }

 try {
 const url = `https://${config.serverPrefix}.api.mailchimp.com/3.0/lists/${config.audienceId}/members`;

 // Préparer les merge fields
 const mergeFields: any = {};
 if (subscriber.name) {
 const nameParts = subscriber.name.split(' ');
 mergeFields.FNAME = nameParts[0];
 if (nameParts.length > 1) {
 mergeFields.LNAME = nameParts.slice(1).join(' ');
 }
 }
 if (subscriber.phone) {
 mergeFields.PHONE = subscriber.phone;
 }
 if (subscriber.city) {
 mergeFields.CITY = subscriber.city;
 }

 // Préparer les tags
 let tags: string[] = [];
 if (subscriber.tags) {
 try {
 tags = JSON.parse(subscriber.tags);
 } catch (e) {
 console.warn('Failed to parse tags:', subscriber.tags);
 }
 }

 const memberData: MailchimpMember = {
 email_address: subscriber.email,
 status: subscriber.isSubscribed === 1 ? 'subscribed' : 'unsubscribed',
 merge_fields: Object.keys(mergeFields).length > 0 ? mergeFields : undefined,
 tags: tags.length > 0 ? tags : undefined};

 // Utiliser PUT pour créer ou mettre à jour (upsert)
 // Hash MD5 de l'email pour l'ID membre
 const crypto = await import('crypto');
 const subscriberHash = crypto.createHash('md5').update(subscriber.email.toLowerCase()).digest('hex');
 const memberUrl = `${url}/${subscriberHash}`;

 const response = await fetch(memberUrl, {
 method: 'PUT',
 headers: {
 'Authorization': `Bearer ${config.apiKey}`,
 'Content-Type': 'application/json'},
 body: JSON.stringify(memberData)});

 if (!response.ok) {
 const error = await response.text();
 console.error('Mailchimp API error:', error);
 return { success: false, error: `Mailchimp API error: ${response.status}` };
 }

 const result = await response.json();
 return { success: true, mailchimpId: result.id };

 } catch (error) {
 console.error('Error syncing to Mailchimp:', error);
 return { success: false, error: String(error) };
 }
}

/**
 * Synchroniser tous les abonnés non synchronisés vers Mailchimp
 */
export async function syncAllSubscribers(): Promise<{ synced: number; errors: number }> {
 const config = getMailchimpConfig();
 if (!config) {
 console.warn('Mailchimp not configured, skipping sync');
 return { synced: 0, errors: 0 };
 }

 try {
 const { getDb } = await import('./db');
 const { emailSubscribers } = await import('../drizzle/schema');
 const { isNull } = await import('drizzle-orm');
 const db = await getDb();
 if (!db) throw new Error('Database not available');

 // Récupérer tous les abonnés sans mailchimpId
 const subscribers = await db
 .select()
 .from(emailSubscribers)
 .where(isNull(emailSubscribers.mailchimpId));

 let synced = 0;
 let errors = 0;

 for (const subscriber of subscribers) {
 const result = await syncSubscriberToMailchimp(subscriber);
 
 if (result.success && result.mailchimpId) {
 // Mettre à jour le mailchimpId dans la base de données
 const { eq } = await import('drizzle-orm');
 await db
 .update(emailSubscribers)
 .set({ mailchimpId: result.mailchimpId })
 .where(eq(emailSubscribers.id, subscriber.id));
 synced++;
 } else {
 errors++;
 }

 // Pause pour respecter les rate limits de Mailchimp
 await new Promise(resolve => setTimeout(resolve, 100));
 }

 return { synced, errors };

 } catch (error) {
 console.error('Error in syncAllSubscribers:', error);
 return { synced: 0, errors: 1 };
 }
}

/**
 * Créer une campagne email dans Mailchimp
 * (Pour référence future - nécessite configuration manuelle dans Mailchimp)
 */
export async function createCampaign(params: {
 subject: string;
 fromName: string;
 replyTo: string;
 htmlContent: string;
 tags?: string[];
}): Promise<{ success: boolean; campaignId?: string; error?: string }> {
 const config = getMailchimpConfig();
 if (!config) {
 return { success: false, error: 'Mailchimp not configured' };
 }

 try {
 const url = `https://${config.serverPrefix}.api.mailchimp.com/3.0/campaigns`;

 const campaignData = {
 type: 'regular',
 recipients: {
 list_id: config.audienceId,
 segment_opts: params.tags && params.tags.length > 0 ? {
 match: 'any',
 conditions: params.tags.map(tag => ({
 condition_type: 'StaticSegment',
 field: 'static_segment',
 op: 'static_is',
 value: tag}))} : undefined},
 settings: {
 subject_line: params.subject,
 from_name: params.fromName,
 reply_to: params.replyTo}};

 const response = await fetch(url, {
 method: 'POST',
 headers: {
 'Authorization': `Bearer ${config.apiKey}`,
 'Content-Type': 'application/json'},
 body: JSON.stringify(campaignData)});

 if (!response.ok) {
 const error = await response.text();
 console.error('Mailchimp API error:', error);
 return { success: false, error: `Mailchimp API error: ${response.status}` };
 }

 const campaign = await response.json();

 // Ajouter le contenu HTML
 const contentUrl = `${url}/${campaign.id}/content`;
 const contentResponse = await fetch(contentUrl, {
 method: 'PUT',
 headers: {
 'Authorization': `Bearer ${config.apiKey}`,
 'Content-Type': 'application/json'},
 body: JSON.stringify({ html: params.htmlContent })});

 if (!contentResponse.ok) {
 const error = await contentResponse.text();
 console.error('Mailchimp API error:', error);
 return { success: false, error: `Mailchimp API error: ${contentResponse.status}` };
 }

 return { success: true, campaignId: campaign.id };

 } catch (error) {
 console.error('Error creating campaign:', error);
 return { success: false, error: String(error) };
 }
}
