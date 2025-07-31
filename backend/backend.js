const express = require('express');
const redis = require('redis');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const redisHost = process.env.REDIS_HOST || 'redis';
const redisPort = process.env.REDIS_PORT || 6379;

const client = redis.createClient({
    url: `redis://${redisHost}:${redisPort}`
});

client.on('error', (err) => console.error('Redis Hatası:', err));

(async () => {
    await client.connect();

    app.post('/vote', async (req, res) => {
        const vote = req.body.vote;
        if (vote !== 'Kedi' && vote !== 'Köpek') {
            return res.status(400).send('Geçersiz oy');
        }
        try {
            const newCount = await client.incr(vote);
            await client.publish('votes', vote);
            res.send(`Oy alındı: ${vote} (Toplam: ${newCount})`);
        } catch (err) {
            res.status(500).send('Redis hatası');
        }
    });

    const PORT = process.env.PORT || 80;
    app.listen(PORT, '0.0.0.0', () => {
        console.log(`Backend çalışıyor: http://localhost:${PORT}`);
    });
})();