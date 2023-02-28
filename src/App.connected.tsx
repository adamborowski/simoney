import React, { FC } from "react";
import "./App.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { RegisterPage } from "./features/authorization/pages/RegisterPage";
import { LoginPage } from "./features/authorization/pages/LoginPage";
import { CashflowPage } from "./features/cashflow/pages/CashflowPage";
import { Menu, Spin } from "antd";
import { toLoginPage, toRegisterPage } from "./features/authorization/routing";
import { toCashflowPage } from "./features/cashflow/routing";
import { AuthClient } from "./features/authorization/client/AuthClient";
import { toAcmePage } from "./features/acme/routing";
import { AcmePage } from "./features/acme/pages/AcmePage";
import { AppLayout } from "./App.layout";
import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { defaultMockCashflowClient } from "./features/cashflow/client/defaultMockCashflowClient";

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
        <AppLayout
          sidebar={
            <Menu
              theme="dark"
              mode="inline"
              defaultSelectedKeys={["1"]}
              items={[
                {
                  key: "1",
                  icon: <UserOutlined />,
                  label: "CashFlow",
                },
                {
                  key: "2",
                  icon: <VideoCameraOutlined />,
                  label: "nav 2",
                },
                {
                  key: "3",
                  icon: <UploadOutlined />,
                  label: "nav 3",
                },
              ]}
            />
          }
        >
          <Routes>
            <Route
              path={toCashflowPage()}
              element={
                <CashflowPage
                  authClient={authClient}
                  cashflowClient={defaultMockCashflowClient}
                />
              }
            />
            <Route path={toAcmePage()} element={<AcmePage />} />
            <Route path="/*" element={<Navigate to={toCashflowPage()} />} />
          </Routes>
        </AppLayout>
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
