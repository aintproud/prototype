import { createServer } from 'http'
import db from './modules/db.mjs'
import logger from './modules/logger.mjs'

const port = 8000

const server = createServer((req, res) => {
	res.end('Hello, World!\n')
})

server.listen(port, () => {
	console.log(`Server running`)
})

const res = await db('users').select()

logger.info(res)
