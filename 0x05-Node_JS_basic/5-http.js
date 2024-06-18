const http = require('http');
const countStudents = require('./3-read_file_async');

const app = http.createServer(async (req, res) => {
  if (req.url === '/') {
    res.write('Hello Holberton School!');
  } else if (req.url === '/students') {
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
  }
  res.end();
});

app.listen(1245);

module.exports = app;
