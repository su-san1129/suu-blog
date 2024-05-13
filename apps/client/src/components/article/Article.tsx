import { Card } from "antd";
import Markdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";

type CodeBlockProps = {
  className: string;
  children: string;
};

const CodeBlock: React.FC<CodeBlockProps> = ({
  className,
  children,
  ...rest
}) => {
  const match = /language-(\w+)/.exec(className || "");
  return match ? (
    <SyntaxHighlighter
      {...rest}
      PreTag="div"
      children={String(children).replace(/\n$/, "")}
      language={match[1]}
      style={atomDark}
    />
  ) : (
    <code
      {...rest}
      className={className}
      style={{
        padding: "0 2px",
        background: "#afb8c133",
        borderRadius: "4px",
      }}
    >
      {children}
    </code>
  );
};

type Props = {
  title: string;
  body: string;
};
const Article: React.FC<Props> = ({ title, body }) => (
  <Card title={title}>
    <Markdown
      components={{
        code: CodeBlock,
      }}
    >
      {body}
    </Markdown>
  </Card>
);

export default Article;
