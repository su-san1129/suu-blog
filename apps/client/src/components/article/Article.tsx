import { Button, Card, Tag } from 'antd'
import Markdown from '../markdown/Markdown'
import useSWR from 'swr'
import { Link, useParams } from 'react-router-dom'
import { format } from '@formkit/tempo'

const Article = () => {
  const { id } = useParams()
  const { data, isLoading } = useSWR('/articles')

  if (isLoading) {
    return <>is loading...</>
  }

  const article = data.find((_) => _.id == id)

  if (!article) {
    return <>記事が存在しません。</>
  }

  return (
    <>
      <Link to={'/'}>
        <Button type="text">{`< Back`}</Button>
      </Link>
      <Card
        title={
          <div style={{ margin: '4px 0' }}>
            <span style={{ color: 'grey', fontSize: '0.8rem' }}>{format(article.createdAt, 'long')}</span>
            <div>{article.title}</div>
          </div>
        }
      >
        <div style={{ marginTop: '8px' }}>
          {(article.tags || []).map(({ name, color }) => (
            <Tag key={name} color={color}>
              {name}
            </Tag>
          ))}
        </div>
        <Markdown text={article.content} />
      </Card>
      <Link to={'/'}>
        <Button type="text">{`< Back`}</Button>
      </Link>
    </>
  )
}

export default Article
