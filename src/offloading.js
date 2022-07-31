const http = require('node:http');
const workerpool = require('workerpool');

const pool = workerpool.pool();
pool.maxWorkers = 8;

function getSum(n) {
    let sum = 0;

    while (n > 0) {
        sum += n;
        n--;
    }

    return sum;
}

const server = http.createServer(async (req, res) => {
    pool.exec(getSum, [1000000000])
        .then((number) => {
            res.write(String(number));
            res.end();
        })
});

server.listen(3000);
