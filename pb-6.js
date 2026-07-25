// Problem 6: Count Vowels in a String

let str="i love bangladesh";
let voewls="aeiou";
let count=0;

for (let i=0;i<str.length;i++)
{
    let word=str[i];
    if(voewls.includes(word))
    {
        count++
    }

}
console.log("vowels count:",count);


//using vowels

function countvowel(string)
{
    let voewls="aeiou";
let count=0;

for (let i=0;i<string.length;i++)
{
    let word=string[i];
    if(voewls.includes(word))
    {
        count++
    }

}
   return count;
}

let ab=countvowel("arafat");
console.log(ab);