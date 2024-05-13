import useSWR from "swr";
import Article from "./Article";

const ArticleList = () => {
  const { data, isLoading } = useSWR("/api/articles");
  if (isLoading) return <>is loading...</>;

  return (data || []).map((d) => (
    <div key={d.title} style={{ marginBottom: "8px" }}>
      <Article title={d.title} body={d.body} />
    </div>
  ));
};

export default ArticleList;
