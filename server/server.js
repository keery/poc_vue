const express = require('express');
import bodyParser from 'body-parser';

const app = express();
const port = process.env.PORT || 5000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/get', (req, res) => {
  res.send({ express: 'get works' });
});
app.post('/api/post', (req, res) => {
  res.send(
    `post works : ${req.body.post}`,
  );
});

app.listen(port, () => console.log(`Listening on port ${port}`));