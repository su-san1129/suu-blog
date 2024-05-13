import { Layout, Row, Col, Menu, Grid } from "antd";
import ArticleList from "../article/ArticleList";
const { Content: AntContent } = Layout;
const { useBreakpoint } = Grid;

const Content = () => {
  const screens = useBreakpoint();

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

  if (Boolean(screens.xs)) {
    return (
      <AntContent style={{ marginTop: "8px" }}>
        <Row justify="center">
          <Col span="22">
            <ArticleList />
          </Col>
        </Row>
      </AntContent>
    );
  }

  return (
    <AntContent style={{ marginTop: "8px" }}>
      <Row justify="center">
        <Col span="14">
          <ArticleList />
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
