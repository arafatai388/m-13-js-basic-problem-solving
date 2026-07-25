// Problem 12: Filter Numbers Greater Than a Value

// Without Function

let arr = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
let value = 50;

let result = [];

for (let i = 0; i < arr.length; i++) {
    if (arr[i] > value) {
        result.push(arr[i]);
    }
}

console.log("Filtered Array =", result);


// Using Function

function filterNumber(array, value) {

    let result = [];

    for (let i = 0; i < array.length; i++) {

        if (array[i] > value) {
            result.push(array[i]);
        }

    }

    return result;
}

let ans1 = filterNumber([10, 20, 30, 40, 50, 60, 70, 80, 90, 100], 80);
console.log(ans1);

let ans2 = filterNumber([5, 15, 25, 35, 45], 20);
console.log(ans2);