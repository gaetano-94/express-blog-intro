const express = require('express');
const app = express();
const port = 3000;

const { posts } = require('./controllers/posts.js');

// Rotta principale
app.get('/', (req, res) => {
  res.send('<h1>Benvenuto nel mio blog!</h1>');
});
// Rotta posts
app.get('/posts', posts);

app.listen(port, () => {
  console.log(`Server avviato su http://localhost:${port}`);
});
