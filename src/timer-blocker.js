
console.time('timerExecution')

setTimeout(() => {
    console.log('Timer!')
    console.timeEnd('timerExecution')
})

let n = 1_000_000_000_0;

while (n > 0) {
    n--;
}