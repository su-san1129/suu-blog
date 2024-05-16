import useSWR from "swr";
import { Card, Tag } from "antd";
import {
  removeMarkdownSpecialChars,
  scliceString,
} from "../../utils/stringUtil";
import { Link } from "react-router-dom";
import { format } from "@formkit/tempo";

const ArticleList = () => {
  const { data, isLoading } = useSWR("/api/articles");
  if (isLoading) return <>is loading...</>;

  return (data || []).map((d) => (
    <Link key={d.id} to={`articles/${d.id}`}>
      <Card
        title={
          <div style={{ margin: "4px 0" }}>
            <span style={{ color: "grey", fontSize: "0.8rem" }}>
              {format(d.createdAt, "long")}
            </span>
            <div>{d.title}</div>
          </div>
        }
        style={{ marginBottom: "8px" }}
        hoverable
      >
        <div
          style={{
            overflow: "hidden",
            display: "-webkit-box",
            textOverflow: "ellipsis",
            WebkitBoxOrient: "vertical",
            WebkitLineClamp: 3,
          }}
        >
          {scliceString(removeMarkdownSpecialChars(d.content))}
        </div>
        <div style={{ marginTop: "8px" }}>
          {(d.tags || []).map(({ name, color }) => (
            <Tag key={name} color={color}>
              {name}
            </Tag>
          ))}
        </div>
      </Card>
    </Link>
  ));
};

export default ArticleList;
