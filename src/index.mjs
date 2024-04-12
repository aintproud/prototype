<<<<<<< HEAD
/**@param {string} a @returns {string} */
function some(a) {
	return a
}
some(0)
	
let a
=======
import { createServer } from 'http';

const port = 8000;

const server = createServer((req, res) => {
  res.end('Hello, World!\n');
});

server.listen(port, () => {
  console.log(`Server running`);
});
>>>>>>> 9c69666 (docker implement)
