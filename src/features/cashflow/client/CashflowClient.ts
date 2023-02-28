import { z } from "zod";

export const cashEventSchema = z.object({
  name: z.string(),
  amount: z.number().min(1),
  repeat: z
    .union([z.literal("monthly"), z.literal("weekly"), z.literal("biweekly")])
    .optional(),
  date: z.date(),
});

export type CashEvent = z.infer<typeof cashEventSchema>;

export const cashFlowProjectSchema = z.object({
  balance: z.number(),
  events: z.array(cashEventSchema),
});

export type CashFlowProject = z.infer<typeof cashFlowProjectSchema>;
export interface CashflowClient {
  getAll(): Promise<CashFlowProject>;
}
