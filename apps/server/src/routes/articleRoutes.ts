import { Hono } from 'hono'
import { getPrisma } from '../context'
import { CreateArticleRequest } from '@suu-blog/types/request'
import { Article } from '@suu-blog/types'

const articleRoutes = new Hono()

articleRoutes.get('/', async (c) => {
	const prisma = getPrisma(c)
	return c.json(
		await prisma.article.findMany({
			include: {
				articleTags: {
					include: {
						tag: true,
					},
				},
			},
		})
	)
})

articleRoutes.get('/:id', async (c) => {
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

articleRoutes.post('/', async (c) => {
	const header = c.req.header()
	if (header['authorization'] !== c.env?.API_KEY) {
		return c.json({ ok: false, error: 'No authrization header' }, 401)
	}

	const prisma = getPrisma(c)
	const { title, content, tags } = await c.req.json<CreateArticleRequest>()
	if (!(title || content || tags)) {
		return c.json({ ok: false }, 400)
	}

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
})

articleRoutes.put('/:id', async (c) => {
	const header = c.req.header()
	if (header['authorization'] !== c.env?.API_KEY) {
		return c.json({ ok: false, error: 'No authrization header' }, 401)
	}
	const prisma = getPrisma(c)
	const { title, content, tags, isPublish } = await c.req.json<CreateArticleRequest>()
	prisma.article.update({
		where: {
			id: c.req.param('id'),
		},
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
	return c.json({ ok: true }, 204)
})

articleRoutes.delete('/:id', async (c) => {
	const header = c.req.header()
	if (header['authorization'] !== c.env?.API_KEY) {
		return c.json({ ok: false, error: 'No authrization header' }, 401)
	}
	const prisma = getPrisma(c)
	const articleId = c.req.param('id')

	try {
		await prisma.$transaction([
			prisma.articleCategory.deleteMany({
				where: { articleId: articleId },
			}),
			prisma.comment.deleteMany({
				where: { articleId: articleId },
			}),
			prisma.articleTag.deleteMany({
				where: { articleId: articleId },
			}),
			prisma.article.delete({
				where: { id: articleId },
			}),
		])

		console.log('Article and related records deleted successfully.')
	} catch (error) {
		console.error('Error deleting article and related records:', error)
	} finally {
		await prisma.$disconnect()
	}
	return c.json({ ok: true }, 202)
})

export default articleRoutes
