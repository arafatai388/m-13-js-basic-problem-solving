// Problem 8: Count Words in a Sentence

// Without func
let str = "Programming Hero code habi jabi";
let strSplitArr = str.split(" ");

console.log(strSplitArr.length);

// With function

function wordCount(str) {
  let strSplitArr = str.split(" ");
  return strSplitArr.length;
}

console.log(wordCount("Hello Bangladesh"));
console.log(wordCount("I love Bangladesh"));