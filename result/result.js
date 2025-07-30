const express = require('express');
const redis = require('redis');
const fs = require('fs');
const path = require('path');
const app = express();

app.use(express.static(__dirname)); // <<--- Bunu ekledik! (statik dosya servisi)

const client = redis.createClient({
    url: 'redis://redis:6379'
});

client.on('error', (err) => console.error('Redis Hatası:', err));

(async () => {
    await client.connect();

    app.get('/', async (req, res) => {
        const cats = await client.get('Kedi') || 0;
        const dogs = await client.get('Köpek') || 0;

        // result.html dosyasını oku
        fs.readFile(path.join(__dirname, 'result.html'), 'utf8', (err, data) => {
            if (err) {
                res.status(500).send('Dosya okunamadı!');
                return;
            }
            // {{cats}} ve {{dogs}} yerlerini değiştir
            const html = data.replace('{{cats}}', cats).replace('{{dogs}}', dogs);
            res.send(html);
        });
    });

    app.listen(80, '0.0.0.0', () => {
        console.log('Result servisi çalışıyor: http://localhost:5001');
    });
})();