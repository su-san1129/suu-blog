import { Button, Card, Tag } from 'antd'
import Markdown from '../markdown/Markdown'
import useSWR from 'swr'
import { Link, useParams } from 'react-router-dom'
import { format } from '@formkit/tempo'
import { Article as ArticleType } from '@suu-blog/types'

const Article = () => {
  const { id } = useParams()
  const { data, isLoading } = useSWR<{ article: ArticleType }>(`/articles/${id}`)

  if (isLoading) {
    return <>is loading...</>
  }

  if (!data?.article) {
    return <>記事が存在しません。</>
  }

  const { article } = data

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
          {article.articleTags?.map(({ tag }) => (
            <Tag key={tag.id} color={tag.color}>
              {tag.name}
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
