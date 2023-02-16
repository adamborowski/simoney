import React, { FC } from "react";
import "./App.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { RegisterPage } from "./features/authorization/pages/RegisterPage";
import { LoginPage } from "./features/authorization/pages/LoginPage";
import { CashflowPage } from "./features/cashflow/pages/CashflowPage";
import { Spin } from "antd";
import { toLoginPage, toRegisterPage } from "./features/authorization/routing";
import { toCashflowPage } from "./features/cashflow/routing";
import { AuthClient } from "./features/authorization/client/AuthClient";

export interface AppConnectedProps {
  authClient: AuthClient;
}

export const AppConnected: FC<AppConnectedProps> = ({ authClient }) => {
  const [user, loading, error] = authClient.useAuthState();
  return (
    <BrowserRouter>
      {loading ? (
        <Spin />
      ) : user ? (
        <Routes>
          <Route
            path={toCashflowPage()}
            element={<CashflowPage authClient={authClient} />}
          />
          <Route path="/*" element={<Navigate to={toCashflowPage()} />} />
        </Routes>
      ) : (
        <Routes>
          <Route
            path={toRegisterPage()}
            element={<RegisterPage client={authClient} />}
          />
          <Route
            path={toLoginPage()}
            element={<LoginPage client={authClient} />}
          />
          <Route path="/*" element={<LoginPage client={authClient} />} />
        </Routes>
      )}
    </BrowserRouter>
  );
};
