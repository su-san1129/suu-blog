import React, { useState } from "react";
import { Button, Form, Input, Tabs } from "antd";
import type { TabsProps } from "antd";
import TextArea from "antd/es/input/TextArea";
import { ArticleFormItem } from "../types";
import Preview from "./Preview";
import { MyFormItem, MyFormItemGroup } from "../Form";

type NewProps = {
  formObject: ArticleFormItem;
  onFormItemChange: (value: ArticleFormItem) => void;
};
const New: React.FC<NewProps> = ({ formObject, onFormItemChange }) => {
  const onFinish = (value: object) => {
    console.log(value);
  };

  const onItemChange = (e: any, name: string) => {
    const { article } = formObject;
    onFormItemChange({
      article: { ...article, [name]: e.target.value },
    } as ArticleFormItem);
  };

  return (
    <Form name="form_item_path" layout="vertical" onFinish={onFinish}>
      <MyFormItemGroup prefix={["article"]}>
        <MyFormItem name="title" label="タイトル">
          <Input onChange={(e) => onItemChange(e, "title")} />
        </MyFormItem>
        <MyFormItem name="body" label="記事内容">
          <TextArea rows={24} onChange={(e) => onItemChange(e, "body")} />
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
    article: { title: undefined, body: undefined },
  });
  const items: TabsProps["items"] = [
    {
      key: "1",
      label: "入稿",
      children: (
        <New formObject={formObject} onFormItemChange={setFormObject} />
      ),
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
