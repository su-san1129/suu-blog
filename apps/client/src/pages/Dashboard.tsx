import type { MenuProps } from "antd";
import { Layout, Menu, theme } from "antd";
const { Header, Content, Sider } = Layout;
import { Outlet, Link } from "react-router-dom";

const items1: MenuProps["items"] = ["新規", "編集"].map((key, i) => ({
  key: i + 1,
  label: <Link to="new">{key}</Link>,
}));

const Dashboard = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout>
      <Header style={{ display: "flex", alignItems: "center" }}>
        <div className="demo-logo" style={{ color: "white" }}>
          Suu blog
        </div>
      </Header>
      <Layout>
        <Sider width={200} style={{ background: colorBgContainer }}>
          <Menu
            mode="inline"
            style={{ height: "100%", borderRight: 0 }}
            items={items1}
          />
        </Sider>
        <Layout style={{ padding: "0 24px 24px" }}>
          <Content
            style={{
              padding: 24,
              margin: "8px 0",
              minHeight: 280,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            <Outlet />
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default Dashboard;
