/**
 * Témoignages Clients - Norte Reparos
 *
 * LOT 5 RÈGLE 72 : témoignages inventés supprimés.
 * Espace réservé pour témoignages réels de clients (à venir).
 * Tout import de TESTIMONIALS recevra un tableau vide.
 */
export interface Testimonial {
 id: number;
 name: string;
 city: string;
 service: string;
 rating: 5;
 date: string;
 text: string;
 verified: boolean;
}
export const TESTIMONIALS: Testimonial[] = [];
