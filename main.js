const express = require('express');
const app = express();

app.use(express.json());
app.post('/webhook', (req, res) => {
    if(req.body.zen){
        res.status(200).send('ok.');
    } else {
        console.log(req.body);
        res.status(200);
    }
});

app.listen(8000, () => {
  console.log('Server listening on port 8000');
});
