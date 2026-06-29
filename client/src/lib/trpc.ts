import { createTRPCReact } from "@trpc/client";
import type { AppRouter } from "../../../server/routers";
export const trpc = createTRPCReact<AppRouter>();
