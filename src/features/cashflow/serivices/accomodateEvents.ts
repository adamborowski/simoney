export const accomodateEvents = <T extends { date: Date; amount: number }>(
  cashFlowEvents: T[],
  startValue: number
): (T & { accomodatedAmount: number })[] => {
  let sum = startValue;
  return cashFlowEvents.map((value) => {
    sum += value.amount;
    return {
      ...value,
      accomodatedAmount: sum,
    };
  });
};
