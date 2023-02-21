import { FC } from "react";
import { AuthClient } from "../../authorization/client/AuthClient";

export interface CashflowPageProps {
  authClient: AuthClient;
}
export const CashflowPage: FC<CashflowPageProps> = ({ authClient }) => {
  return (
    <>
      hello<button onClick={authClient.logout}>logout</button>
    </>
  );
};
