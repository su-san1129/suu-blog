import { Layout, Row, Col, Menu, Grid } from "antd";
import ArticleList from "../article/ArticleList";
import { Outlet } from "react-router-dom";
const { Content: AntContent } = Layout;
const { useBreakpoint } = Grid;

const Content = () => {
  const screens = useBreakpoint();

  const items = [
    {
      key: "date",
      label: "日付",
      type: "group",
      children: [
        { key: "1", label: "2024年5月 (1)" },
        { key: "2", label: "2024年4月 (2)" },
      ],
    },
  ];

  if (Boolean(screens.xs)) {
    return (
      <AntContent style={{ marginTop: "8px" }}>
        <Outlet />
      </AntContent>
    );
  }

  return (
    <AntContent style={{ marginTop: "8px" }}>
      <Row justify="center">
        <Col span="14">
          <Outlet />
        </Col>
        <Col span="4">
          <div
            style={{
              margin: "0 12px",
            }}
          >
            <Menu style={{ borderRadius: "12px" }} items={items} />
          </div>
        </Col>
      </Row>
    </AntContent>
  );
};

export default Content;
