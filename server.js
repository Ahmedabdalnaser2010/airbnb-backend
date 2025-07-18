// server.js
import { create, router as _router, defaults } from 'json-server';

const server = create();
const router = _router('db.json');
const middlewares = defaults();

// Use port from environment or default to 5005
const port = process.env.PORT || 5005;

server.use(middlewares);
server.use(router);

server.listen(port, () => {
  console.log(`JSON Server is running on port ${port}`);
});