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

const John = {
    firstName: "John",
    lastName: "Lin",
    birthday: 1990,
    job: "teacher",
    friends: ["Joe", "Ken", "Mike"],
    hasMoney: true,

    // calAge: function (birthday) {
    //     return 2020 - birthday;
    // },

    // calAge: function () {
    //     console.log(this);
    //     return 2020 - this.birthday;
    // },
    calAge: function () {
        this.age = 2020 - this.birthday
        return this.age;
    },

    getSummary: function () {
        return `${this.firstName} is a ${this.calAge()} years old ${this.job}, and ${this.hasMoney ? "has" : "has no"} money.`
    }
}

console.log(John.calAge());
console.log(John.age);
console.log(John.age);
console.log(John.age);

console.log(John.getSummary())