const express = require('express');
const redis = require('redis');

const app = express();

// we use the redis container name as its connection url
const client = redis.createClient({
    host: 'redis-server',
    port: 6379
});

client.set('visits', 0);

app.get('/', (_, res) => {
    client.get('visits', (_, visits) => {
        res.send('Number of visits is ' + visits);
        client.set('visits', parseInt(visits) + 1);
    });
});

app.listen(8081, () => console.log('Listening on port 8081'));