// Problem 11: Sum and Average of an Array

let arr=[12,34,56,90,100];
let sum=0;
for(let i=0;i<arr.length;i++)
{
    sum+=arr[i];

}

console.log("Sum =",sum);
let avg=sum/arr.length;
console.log("Avg=",avg);

function sumAverage(array) {

    let total = 0;

    for (let i = 0; i < array.length; i++) {
        total += array[i];
    }

    let average = total / array.length;

    console.log("Sum =", total);
    console.log("Average =", average);
}

sumAverage([10, 20, 30, 40, 50]);