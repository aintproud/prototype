import { createServer } from 'http';

const port = 8000;

const server = createServer((req, res) => {
  res.end('Hello, World!\n');
});

server.listen(port, () => {
  console.log(`Server running`);
});