import { z } from "zod";
declare const ArticleSchema: z.ZodObject<{
    id: z.ZodString;
    title: z.ZodString;
    content: z.ZodString;
    createdAt: z.ZodDate;
    updatedAt: z.ZodDate;
    publishedAt: z.ZodDate;
}, "strip", z.ZodTypeAny, {
    id: string;
    title: string;
    content: string;
    createdAt: Date;
    updatedAt: Date;
    publishedAt: Date;
}, {
    id: string;
    title: string;
    content: string;
    createdAt: Date;
    updatedAt: Date;
    publishedAt: Date;
}>;
type Article = z.infer<typeof ArticleSchema>;
export type { Article };
export { ArticleSchema };
