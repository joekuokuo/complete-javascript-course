'use strict';

const friends = ["Joe", "Ken", "Amy"]
console.log(friends[0]);
console.log(friends[friends.length - 1]);


const year = new Array(2000, 2010, 2020);
console.log(year);

// year = [123, 321] // illegal


// Array method

// Add elements
// push
const newLen = friends.push("Jay"); // add an item in the end of the array and return the length of the array
console.log(friends);
console.log(newLen);

//unshift
friends.unshift("Lion"); // add an item in the front of the array and return the length of the array
console.log(friends);


// Remove the elements
// pop
const popped = friends.pop(); // remove an item in the end of the array and return its value
console.log(friends);
console.log(popped);

// shift
const poppedTheFront = friends.shift(); // remove an item in the front of the array and return its value
console.log(friends);
console.log(poppedTheFront);

//indexOf
console.log(friends.indexOf("Joe"));
console.log(friends.indexOf("Jerry"));

// includes
// test with strict equality
console.log(friends.includes("Joe"));
console.log(friends.includes("Jerry"));

// Objects
const Joe = {
    firstName: "Joe",
    lastName: "Kuo",
    age: 2020 - 1992,
    job: "student"
};

console.log(Joe);