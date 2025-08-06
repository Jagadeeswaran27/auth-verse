import express from 'express';
import * as path from 'path';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

console.log(process.env.TEST_VAR);

app.use('/assets', express.static(path.join(__dirname, 'assets')));

app.get('/api', (req, res) => {
  res.send({ message: 'Welcome to backend!' });
});

const port = process.env.PORT || 3000;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);
