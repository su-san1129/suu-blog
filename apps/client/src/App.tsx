import "./App.css";
import { Layout, theme, Menu, Row, Col } from "antd";
const { Header, Content, Footer } = Layout;

function App() {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const items = [
    {
      key: "grp",
      label: "Group",
      type: "group",
      children: [
        { key: "13", label: "Option 13" },
        { key: "14", label: "Option 14" },
      ],
    },
  ];

  return (
    <Layout>
      <Header style={{ display: "flex", alignItems: "center" }}>
        <div className="header" style={{ color: "white" }}>
          Suu blog
        </div>
      </Header>
      <Content style={{ padding: "0 48px" }}>
        <Row>
          <Col span="18">
            <div
              style={{
                padding: 24,
                minHeight: 380,
                background: colorBgContainer,
                borderRadius: borderRadiusLG,
              }}
            >
              Content
            </div>
          </Col>
          <Col span="4">
            <div
              style={{
                width: 256,
                margin: "0 12px",
                borderRadius: borderRadiusLG,
              }}
            >
              <Menu
                style={{ width: 256 }}
                defaultSelectedKeys={["1"]}
                defaultOpenKeys={["sub1"]}
                mode="inline"
                items={items}
              />
            </div>
          </Col>
        </Row>
      </Content>
      <Footer style={{ textAlign: "center" }}>2024 Suu blog</Footer>
    </Layout>
  );
}

export default App;
