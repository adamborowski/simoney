import { FC } from "react";
import { AuthClient } from "../../authorization/client/AuthClient";
import { CashflowClient } from "../client/CashflowClient";
import { useCashflowEvents } from "../serivices/useCashflowEvents";
import { Chart } from "./Chart";

export interface CashflowPageProps {
  authClient: AuthClient;
  cashflowClient: CashflowClient;
}

const until = new Date("2023-10-11");
export const CashflowPage: FC<CashflowPageProps> = ({
  authClient,
  cashflowClient,
}) => {
  const { timeline } = useCashflowEvents(cashflowClient, until);

  return (
    <>
      hello<button onClick={authClient.logout}>logout</button>
      {timeline && (
        <>
          <Chart data={timeline} />
          <table>
            {timeline.map((event) => (
              <tr key={event.date.getTime()}>
                <td>{event.date.toISOString().split("T")[0]}</td>
                <td>{event.name}</td>
                <td>{event.amount.toFixed(0)}</td>
                <td>{event.accomodatedAmount.toFixed(0)}</td>
              </tr>
            ))}
          </table>
        </>
      )}
    </>
  );
};
