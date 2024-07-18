import { authrouter } from "./auth-router";
import { publicProcedure, router } from "./trpc";

export const appRouter = router({
  auth: authrouter,
});

export type AppRouter = typeof appRouter;
