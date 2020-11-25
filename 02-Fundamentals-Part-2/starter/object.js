'use strict';

// Objects
const Joe = {
    firstName: "Joe",
    lastName: "Kuo",
    age: 2020 - 1992,
    job: "student"
};

console.log(Joe);

console.log(Joe.firstName);
console.log(Joe['firstName']);

console.log(Joe.age);

const nameKey = "Name";

console.log(Joe['first' + nameKey]);
console.log(Joe['last' + nameKey]);

// const interestedIn = prompt(`Enter firstName, lastName, age, and job.`);

// if (Joe[interestedIn]) {
//     console.log(Joe[interestedIn]);
// } else {
//     console.log("No such field." + interestedIn);
// }

// add more field in the object
Joe.location = "US";
Joe['Facebook'] = "Joekobekuo";
console.log(Joe);
console.log(Joe.location);
