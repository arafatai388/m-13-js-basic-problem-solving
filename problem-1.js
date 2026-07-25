// Problem 1: Check if a Number is Even or Odd

//without Function
let a=23;

if(a%2===0)
{
    console.log("Even Number");
}

else
{
    console.log("Odd Number");
}


//with Function

function CheckEvenOdd(number)
{
    if(number%2===0)
    {
        return "Even Number";
    }
    else{
        return "Odd Number";
    }
}
console.log(CheckEvenOdd(43));
console.log(CheckEvenOdd(56));
console.log(CheckEvenOdd(145));
console.log(CheckEvenOdd(600));
