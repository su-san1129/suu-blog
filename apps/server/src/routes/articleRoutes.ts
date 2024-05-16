import { Hono } from 'hono';
import { Article, PrismaClient } from '@prisma/client';
import { PrismaD1 } from '@prisma/adapter-d1';
import { fetch } from '../fetch';
const articleRoutes = new Hono();

articleRoutes.get('/articles', async (c) => {
	const { prisma } = fetch(c);
	return c.json(await prisma.article.findMany());
});

articleRoutes.post('/articles', async (c) => {
	const { prisma } = fetch(c);
	try {
		const { title, content } = await c.req.json<Article>();
		const article = await prisma.article.create({
			data: {
				title,
				content,
			},
		});
		console.log('insert into', article);
		return c.json({ ok: 'OK' });
	} catch {
		return c.json({ error: 'error' });
	}
});

export default articleRoutes;
