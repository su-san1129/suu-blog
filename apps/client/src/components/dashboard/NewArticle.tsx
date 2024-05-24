import React, { useContext, useEffect, useState } from 'react'
import { Button, Form, Input, Select, Tabs, message } from 'antd'
import type { SelectProps, TabsProps } from 'antd'
import TextArea from 'antd/es/input/TextArea'
import { ArticleFormItem } from './types'
import Preview from './Preview'
import { post } from '../../api/fetcher'
import useSWR from 'swr'
import { Tag } from '@suu-blog/types'
import AuthContext from '../../context/AuthProvider'

type NewProps = {
  formObject: ArticleFormItem
  onSubmit: () => void
  handleChange: (e: { target: { id: string; value: any } }) => void
}
const New: React.FC<NewProps> = ({ formObject, onSubmit, handleChange }) => {
  const [options, setOptions] = useState<SelectProps['options']>([])
  const { data } = useSWR<{ tags: Tag[] }>('/tags')

  useEffect(() => {
    if (data) {
      setOptions(data.tags.map(({ name }) => ({ value: name, label: name })))
    }
  }, [data])

  function select(values: string[]) {
    handleChange({
      target: {
        id: 'tags',
        value: values!.map((v) => {
          const found = data?.tags.find((tag) => tag.name === v)
          return (
            found || {
              name: v,
              color: 'cyan',
            }
          )
        }),
      },
    })
  }

  return (
    <Form name="form_item_path" layout="vertical" onFinish={onSubmit}>
      <Form.Item label="タイトル">
        <Input id="title" onChange={handleChange} value={formObject.title} />
      </Form.Item>
      <Form.Item label="記事内容">
        <TextArea id="content" rows={24} onChange={handleChange} value={formObject.content} />
      </Form.Item>
      <Form.Item label="タグ">
        <Select
          id="tags"
          mode="tags"
          style={{ width: '100%' }}
          placeholder="タグを追加"
          onChange={select}
          options={options}
          value={formObject.tags.map(({ name }) => name)}
        />
      </Form.Item>
      <Button type="primary" htmlType="submit">
        投稿
      </Button>
    </Form>
  )
}

const NewArticle = () => {
  const { accessToken } = useContext(AuthContext)
  const [formObject, setFormObject] = useState<ArticleFormItem>({ title: '', content: '', tags: [] })
  const [messageApi, contextHolder] = message.useMessage()

  const handleChange = (e: { target: { id: string; value: any } }) => {
    const { id, value } = e.target

    setFormObject({
      ...formObject,
      [id]: value,
    })
  }

  const onSubmit = () => {
    if (Object.values(formObject).some((v) => !v)) {
      console.warn('no value')
      return
    }

    post('/articles', formObject, { Authorization: accessToken })
      .then(() => {
        messageApi.open({
          type: 'success',
          content: '投稿しました',
        })

        setFormObject({ title: '', content: '', tags: [] })
      })
      .catch((e) => {
        messageApi.open({
          type: 'error',
          content: '投稿に失敗しました',
        })
        console.error(e)
      })
  }

  const items: TabsProps['items'] = [
    {
      key: '1',
      label: '入稿',
      children: <New formObject={formObject} onSubmit={onSubmit} handleChange={handleChange} />,
    },
    {
      key: '2',
      label: 'プレビュー',
      children: <Preview formObject={formObject} />,
    },
  ]

  return (
    <>
      <Tabs defaultActiveKey="1" items={items} />
      {contextHolder}
    </>
  )
}

export default NewArticle
