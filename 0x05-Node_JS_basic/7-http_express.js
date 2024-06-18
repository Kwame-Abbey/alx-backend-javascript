const express = require('express');
const countStudents = require('./3-read_file_async');

const app = express();
const port = 1245;

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', async (req, res) => {
  let text = 'This is the list of our students\n';
  await countStudents(process.argv[2])
    .then((msg) => {
      text += msg;
      res.end(text);
    })
    .catch((err) => {
      text += err.message;
      res.end(text);
    });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

module.exports = app;
