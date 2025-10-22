const express = require('express');

const app = express();
const PORT = process.env.PORT || 8888;

app.get('/', (req, res) => {
  res.send('Hello, Node!');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});