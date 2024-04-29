import { createServer } from 'http'
import config from './config.mjs'
const port = 8000
const server = createServer((req, res) => {
  res.end('Hello, World!\n')
})
server.listen(port, () => {
  console.log(`Server running`)
})
