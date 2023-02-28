import { CashEvent } from "../client/CashflowClient";
import { Frequency, Options, RRule } from "rrule";

const getFrequencyOptions = (event: CashEvent): Partial<Options> => {
  switch (event.repeat) {
    case "weekly":
      return { freq: Frequency.WEEKLY };
    case "monthly":
      return { freq: Frequency.MONTHLY };
    case "biweekly":
      return { freq: Frequency.WEEKLY, interval: 2 };
    default:
      return {};
  }
};

export const cashEventToRRule = (event: CashEvent) =>
  new RRule({
    dtstart: new Date(event.date),
    ...getFrequencyOptions(event),
  });
