import useSWR from "swr";
import Article from "./Article";

const ArticleList = () => {
  const { data, error, isLoading } = useSWR("/api/articles");
  if (isLoading) return <>is loading...</>;
  return data.map((d) => (
    <Article key={d.title} title={d.title} body={d.body} />
  ));
};

export default ArticleList;
