const express = require('express');
const app = express();
const PORT = 8080;

app.get('/', (req, res) => {
  res.send('Hello world – Nagy Peter (TRVUMF) (v2)!');
});

app.get('/health', (req, res) => {
    res.send('OK');
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});