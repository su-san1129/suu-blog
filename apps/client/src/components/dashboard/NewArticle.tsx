import React, { useContext, useEffect, useState } from 'react'
import { Button, Form, Input, Select, Tabs } from 'antd'
import type { SelectProps, TabsProps } from 'antd'
import TextArea from 'antd/es/input/TextArea'
import { ArticleFormItem } from './types'
import Preview from './Preview'
import { MyFormItem, MyFormItemGroup } from './Form'
import { post } from '../../api/fetcher'
import useSWR from 'swr'
import { Tag } from '@suu-blog/types'
import AuthContext from '../../context/AuthProvider'

type NewProps = {
  onSubmit: () => void
  handleChange: (e: { target: { id: string; value: any } }) => void
}
const New: React.FC<NewProps> = ({ onSubmit, handleChange }) => {
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
      <MyFormItemGroup prefix={['article']}>
        <MyFormItem name="title" label="タイトル">
          <Input id="title" onChange={handleChange} />
        </MyFormItem>
        <MyFormItem name="content" label="記事内容">
          <TextArea id="content" rows={24} onChange={handleChange} />
        </MyFormItem>
        <MyFormItem name="tags" label="タグ">
          <Select
            id="tags"
            mode="tags"
            style={{ width: '100%' }}
            placeholder="タグを追加"
            onChange={select}
            options={options}
          />
        </MyFormItem>
      </MyFormItemGroup>

      <Button type="primary" htmlType="submit">
        投稿
      </Button>
    </Form>
  )
}

const NewArticle = () => {
  const { accessToken } = useContext(AuthContext)
  const [formObject, setFormObject] = useState<ArticleFormItem>({
    article: { title: undefined, content: undefined, tags: [] },
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
    const { id, value } = e.target

    setFormObject({
      article: {
        ...formObject.article,
        [id]: value,
      },
    })
  }

  const onSubmit = () => {
    if (Object.values(formObject.article).some((v) => !v)) {
      console.warn('no value')
      return
    }
    post('/articles', formObject.article, { Authorization: accessToken })
  }

  const items: TabsProps['items'] = [
    {
      key: '1',
      label: '入稿',
      children: <New onSubmit={onSubmit} handleChange={handleChange} />,
    },
    {
      key: '2',
      label: 'プレビュー',
      children: <Preview formObject={formObject} />,
    },
  ]

  return <Tabs defaultActiveKey="1" items={items} />
}

export default NewArticle
