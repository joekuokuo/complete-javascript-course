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