import { Hono } from 'hono'
import { getPrisma } from '../context'
import { CreateArticleRequest } from '@suu-blog/types/request'

const articleRoutes = new Hono()

articleRoutes.get('/articles', async (c) => {
	const prisma = getPrisma(c)
	return c.json(await prisma.article.findMany({ include: { articleTags: { include: { tag: true } } } }))
})

articleRoutes.get('/articles/:id', async (c) => {
	const prisma = getPrisma(c)
	const id = c.req.param('id')
	const article = await prisma.article.findFirst({
		where: { id },
		include: {
			articleTags: {
				include: {
					tag: true,
				},
			},
		},
	})
	if (!article) {
		return c.json({ error: 'Not Found', ok: false }, 404)
	}
	return c.json({ article, ok: true })
})

articleRoutes.post('/articles', async (c) => {
	const prisma = getPrisma(c)
	try {
		const { title, content, tags } = await c.req.json<CreateArticleRequest>()
		const article = await prisma.article.create({
			data: {
				title,
				content,
				articleTags: {
					create: tags.map(({ id, name, color }) => ({
						tag: id ? { connect: { id } } : { create: { name, color } },
					})),
				},
			},
			include: {
				articleTags: {
					include: {
						tag: true,
					},
				},
			},
		})
		console.log('insert into', article)
		return c.json({ ok: true })
	} catch (e) {
		console.log(e)
		return c.json({ error: 'error', ok: false })
	}
})

export default articleRoutes
