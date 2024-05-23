import { Hono } from 'hono'
import { cors } from 'hono/cors'
import articleRoutes from './routes/articleRoutes'
import tagRoutes from './routes/tagRoutes'

type Bindings = {
	DB: D1Database
	API_KEY: string
}

const app = new Hono<{ Bindings: Bindings }>()
app.use(
	cors({
		origin: ['https://suu-blog.pages.dev', 'http://localhost:5173'],
		allowHeaders: ['X-Custom-Header', 'Upgrade-Insecure-Requests', 'Content-Type', 'Authorization'],
		allowMethods: ['POST', 'GET', 'OPTIONS'],
		exposeHeaders: ['Content-Length', 'X-Kuma-Revision'],
		maxAge: 600,
		credentials: true,
	})
)
app.get('/', (c) => c.text('Hello 🔥'))

app.post('/api/login', async (c) => {
	const { password } = await c.req.json<{ password: string }>()
	return password === c.env.API_KEY ? c.json({ ok: true }) : c.json({ ok: false }, 400)
})

app.route('/api').route('/articles', articleRoutes).route('/tags', tagRoutes)

export default app
