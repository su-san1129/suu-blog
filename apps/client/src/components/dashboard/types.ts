import { Tag } from '@suu-blog/types'

type ArticleFormItem = {
  title?: string
  content?: string
  tags: Tag[]
}

export type { ArticleFormItem }
