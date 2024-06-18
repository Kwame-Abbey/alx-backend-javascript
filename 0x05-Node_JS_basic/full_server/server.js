import express from 'express';
import router from './routes';

const app = express();
const port = 1245;

app.use('/', router);
app.use('/students', router);
app.use('/students/:major', router);

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});

export default app;
