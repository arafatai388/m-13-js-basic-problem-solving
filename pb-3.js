// Problem 3: Factorial of a Number

let n = 7;
let fact = 1;

for (let i = 1; i <= n; i++) {
    fact *= i;
}

console.log("Factrial =", fact);


// With Function
function FactRange(num) {
    let fact = 1;

    for (let i = 1; i <= num; i++) {
        fact *= i;
    }

    return fact;
}

console.log("Factorial =", FactRange(10));
console.log("Factorial =", FactRange(20));
console.log("Factorial =", FactRange(3));
console.log("Factorial =", FactRange(4));