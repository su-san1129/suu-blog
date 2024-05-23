import { Tag } from '@suu-blog/types'

type ArticleFormItem = {
  article: {
    title?: string
    content?: string
    tags: Tag[]
  }
}

export type { ArticleFormItem }
