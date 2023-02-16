import { z } from "zod";

export const cashEventSchema = z.object({
  name: z.string(),
  amount: z.number().min(1),
  repeat: z.union([
    z.literal("none"),
    z.literal("monthly"),
    z.literal("weekly"),
  ]),
  startDate: z.string(),
});

export interface CashEvent {
  name: string;
  amount: number;
  repeat: "none" | "monthly" | "weekly";
  startDate: string;
}
export interface CashflowClient {
  getAll(): CashEvent[];
}
