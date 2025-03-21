
const array = [3,9,7,6,19,29,53];
let primeCount = 0;
for (const element of array) {
    if(primeCount(element)){
        primeCount++;
    }
    console.log(primeCount);
}
console.log("given array prime number count is-");

console.log(primeCount);
