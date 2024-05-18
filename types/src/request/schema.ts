import { z } from "zod";
import { ArticleSchema, TagScheam } from "../schema";

const CreateArticleRequestSchema = ArticleSchema.extend({
  tags: z.array(TagScheam),
});

export { CreateArticleRequestSchema };
