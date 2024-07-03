const express = require('express');
const app = express();

app.use(express.json());
app.post('/webhook', (req, res) => {
    console.log(req.body);
});

app.listen(8000, () => {
  console.log('Server listening on port 8000');
});
