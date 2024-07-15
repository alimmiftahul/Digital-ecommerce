import { publicProcedur, router } from "./trpc";

export const appRouter = router({
  anyApiRoute: publicProcedur.query(() => {
    return "Hello from the app router!";
  }),
});

export type AppRouter = typeof appRouter;
