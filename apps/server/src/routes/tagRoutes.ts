import { Hono } from 'hono'
import { getPrisma } from '../context'

const tagRoutes = new Hono()

tagRoutes.get('/', async (c) => {
	const prisma = getPrisma(c)
	const tags = await prisma.tag.findMany()

	c.json({ tags })
})

export default tagRoutes
