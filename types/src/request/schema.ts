import { boolean, z } from "zod";
import { ArticleSchema, TagScheam } from "../schema";

const CreateArticleRequestSchema = ArticleSchema.extend({
  tags: z.array(TagScheam),
  isPublish: z.boolean(),
});

export { CreateArticleRequestSchema };
