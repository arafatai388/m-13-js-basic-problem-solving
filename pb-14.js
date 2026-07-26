
/*
==========================================================
Problem 14: Object Operations
==========================================================

Problem Statement:
You are given an object containing information about a student.

Tasks:
1. Print all keys.
2. Print all values.
3. Print each key-value pair.
4. Count the total number of properties.
5. Check whether the object contains a property named "email".

----------------------------------------------------------
Expected Input
----------------------------------------------------------

let student = {
    name: "Utsho",
    age: 26,
    university: "DIU",
    department: "CSE"
};

----------------------------------------------------------
Expected Output
----------------------------------------------------------

name
age
university
department

Utsho
26
DIU
CSE

name : Utsho
age : 26
university : DIU
department : CSE

Total Properties = 4
Has Email = false

==========================================================
Solution
==========================================================
*/


// Without Function

let student = {
    name: "Utsho",
    age: 26,
    university: "DIU",
    department: "CSE"
};


// Print All Keys

for(let key in student)
{
    console.log(key);
}


// Print All Values

for(let key in student)
{
    console.log(student[key]);
}


// Print Key-Value Pair

for(let key in student)
{
    console.log(key,":",student[key]);
}


// Count Total Properties

let totalProperty = Object.keys(student).length;
console.log("Total Properties =", totalProperty);


// Check Email Property

let checkEmail = student.hasOwnProperty("email");
console.log("Has Email =", checkEmail);




/*
==========================================================
Using Function
==========================================================
*/

function objectOperation(obj)
{

    // Print All Keys

    for(let key in obj)
    {
        console.log(key);
    }


    // Print All Values

    for(let key in obj)
    {
        console.log(obj[key]);
    }


    // Print Key-Value Pair

    for(let key in obj)
    {
        console.log(key,":",obj[key]);
    }


    // Count Total Properties

    let totalProperty = Object.keys(obj).length;
    console.log("Total Properties =", totalProperty);


    // Check Email Property

    let checkEmail = obj.hasOwnProperty("email");
    console.log("Has Email =", checkEmail);

}


objectOperation({
    name: "Arafat",
    age: 22,
    university: "DIU",
    department: "CSE"
});

