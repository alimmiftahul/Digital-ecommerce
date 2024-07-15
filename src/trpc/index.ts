import { authrouter } from "./auth-router";
import { publicProcedur, router } from "./trpc";

export const appRouter = router({
  auth: authrouter,
});

export type AppRouter = typeof appRouter;
