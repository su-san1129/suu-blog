import { Hono } from 'hono';
import { Article, PrismaClient } from '@prisma/client';
import { getPrisma } from '../context';

const articleRoutes = new Hono();

articleRoutes.get('/articles', async (c) => {
	const prisma = getPrisma(c);
	return c.json(await prisma.article.findMany());
});

articleRoutes.get('/articles/:id', async (c) => {
	const prisma = getPrisma(c);
	const id = c.req.param('id');
	const article = await prisma.article.findFirst({
		where: { id },
	});
	if (!article) {
		return c.json({ error: 'Not Found', ok: false }, 404);
	}
	return c.json({ article: article, ok: true });
});

articleRoutes.post('/articles', async (c) => {
	const prisma = getPrisma(c);
	try {
		const { title, content } = await c.req.json<Article>();
		const article = await prisma.article.create({
			data: {
				title,
				content,
			},
		});
		console.log('insert into', article);
		return c.json({ ok: true });
	} catch {
		return c.json({ error: 'error', ok: false });
	}
});

export default articleRoutes;
