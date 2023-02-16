import { FC } from "react";
import { AuthClient } from "../../authorization/client/AuthClient";
import { AppLayout } from "../../../App.layout";

export interface CashflowPageProps {
  authClient: AuthClient;
}
export const CashflowPage: FC<CashflowPageProps> = ({ authClient }) => {
  return (
    <AppLayout>
      hello<button onClick={authClient.logout}>logout</button>
    </AppLayout>
  );
};
