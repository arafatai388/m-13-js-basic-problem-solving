// Problem 10: Find the Smallest Number in an Array

// Without function
let arr = [30, 50, 80, 789, 905, 8900];

let smallest = arr[0];

for (let i = 1; i < arr.length; i++) {
    if (arr[i] < smallest) {
        smallest = arr[i];
    } else {
        smallest = smallest;
    }
}

console.log("Smallest Number =", smallest);


// Using function

function smallestNumber(array) {

    let smallest = array[0];

    for (let i = 1; i < array.length; i++) {
        if (array[i] < smallest) {
            smallest = array[i];
        } else {
            smallest = smallest;
        }
    }

    return smallest;
}

let result = smallestNumber([5577, 688686, 90, 12, 450]);

console.log(result);