import useSWR from 'swr'
import { Card, Tag } from 'antd'
import { removeMarkdownSpecialChars, scliceString } from '../../utils/stringUtil'
import { Link } from 'react-router-dom'
import { format } from '@formkit/tempo'
import { Article } from '@suu-blog/types'

const ArticleList = () => {
  const { data: articles, isLoading } = useSWR<Article[]>('articles')
  if (isLoading) return <>is loading...</>
  console.log(articles)

  return articles?.map(({ id, title, content, articleTags, createdAt }) => (
    <Link key={id} to={`articles/${id}`}>
      <Card
        title={
          <div style={{ margin: '4px 0' }}>
            <span style={{ color: 'grey', fontSize: '0.8rem' }}>{format(createdAt, 'long', 'ja-JP')}</span>
            <div>{title}</div>
          </div>
        }
        style={{ marginBottom: '8px' }}
        hoverable
      >
        <div
          style={{
            overflow: 'hidden',
            display: '-webkit-box',
            textOverflow: 'ellipsis',
            WebkitBoxOrient: 'vertical',
            WebkitLineClamp: 3,
          }}
        >
          {scliceString(removeMarkdownSpecialChars(content))}
        </div>
        <div style={{ marginTop: '8px' }}>
          {articleTags?.map(({ tag }) => (
            <Tag key={tag.id} color={tag.color}>
              {tag.name}
            </Tag>
          ))}
        </div>
      </Card>
    </Link>
  ))
}

export default ArticleList
