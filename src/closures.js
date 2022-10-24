
console.time('simple');
let n = 1_000_000_000;

while (n > 0) {
    n--;
}
console.timeEnd('simple');



function closure() {
    let n = 1_000_000_000;
    return function () {
        while (n > 0) {
            n--;
        }
    }
}

console.time('closure');
const f = closure();

f();
console.timeEnd('closure');