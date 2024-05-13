import useSWR from "swr";
import Article from "./Article";

const ArticleList = () => {
  const { data, isLoading } = useSWR("/api/articles");
  if (isLoading) return <>is loading...</>;
  return (data || []).map((d) => (
    <div style={{ marginTop: "8px" }}>
      <Article key={d.title} title={d.title} body={d.body} />
    </div>
  ));
};

export default ArticleList;
