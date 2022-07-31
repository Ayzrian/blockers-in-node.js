const http = require('node:http');

function getSumAsync(n) {
    let sum = 0;

    const calcSum = (partSize, res) => () => {
        const partEnd = partSize > n ? 1 : n - partSize;

        do {
            sum += n;

            n--;
        } while (partEnd <= n)

        if (n === 0) {
            res(sum);
            return;
        }

        setImmediate(calcSum(partSize, res));
    }

    return new Promise(res => {
        setImmediate(calcSum(1000000, res));
    });
}

const server = http.createServer(async (req, res) => {
    getSumAsync(1000000000)
        .then((number) => {
            res.write(String(number));
            res.end();
        })
});

server.listen(3000);