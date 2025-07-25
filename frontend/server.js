const express = require('express');
const path = require('path');
const app = express();

app.use(express.json());
app.use(express.static(__dirname));

app.post('/vote', (req, res) => {
    console.log('Vote:', req.body.vote);
    res.send(`Oyunuz alındı: ${req.body.vote}`);
});

app.listen(80, () => {
    console.log('Frontend çalışıyor: http://<sunucu-ip>');
});