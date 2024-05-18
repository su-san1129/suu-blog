import { z } from "zod";
import { ArticleSchema, TagScheam } from "../schema";
import { CreateArticleRequestSchema } from "./schema";

type CreateArticleRequest = z.infer<typeof CreateArticleRequestSchema>;

export type { CreateArticleRequest };
