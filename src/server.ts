import * as http from 'http';

const BASE_URL = 'http://localhost';
const PORT_NO = 8001;

http
  .createServer((req, res) => {
    let body = '';

    req.on('data', (chunk) => {
      body += chunk;
    });

    req.on('end', () => {
      setTimeout(() => {
        console.log(`${JSON.stringify(body)}`);

        const parsed = JSON.parse(body);
        const message = `Success: ${parsed.id}`;

        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ message }));
      }, 3000);
    });
  })
  .listen(PORT_NO);

console.log(`Server running at ${BASE_URL}:${PORT_NO}`);
