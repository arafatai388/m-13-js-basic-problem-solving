// Problem 9: Find the Largest Number in an Array

//without function
let arr=[30,50,80,789,905,8900];
let large=arr[0];

for(let i=1;i<arr.length;i++)
{
    if(arr[i]>large)
    {
        large=arr[i];
    }
    else
    {
        large=large;
    }
}

console.log("Large Number=",large);

//using function
function abc(arry)
{
    let large=arry[0];

    for(let i=1;i<arry.length;i++)
    {
        if(arry[i]>large)
        {
            large=arry[i];
        }
    }

    return large;
}

let ab=abc([5577,688686,90]);
console.log(ab);