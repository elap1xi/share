const express = require('express');
const { exec } = require('child_process');
const app = express();

app.use(express.json());

app.post('/webhook', (req, res) => {
    if(req.body.zen){   // ping
        res.status(200).send('ok.');
    } else {
        let pusher = req.body.pusher.name;
        let commit_msg = req.body.commits[0].message;
        let timestamp = req.body.commits[0].timestamp;
        exec('node index.js');
        res.status(200).send('success');
    }
});

app.listen(8000, () => {
  console.log('Server listening on port 8000');
});
