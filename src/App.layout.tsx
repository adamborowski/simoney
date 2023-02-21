import {
  createElement,
  FC,
  PropsWithChildren,
  ReactNode,
  useState,
} from "react";
import { Button, Layout, Menu, theme } from "antd";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import styles from "./App.layout.module.css";
import { useMatch } from "react-router-dom";
import { toCashflowPage } from "./features/cashflow/routing";

const { Header, Sider, Content } = Layout;

export interface AppLayoutProps {
  sidebar: ReactNode;
}

export const AppLayout: FC<PropsWithChildren<AppLayoutProps>> = ({
  children,
  sidebar,
}) => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const isCashFlow = useMatch(toCashflowPage());

  return (
    <Layout className={styles.root}>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo" />
        {sidebar}
      </Sider>
      <Layout className="site-layout">
        <Header style={{ padding: 0, background: colorBgContainer }}>
          <Button
            className={styles.toggleButton}
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
          />
        </Header>
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
          }}
        >
          {children}
        </Content>
      </Layout>
    </Layout>
  );
};
