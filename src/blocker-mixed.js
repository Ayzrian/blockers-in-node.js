const http = require('node:http');

function getSum(n) {
    let sum = 0;

    while (n > 0) {
        sum += n;
        n--;
    }

    return sum;
}

const server = http.createServer((req, res) => {
    if (req.url === '/blocker') {
        res.write(String(getSum(1000000000)));
        res.end();
    } else {
        setTimeout(() => {
            res.write('000001');
            res.end();
        }, 200)
    }
});

server.listen(3000);