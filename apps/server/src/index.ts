import { Hono } from 'hono'
import { cors } from 'hono/cors'
import articleRoutes from './routes/articleRoutes'

const app = new Hono()
app.use(
	cors({
		origin: ['https://suu-blog.pages.dev', 'http://localhost:5173'],
		allowHeaders: ['X-Custom-Header', 'Upgrade-Insecure-Requests', 'Content-Type'],
		allowMethods: ['POST', 'GET', 'OPTIONS'],
		exposeHeaders: ['Content-Length', 'X-Kuma-Revision'],
		maxAge: 600,
		credentials: true,
	})
)
app.get('/', (c) => c.text('Hello 🔥'))

app.route('/api', articleRoutes)

export default app
