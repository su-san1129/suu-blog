import "./App.css";
import { Layout, theme, Menu, Row, Col } from "antd";
import { SWRConfig } from "swr";
import { fetcher } from "./api/fetcher";
import Content from "./components/layout/Content";
const { Header, Footer } = Layout;

function App() {
  return (
    <SWRConfig value={{ fetcher }}>
      <Layout>
        <Header style={{ display: "flex", alignItems: "center" }}>
          <div className="header" style={{ color: "white" }}>
            Suu blog
          </div>
        </Header>
        <Content />
        <Footer style={{ textAlign: "center" }}>2024 Suu blog</Footer>
      </Layout>
    </SWRConfig>
  );
}

export default App;
