// Problem 5: Reverse a String

//without function

let str="Bangladesh";
let word="";
for(let i=str.length-1;i>=0;i--)
{   
    let a=str[i];
    word+=a;
}
console.log(word);


//using function

function reverse(string)
{
    reverseword="";
    for(let i=string.length-1;i>=0;i--)
{   
    let a=string[i];
    reverseword+=a;
}
return reverseword;

}

let ab=reverse("Arafat");
console.log("Reverse word:",ab);