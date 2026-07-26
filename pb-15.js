/*
==========================================================
Problem 15: Return All Even Numbers, Then Their Sum
==========================================================

Problem Statement:
You are given an array of numbers.

Tasks:
1. Find all even numbers from the array.
2. Store the even numbers in a new array.
3. Calculate the sum of all even numbers.
4. Print the even numbers and their total sum.

----------------------------------------------------------
Expected Input
----------------------------------------------------------

let arr = [10, 20, 50, 150, 6, 7, 9, 11, 23];

----------------------------------------------------------
Expected Output
----------------------------------------------------------

Even Numbers:
10
20
50
150
6

Sum = 236

==========================================================
Solution
==========================================================
*/


// Without Function

let arr = [10, 20, 50, 150, 6, 7, 9, 11, 23];

let evenNumbers = [];

for(let i = 0; i < arr.length; i++)
{
    if(arr[i] % 2 === 0)
    {
        evenNumbers.push(arr[i]);
    }
}

console.log("Even Numbers =");

for(let i = 0; i < evenNumbers.length; i++)
{
    console.log(evenNumbers[i]);
}

let sum = 0;

for(let i = 0; i < evenNumbers.length; i++)
{
    sum += evenNumbers[i];
}

console.log("Sum =", sum);



/*
==========================================================
Using Function
==========================================================
*/


function getEvenNumbers(array)
{
    let evenNumbers = [];

    for(let i = 0; i < array.length; i++)
    {
        if(array[i] % 2 === 0)
        {
            evenNumbers.push(array[i]);
        }
    }

    return evenNumbers;
}


function getSum(array)
{
    let sum = 0;

    for(let i = 0; i < array.length; i++)
    {
        sum += array[i];
    }

    return sum;
}


let even = getEvenNumbers([10, 20, 50, 150, 6, 7, 9, 11, 23]);

console.log("Even Numbers =");

for(let i = 0; i < even.length; i++)
{
    console.log(even[i]);
}

let total = getSum(even);

console.log("Sum =", total);