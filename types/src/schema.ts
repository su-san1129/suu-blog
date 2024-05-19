import { z } from "zod";

const CategorySchema = z.object({
  id: z.string(),
  name: z.string(),
});

const ArticleCategorySchema = z.object({
  articleId: z.string(),
  categoryId: z.string(),
});

const CommentSchema = z.object({
  id: z.string(),
  articleId: z.string(),
  content: z.string(),
  createdAt: z.date(),
});

const TagScheam = z.object({
  id: z.string(),
  name: z.string(),
  color: z.string(),
});

const ArticleTagSchema = z.object({
  articleId: z.string(),
  tagId: z.string(),
  tag: TagScheam,
});

const ArticleSchema = z.object({
  id: z.string(),
  title: z.string(),
  content: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
  publishedAt: z.date().optional(),
  articleTags: z.array(ArticleTagSchema).optional(),
});

export {
  ArticleSchema,
  CategorySchema,
  ArticleCategorySchema,
  CommentSchema,
  TagScheam,
  ArticleTagSchema,
};
