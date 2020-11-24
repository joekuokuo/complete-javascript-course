'use strict'; //activate the strict mode

// let isTrue = false;
// const t = true;
// if (t) istrue = true; // w/o the strict mode the error was handled silently

// if (isTrue) console.log("Is True.");


// reserve words
// const interface = "TV"; // error interface is a reserve word.
// const provate = 12; // error interface is a reserve word.

function logger() {
    console.log("This is a logger.");
}

logger();
logger();
logger();

function juiceMaker(qApple, qOrange) {
    console.log(qApple, qOrange);
    const juice = `Made by ${qApple} apples and ${qOrange} oranges.`;
    return juice;
}

const appleJuice = juiceMaker(2, 0)
console.log(appleJuice);

const appleOrangeJuice = juiceMaker(3, 3);
console.log(appleOrangeJuice);


// function declaration 
// the function which can be called before you actually declare it
function calAge1(birthYear) {
    return 2020 - birthYear;
}

const calAge2 = function (birthYear) {
    return 2020 - birthYear;
}

// function expression
// which cannot be called before the expression
const age1 = calAge1(1992);
console.log(age1);

const age2 = calAge2(1992);
console.log(age2);

// Arrow function: another function expression
// the arrow function cannot call "this" keywoord 
const calAge3 = birthYear => 2020 - birthYear;
const age3 = calAge3(1992);
console.log(age3);

const yearOfRetirement = (name, birthYear) => {
    const age = 2020 - birthYear;
    return `${name} retires in ${65 - age}`;
}

console.log(yearOfRetirement("Joe", 1992));

