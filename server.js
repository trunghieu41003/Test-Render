const express = require('express');
const app = express();
const port = process.env.PORT || 3000;  // Gán giá trị mặc định là 3000 nếu PORT không được thiết lập trong .env
const hostname = 'localhost';
require('dotenv').config();

// Route mặc định cho URL /
app.get('/', (req, res) => {
  res.send('Hello World');
});

// Các route khác
app.get('/abc', (req, res) => {
  res.send('This is Hieu D');
});

app.get('/123', (req, res) => {
  res.send('<h1>This is Hieu DDDD</h1>');
});

// Lắng nghe server
app.listen(port, () => {
  console.log(`Example app listening at http://${hostname}:${port}`);
});
