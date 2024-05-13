import { Card } from "antd";
import Markdown from "../markdown/Markdown";

type Props = {
  title: string;
  body: string;
};
const Article: React.FC<Props> = ({ title, body }) => (
  <Card title={title}>
    <Markdown text={body} />
  </Card>
);

export default Article;
