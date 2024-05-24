const express = require('express');
const app = express();
const port = 3000;

const posts = require('./controllers/posts.js');

app.use(express.static('public'));
app.use(express.json());

// Rotta principale
app.get('/', (req, res) => {
  res.send('<h1>Benvenuto nel mio blog!</h1>');
});
// Rotta posts
app.get('/posts', posts.get);

app.post('/posts', posts.post);

app.listen(port, () => {
  console.log(`Server avviato su http://localhost:${port}`);
});
