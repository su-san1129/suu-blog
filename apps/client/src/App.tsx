import "./App.css";
import { Layout, theme, Menu, Row, Col } from "antd";
import { SWRConfig } from "swr";
import { fetcher } from "./api/fetcher";
import ArticleList from "./components/article/ArticleList";
const { Header, Content, Footer } = Layout;

function App() {
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
    <SWRConfig value={{ fetcher }}>
      <Layout>
        <Header style={{ display: "flex", alignItems: "center" }}>
          <div className="header" style={{ color: "white" }}>
            Suu blog
          </div>
        </Header>
        <Content style={{ padding: "12px 48px" }}>
          <Row justify="center">
            <Col span="14">
              <ArticleList />
            </Col>
            <Col span="4">
              <div
                style={{
                  width: 256,
                  margin: "0 12px",
                  borderRadius: "12px",
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
    </SWRConfig>
  );
}

export default App;
