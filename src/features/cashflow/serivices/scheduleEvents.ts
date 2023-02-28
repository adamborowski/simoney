import { CashEvent } from "../client/CashflowClient";
import {} from "rrule";
import { cashEventToRRule } from "./cashEventToRRule";

export type ScheduledEvent = Omit<CashEvent, "repeat"> & {
  originalEvent: CashEvent;
};

export const scheduleEvents = (
  inputEvents: CashEvent[],
  until: Date
): ScheduledEvent[] => {
  const timeline: ScheduledEvent[] = [];
  inputEvents.map((event) => {
    const events = cashEventToRRule(event).between(new Date(), until);
    events.forEach((date) =>
      timeline.push({
        originalEvent: event,
        date,
        amount: event.amount,
        name: event.name,
      })
    );
  });
  return timeline.sort((a, b) => a.date.getTime() - b.date.getTime());
};
