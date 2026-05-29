import { describe, it, expect, beforeAll, afterAll } from "vitest";
import { appRouter } from "./routers";

describe("Newsletter API", () => {
 let caller: ReturnType<typeof appRouter.createCaller>;

 beforeAll(async () => {
 // Create a test caller with mock context
 caller = appRouter.createCaller({
 user: null,
 req: {} as any,
 res: {} as any});
 });

 describe("newsletter.subscribe", () => {
 it("should subscribe a new email", async () => {
 const testEmail = `test-${Date.now()}@example.com`;
 
 const result = await caller.newsletter.subscribe({
 email: testEmail,
 name: "Test User",
 city: "Bragança",
 source: "test"});

 expect(result.success).toBe(true);
 expect(result.message).toContain("succès");
 });

 it("should reject invalid email", async () => {
 await expect(
 caller.newsletter.subscribe({
 email: "invalid-email",
 source: "test"})
 ).rejects.toThrow();
 });

 it("should handle duplicate subscription", async () => {
 const testEmail = `duplicate-${Date.now()}@example.com`;
 
 // First subscription
 await caller.newsletter.subscribe({
 email: testEmail,
 source: "test"});

 // Second subscription (duplicate)
 const result = await caller.newsletter.subscribe({
 email: testEmail,
 source: "test"});

 expect(result.success).toBe(false);
 expect(result.message).toContain("déjà abonné");
 });

 it("should accept optional fields", async () => {
 const testEmail = `optional-${Date.now()}@example.com`;
 
 const result = await caller.newsletter.subscribe({
 email: testEmail,
 name: "João Silva",
 phone: "912345678",
 city: "Mirandela",
 source: "popup",
 tags: ["promo", "urgente"]});

 expect(result.success).toBe(true);
 });
 });

 describe("newsletter.list", () => {
 it("should return list of active subscribers", async () => {
 const result = await caller.newsletter.list();

 expect(Array.isArray(result)).toBe(true);
 // Tous les résultats doivent être des abonnés actifs
 result.forEach((subscriber) => {
 expect(subscriber.isSubscribed).toBe(1);
 });
 });
 });

 describe("newsletter.unsubscribe", () => {
 it("should unsubscribe an email", async () => {
 const testEmail = `unsubscribe-${Date.now()}@example.com`;
 
 // D'abord s'abonner
 await caller.newsletter.subscribe({
 email: testEmail,
 source: "test"});

 // Puis se désabonner
 const result = await caller.newsletter.unsubscribe({
 email: testEmail});

 expect(result.success).toBe(true);
 });

 it("should allow resubscription after unsubscribe", async () => {
 const testEmail = `resubscribe-${Date.now()}@example.com`;
 
 // S'abonner
 await caller.newsletter.subscribe({
 email: testEmail,
 source: "test"});

 // Se désabonner
 await caller.newsletter.unsubscribe({
 email: testEmail});

 // Se réabonner
 const result = await caller.newsletter.subscribe({
 email: testEmail,
 source: "test"});

 expect(result.success).toBe(true);
 expect(result.message).toContain("Réabonné");
 });
 });
});
