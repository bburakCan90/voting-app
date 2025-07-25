const express = require('express');
const redis = require('redis');
const app = express();

const client = redis.createClient({
    url: 'redis://127.0.0.1:6379'
});

client.on('error', (err) => console.error('Redis Hatası:', err));

(async () => {
    await client.connect();

    app.get('/', async (req, res) => {
        const cats = await client.get('Cats') || 0;
        const dogs = await client.get('Dogs') || 0;

        res.send(`
      <h1>Oy Sonuçları</h1>
      <p>Cats: ${cats}</p>
      <p>Dogs: ${dogs}</p>
    `);
    });

    app.listen(5001, '0.0.0.0', () => {
        console.log('Result servisi çalışıyor: http://localhost:5001');
    });
})();