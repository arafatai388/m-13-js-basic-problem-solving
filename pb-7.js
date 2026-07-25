// Problem 7: Check if a String is a Palindrome

//without loop
let str="madam";
let reverseword="";
for(let i=str.length-1;i>=0;i--)
{
    let word=str[i];
    reverseword+=word;
}
console.log("Reverseword:",reverseword);

if(str===reverseword)
{
    console.log("palindrome");
}
else{
    console.log("Not palindrome")
}


//using function

function PalindromeCheck(str)
{
    let reverseword="";
for(let i=str.length-1;i>=0;i--)
{
    let word=str[i];
    reverseword+=word;
}
console.log("Reverseword:",reverseword);

if(str===reverseword)
{
    console.log("palindrome");
}
else{
    console.log("Not palindrome")
}
}
PalindromeCheck("arafat");
