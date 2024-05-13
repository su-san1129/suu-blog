type Props = {
  title: string;
  body: string;
};
const Article = ({ title, body }: Props) => (
  <div
    style={{
      padding: 24,
      margin: "8px 0",
      minHeight: 380,
      background: "#fff",
      borderRadius: "12px",
    }}
  >
    <h1>{title}</h1>
    <div>{body}</div>
  </div>
);

export default Article;
