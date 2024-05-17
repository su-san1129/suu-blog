import React, { useState } from "react";
import { Button, Form, Input, Tabs } from "antd";
import type { TabsProps } from "antd";
import TextArea from "antd/es/input/TextArea";
import { ArticleFormItem } from "../types";
import Preview from "./Preview";
import { MyFormItem, MyFormItemGroup } from "../Form";
import { Article } from "@suu-blog/types";
import { post } from "../../../api/fetcher";

type NewProps = {
  handleChange: (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => void;
};
const New: React.FC<NewProps> = ({ handleChange }) => {
  const onFinish = ({ article }: { article: Article }) => {
    if (!article.title || !article.content) {
      return;
    }
    post("/articles", article);
  };
  return (
    <Form name="form_item_path" layout="vertical" onFinish={onFinish}>
      <MyFormItemGroup prefix={["article"]}>
        <MyFormItem name="title" label="タイトル">
          <Input id="title" onChange={handleChange} />
        </MyFormItem>
        <MyFormItem name="content" label="記事内容">
          <TextArea id="content" rows={24} onChange={handleChange} />
        </MyFormItem>
      </MyFormItemGroup>

      <Button type="primary" htmlType="submit">
        投稿
      </Button>
    </Form>
  );
};

const NewArticle = () => {
  const [formObject, setFormObject] = useState<ArticleFormItem>({
    article: { title: undefined, content: undefined },
  });

  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;

    setFormObject({
      article: {
        ...formObject.article,
        [id]: value,
      },
    });
  };

  const items: TabsProps["items"] = [
    {
      key: "1",
      label: "入稿",
      children: <New handleChange={handleChange} />,
    },
    {
      key: "2",
      label: "プレビュー",
      children: <Preview formObject={formObject} />,
    },
  ];

  return <Tabs defaultActiveKey="1" items={items} />;
};

export default NewArticle;
