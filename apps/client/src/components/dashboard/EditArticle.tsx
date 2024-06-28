import { Button, Table } from 'antd'
import useSWR from 'swr'
import { Article } from '@suu-blog/types'
import { format } from '@formkit/tempo'

const EditArticleList = () => {
  const { data: articles, isLoading } = useSWR<Article[]>('articles')

  if (isLoading) {
    return <>is loading...</>
  }

  const dataSource = articles?.map((article) => ({
    key: article.id,
    title: article.title,
    createdAt: article.createdAt,
  }))

  const columns = [
    {
      title: 'タイトル',
      dataIndex: 'title',
      key: 'title',
    },
    {
      title: '作成日',
      dataIndex: 'createdAt',
      key: 'createdAt',
      render: (createdAt: string) => <>{format(createdAt, { date: 'full', time: 'short' })}</>,
    },
    {
      title: 'アクション',
      dataIndex: 'action',
      key: 'action',
      render: () => (
        <>
          <Button style={{ marginRight: '4px' }}>編集</Button>
          <Button>削除</Button>
        </>
      ),
    },
  ]

  return (
    <>
      <Table dataSource={dataSource} columns={columns} />
    </>
  )
}

export default EditArticleList
