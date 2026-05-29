import { int, mysqlEnum, mysqlTable, text, timestamp, varchar } from "drizzle-orm/mysql-core";

/**
 * Core user table backing auth flow.
 * Extend this file with additional tables as your product grows.
 * Columns use camelCase to match both database fields and generated types.
 */
export const users = mysqlTable("users", {
 /**
 * Surrogate primary key. Auto-incremented numeric value managed by the database.
 * Use this for relations between tables.
 */
 id: int("id").autoincrement().primaryKey(),
 /** Manus OAuth identifier (openId) returned from the OAuth callback. Unique per user. */
 openId: varchar("openId", { length: 64 }).notNull().unique(),
 name: text("name"),
 email: varchar("email", { length: 320 }),
 loginMethod: varchar("loginMethod", { length: 64 }),
 role: mysqlEnum("role", ["user", "admin"]).default("user").notNull(),
 createdAt: timestamp("createdAt").defaultNow().notNull(),
 updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
 lastSignedIn: timestamp("lastSignedIn").defaultNow().notNull()});

export type User = typeof users.$inferSelect;
export type InsertUser = typeof users.$inferInsert;

// Réservations
export const bookings = mysqlTable("bookings", {
 id: int("id").autoincrement().primaryKey(),
 name: varchar("name", { length: 255 }).notNull(),
 email: varchar("email", { length: 320 }).notNull(),
 phone: varchar("phone", { length: 20 }).notNull(),
 serviceType: varchar("serviceType", { length: 100 }).notNull(),
 address: text("address").notNull(),
 city: varchar("city", { length: 100 }).notNull(),
 preferredDate: timestamp("preferredDate").notNull(),
 preferredTime: varchar("preferredTime", { length: 20 }).notNull(),
 description: text("description"),
 status: mysqlEnum("status", ["pending", "confirmed", "completed", "cancelled"]).default("pending").notNull(),
 createdAt: timestamp("createdAt").defaultNow().notNull(),
 updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull()});

export type Booking = typeof bookings.$inferSelect;
export type InsertBooking = typeof bookings.$inferInsert;

// Photos de galerie
export const galleryPhotos = mysqlTable("gallery_photos", {
 id: int("id").autoincrement().primaryKey(),
 title: varchar("title", { length: 255 }).notNull(),
 description: text("description"),
 beforeImageUrl: text("beforeImageUrl").notNull(),
 afterImageUrl: text("afterImageUrl").notNull(),
 category: varchar("category", { length: 100 }).notNull(),
 city: varchar("city", { length: 100 }),
 displayOrder: int("displayOrder").default(0).notNull(),
 createdAt: timestamp("createdAt").defaultNow().notNull(),
 updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull()});

export type GalleryPhoto = typeof galleryPhotos.$inferSelect;
export type InsertGalleryPhoto = typeof galleryPhotos.$inferInsert;

// Avis clients
export const reviews = mysqlTable("reviews", {
 id: int("id").autoincrement().primaryKey(),
 name: varchar("name", { length: 255 }).notNull(),
 email: varchar("email", { length: 320 }),
 city: varchar("city", { length: 100 }).notNull(),
 rating: int("rating").notNull(), // 1-5 étoiles
 comment: text("comment").notNull(),
 serviceType: varchar("serviceType", { length: 100 }),
 isApproved: int("isApproved").default(0).notNull(), // 0 = en attente, 1 = approuvé
 createdAt: timestamp("createdAt").defaultNow().notNull(),
 updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull()});

export type Review = typeof reviews.$inferSelect;
export type InsertReview = typeof reviews.$inferInsert;

// Demandes de devis
export const quoteRequests = mysqlTable("quote_requests", {
 id: int("id").autoincrement().primaryKey(),
 name: varchar("name", { length: 255 }).notNull(),
 email: varchar("email", { length: 320 }).notNull(),
 phone: varchar("phone", { length: 20 }).notNull(),
 nif: varchar("nif", { length: 9 }), // Número de Identificação Fiscal
 // Adresse complète
 street: varchar("street", { length: 255 }), // Rua/Avenida
 streetNumber: varchar("streetNumber", { length: 20 }), // Número
 complement: varchar("complement", { length: 100 }), // Andar, Porta, etc.
 postalCode: varchar("postalCode", { length: 10 }), // Código Postal
 city: varchar("city", { length: 100 }).notNull(),
 address: text("address"), // Adresse complète formatée (legacy)
 // Géolocalisation
 latitude: varchar("latitude", { length: 20 }), // Coordonnées GPS
 longitude: varchar("longitude", { length: 20 }),
 serviceType: varchar("serviceType", { length: 100 }).notNull(),
 urgency: mysqlEnum("urgency", ["normal", "urgent"]).default("normal").notNull(),
 description: text("description").notNull(),
 photoUrls: text("photoUrls"), // JSON array de URLs de photos
 status: mysqlEnum("status", ["pending", "quoted", "accepted", "rejected", "completed"]).default("pending").notNull(),
 estimatedPrice: varchar("estimatedPrice", { length: 50 }),
 notes: text("notes"), // Notes internes
 createdAt: timestamp("createdAt").defaultNow().notNull(),
 updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull()});

export type QuoteRequest = typeof quoteRequests.$inferSelect;
export type InsertQuoteRequest = typeof quoteRequests.$inferInsert;

// Abonnés newsletter
export const emailSubscribers = mysqlTable("email_subscribers", {
 id: int("id").autoincrement().primaryKey(),
 email: varchar("email", { length: 320 }).notNull().unique(),
 name: varchar("name", { length: 255 }),
 phone: varchar("phone", { length: 20 }),
 city: varchar("city", { length: 100 }),
 source: varchar("source", { length: 100 }).notNull(), // 'footer_form', 'popup', 'quote_form', etc.
 isSubscribed: int("isSubscribed").default(1).notNull(), // 1 = abonné, 0 = désabonné
 mailchimpId: varchar("mailchimpId", { length: 100 }), // ID Mailchimp pour sync
 tags: text("tags"), // JSON array de tags pour segmentation
 subscribedAt: timestamp("subscribedAt").defaultNow().notNull(),
 unsubscribedAt: timestamp("unsubscribedAt"),
 createdAt: timestamp("createdAt").defaultNow().notNull(),
 updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull()});

export type EmailSubscriber = typeof emailSubscribers.$inferSelect;
export type InsertEmailSubscriber = typeof emailSubscribers.$inferInsert;
