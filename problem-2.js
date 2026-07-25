// Problem 2: Sum of a Range of Numbers (1 to N)
// Example: n = 7
// 1 + 2 + 3 + 4 + 5 + 6 + 7 = 28

// Without Function
let n = 7;
let sum = 0;

for (let i = 1; i <= n; i++) {
    sum += i;
}

console.log("Sum =", sum);


// With Function
function sumRange(num) {
    let total = 0;

    for (let i = 1; i <= num; i++) {
        total += i;
    }

    return total;
}

console.log("Sum =", sumRange(10));
console.log("Sum =", sumRange(200));
console.log("Sum =", sumRange(30));
console.log("Sum =", sumRange(40));