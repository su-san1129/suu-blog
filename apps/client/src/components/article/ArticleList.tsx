import useSWR from "swr";
import { Card } from "antd";
import {
  removeMarkdownSpecialChars,
  scliceString,
} from "../../utils/stringUtil";
import { Link } from "react-router-dom";

const DISPLAY_BODY_LIMIT = 200;

const ArticleList = () => {
  const { data, isLoading } = useSWR("/api/articles");
  if (isLoading) return <>is loading...</>;

  return (data || []).map((d) => (
    <Link key={d.id} to={`articles/${d.id}`}>
      <Card title={d.title} style={{ marginBottom: "8px" }} hoverable>
        <div
          style={{
            marginTop: 16,
            maxHeight: DISPLAY_BODY_LIMIT,
            overflow: "hidden",
          }}
        >
          {removeMarkdownSpecialChars(scliceString(d.body, DISPLAY_BODY_LIMIT))}
        </div>
        {d.body.length > DISPLAY_BODY_LIMIT && (
          <Link
            style={{ display: "block", marginTop: 16 }}
            to={`articles/${d.id}`}
          >
            Read more
          </Link>
        )}
      </Card>
    </Link>
  ));
};

export default ArticleList;
