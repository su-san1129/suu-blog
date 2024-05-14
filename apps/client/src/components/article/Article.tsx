import { Button, Card } from "antd";
import Markdown from "../markdown/Markdown";
import useSWR from "swr";
import { Link, useParams } from "react-router-dom";

const Article = () => {
  const { id } = useParams();
  const { data, isLoading } = useSWR("/api/articles");

  if (isLoading) {
    return <>is loading...</>;
  }

  const article = data.find((_) => _.id == id);

  if (!article) {
    return <>記事が存在しません。</>;
  }

  return (
    <>
      <Link to={"/"}>
        <Button type="text">{`< Back`}</Button>
      </Link>
      <Card title={article.title}>
        <Markdown text={article.body} />
      </Card>
      <Link to={"/"}>
        <Button type="text">{`< Back`}</Button>
      </Link>
    </>
  );
};

export default Article;
