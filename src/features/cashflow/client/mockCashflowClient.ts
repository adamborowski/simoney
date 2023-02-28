import { CashEvent, CashflowClient } from "./CashflowClient";

export const createMockCashflowClient = (
  initialEvents: CashEvent[],
  balance: number
): CashflowClient => {
  return {
    getAll: async () => {
      return { balance, events: initialEvents };
    },
  };
};
