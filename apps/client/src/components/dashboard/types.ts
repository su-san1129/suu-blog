import { Tag } from '@suu-blog/types'

type ArticleFormItem = {
  title?: string
  content?: string
  tags: Tag[]
  isPublish: boolean
}

export type { ArticleFormItem }
