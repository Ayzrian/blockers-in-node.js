const http = require('node:http');
const workerpool = require('workerpool');

const pool = workerpool.pool();
pool.maxWorkers = 8;

const getRandomN = (min, max) => Math.floor(Math.random() * (max - min)) + min;

function getSum(n) {
    let sum = 0;

    while (n > 0) {
        sum += n;
        n--;
    }

    return sum;
}

const cache = new Map();

const server = http.createServer(async (req, res) => {
    const n = getRandomN(1000000000, 1000001000);

    if (cache.has(n)) {
        res.write(cache.get(n));
        res.end();
        return;
    }

    pool.exec(getSum, [n])
        .then((number) => {
            const result = String(number);
            cache.set(n, result);
            res.write(result);
            res.end();
        })
});

server.listen(3000);
