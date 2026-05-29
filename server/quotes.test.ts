import { describe, it, expect, beforeAll } from "vitest";
import { appRouter } from "./routers";
import { getDb } from "./db";
import type { Context } from "./_core/context";

describe("Quotes API", () => {
 let db: Awaited<ReturnType<typeof getDb>>;
 let caller: ReturnType<typeof appRouter.createCaller>;

 beforeAll(async () => {
 db = await getDb();
 if (!db) throw new Error("Database not available");

 // Create a mock context
 const mockContext: Context = {
 user: null,
 req: {} as any,
 res: {} as any};

 caller = appRouter.createCaller(mockContext);
 });

 it("should create a quote request successfully", async () => {
 const quoteData = {
 name: "João Silva",
 email: "joao@example.com",
 phone: "912345678",
 city: "Bragança",
 address: "Rua das Flores, 123",
 serviceType: "Arranjo de fugas de água",
 urgency: "normal" as const,
 description: "Tenho uma fuga de água na casa de banho que precisa de ser arranjada urgentemente."};

 const result = await caller.quotes.create(quoteData);
 expect(result.success).toBe(true);
 });

 it("should fail when name is empty", async () => {
 const quoteData = {
 name: "",
 email: "joao@example.com",
 phone: "912345678",
 city: "Bragança",
 serviceType: "Arranjo de fugas de água",
 urgency: "normal" as const,
 description: "Tenho uma fuga de água na casa de banho."};

 await expect(caller.quotes.create(quoteData)).rejects.toThrow();
 });

 it("should fail when email is invalid", async () => {
 const quoteData = {
 name: "João Silva",
 email: "invalid-email",
 phone: "912345678",
 city: "Bragança",
 serviceType: "Arranjo de fugas de água",
 urgency: "normal" as const,
 description: "Tenho uma fuga de água na casa de banho."};

 await expect(caller.quotes.create(quoteData)).rejects.toThrow();
 });

 it("should fail when description is too short", async () => {
 const quoteData = {
 name: "João Silva",
 email: "joao@example.com",
 phone: "912345678",
 city: "Bragança",
 serviceType: "Arranjo de fugas de água",
 urgency: "normal" as const,
 description: "Curto"};

 await expect(caller.quotes.create(quoteData)).rejects.toThrow();
 });

 it("should create urgent quote request", async () => {
 const quoteData = {
 name: "Maria Santos",
 email: "maria@example.com",
 phone: "932123456",
 city: "Mirandela",
 serviceType: "Desentupimento de canalizações",
 urgency: "urgent" as const,
 description: "Emergência! Tenho um entupimento grave que está a causar inundação."};

 const result = await caller.quotes.create(quoteData);
 expect(result.success).toBe(true);
 });

 it("should list all quote requests", async () => {
 const quotes = await caller.quotes.list();
 expect(Array.isArray(quotes)).toBe(true);
 expect(quotes.length).toBeGreaterThan(0);
 });
});
