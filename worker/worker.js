const { Pool } = require('pg');
const redis = require('redis');

const redisClient = redis.createClient({
    url: `redis://${process.env.REDIS_HOST}:${process.env.REDIS_PORT}`
});

const pgPool = new Pool({
    host: process.env.POSTGRES_HOST,
    user: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DB
});

redisClient.on('error', (err) => console.error('Redis error', err));

(async () => {
    await redisClient.connect();

    const sub = redisClient.duplicate();
    await sub.connect();
    await sub.subscribe('votes', async (message) => {
        console.log('Oy alındı:', message);
        await pgPool.query('INSERT INTO votes(candidate) VALUES($1)', [message]);
    });

    console.log('Worker dinlemede...');
})();