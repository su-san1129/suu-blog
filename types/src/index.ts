import { z } from "zod";

const ArticleSchema = z.object({
  id: z.string(),
  title: z.string(),
  content: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
  publishedAt: z.date(),
});

type Article = z.infer<typeof ArticleSchema>;

export type { Article };
export { ArticleSchema };
