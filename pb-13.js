// Problem 13: Loop Through an Object's Properties

// Without Function

let monitor = {
    color: "Black",
    brand: "LG",
    display: "LED",
    size: "27 Inch",
    price: 25000
};

// Dot Notation
console.log("Brand =", monitor.brand);

// Bracket Notation
console.log("Color =", monitor["color"]);


// Using for...in Loop

for (let key in monitor) {
    console.log(key, ":", monitor[key]);
}


// Using Object.keys()

let keys = Object.keys(monitor);

for (let i = 0; i < keys.length; i++) {
    let key = keys[i];
    console.log(key, ":", monitor[key]);
}



// =============================
// Using Function (for...in)
// =============================

function objectProperty(obj) {

    for (let key in obj) {
        console.log(key, ":", obj[key]);
    }

}

objectProperty({
    color: "White",
    brand: "Samsung",
    display: "OLED",
    size: "32 Inch",
    price: 35000
});



// =============================
// Using Function (Object.keys())
// =============================

function objectKeys(obj) {

    let keys = Object.keys(obj);

    for (let i = 0; i < keys.length; i++) {
        let key = keys[i];
        console.log(key, ":", obj[key]);
    }

}

objectKeys({
    name: "Arafat",
    age: 22,
    country: "Bangladesh",
    profession: "Student"
});