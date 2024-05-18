import { z } from "zod";
import * as Schema from "./schema";

type Article = z.infer<typeof Schema.ArticleSchema>;
type Category = z.infer<typeof Schema.CategorySchema>;
type ArticleCategory = z.infer<typeof Schema.ArticleCategorySchema>;
type Comment = z.infer<typeof Schema.CommentSchema>;
type Tag = z.infer<typeof Schema.TagScheam>;
type ArticleTag = z.infer<typeof Schema.ArticleTagSchema>;

export type { Article, Category, ArticleCategory, Comment, Tag, ArticleTag };
