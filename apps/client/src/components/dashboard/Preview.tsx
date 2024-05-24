import Markdown from '../markdown/Markdown'
import { ArticleFormItem } from './types'

type Props = {
  formObject: ArticleFormItem
}
const Preview: React.FC<Props> = ({ formObject }) => {
  return (
    <>
      <h1>{formObject.title}</h1>
      <Markdown text={formObject.content!} />
    </>
  )
}

export default Preview
