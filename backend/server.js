const express = require('express');
const redis = require('redis');
const cors = require('cors'); // CORS modülünü ekledik

const app = express();

app.use(cors());              // Tüm kaynaklara CORS izni ver
app.use(express.json());

const client = redis.createClient({
    url: 'redis://127.0.0.1:6379'
});

client.on('error', (err) => console.error('Redis Hatası:', err));

// Ana async blok
(async () => {
    await client.connect();

    app.post('/vote', async (req, res) => {
        const vote = req.body.vote;
        if (vote !== 'Cats' && vote !== 'Dogs') {
            return res.status(400).send('Geçersiz oy');
        }

        try {
            const newCount = await client.incr(vote);
            res.send(`Oy alındı: ${vote} (Toplam: ${newCount})`);
        } catch (err) {
            res.status(500).send('Redis hatası');
        }
    });

    app.listen(5000, '0.0.0.0', () => {
        console.log('Backend çalışıyor: http://localhost:5000');
    });
})();