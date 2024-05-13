import Markdown from "../../markdown/Markdown";
import { ArticleFormItem } from "../types";

type PreviewProps = {
  formObject: ArticleFormItem;
};
const Preview: React.FC<PreviewProps> = ({ formObject }) => {
  return (
    <>
      <h1>{formObject.article.title}</h1>
      <Markdown text={formObject.article.body!} />
    </>
  );
};

export default Preview;
