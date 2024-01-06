const express = require('express');
const { createServer } = require('node:http');

const app = express();
const server = createServer(app);

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  const user = 'dummy'
  res.render('index', {user})
});

server.listen(3000, () => {
  console.log('server is live');
});