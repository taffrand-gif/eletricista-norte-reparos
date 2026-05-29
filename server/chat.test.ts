import { describe, it, expect, vi } from "vitest";
import { appRouter } from "./routers";
import type { TrpcContext } from "./_core/context";

// Mock notifyOwner
vi.mock("./_core/notification", () => ({
 notifyOwner: vi.fn().mockResolvedValue(true)}));

describe("Chat Router", () => {
 it("should send a chat message successfully", async () => {
 const ctx: TrpcContext = {
 user: null,
 req: {} as any,
 res: {} as any};

 const caller = appRouter.createCaller(ctx);

 const result = await caller.chat.sendMessage({
 name: "João Silva",
 message: "Preciso de um canalizador urgente"});

 expect(result).toEqual({ success: true });
 });

 it("should fail with empty name", async () => {
 const ctx: TrpcContext = {
 user: null,
 req: {} as any,
 res: {} as any};

 const caller = appRouter.createCaller(ctx);

 await expect(
 caller.chat.sendMessage({
 name: "",
 message: "Test message"})
 ).rejects.toThrow();
 });

 it("should fail with empty message", async () => {
 const ctx: TrpcContext = {
 user: null,
 req: {} as any,
 res: {} as any};

 const caller = appRouter.createCaller(ctx);

 await expect(
 caller.chat.sendMessage({
 name: "João Silva",
 message: ""})
 ).rejects.toThrow();
 });
});
