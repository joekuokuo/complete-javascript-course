'use strict';

/*
function calAge(birthYear) {
  const age = 2020 - birthYear;
  console.log(firstName);
  function printAge() {
    let output = `${firstName}, you are ${age}, born in ${birthYear}.`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      var m = 'Hello';
      // Creating new variable with same name as the outer scope
      const firstName = 'Simon';
      // Reassigning outer scope's variable
      output = 'New output';
      const str = `You are a millenial, ${firstName}.`;
      console.log(str);
      function hi() {
        console.log('Hi');
      }
    }
    console.log(output); // the outer scope's variable is reassgined by the inner scope
    // console.log(str); // ReferneceError
    console.log(m); // JS can find this variable, var is function scope not block scope
    // hi(); // Get a ReferenceError in the strict mode
  }
  printAge();
  return age;
}
const firstName = 'Joe';
console.log(calAge(1993));

*/

/*
// Variables
console.log(me); // var is hoisted
// console.log(job); // job is still in the Temperal dead zone
// console.log(year); // year is still in the Temperory dead zone

var me = 'Joe';
let job = 'student';
const year = 2000;

// Functions
console.log(addDec(2, 1));
// console.log(addExp(2, 1));
// console.log(addArr(2, 1));

function addDec(a, b) {
  return a + b;
}
// Not hoisted, because using const to declare
// const addExp = function (a, b) {

// Var: function is hoisted, but it become undefined variable not a function
var addExp = function (a, b) {
  return a + b;
};

// Not hoisted, because using const to declare
const addArr = (a, b) => a + b;

// Example

if (!numProd) delShoppingCart(); // the
var numProd = 10;
function delShoppingCart() {
  console.log('All products deleted.');
}

var x = 10;
let y = 2;
const z = 1;

*/
// console.log(this);

/*
const calAge = function (b) {
  console.log(2020 - b);
  console.log(this); // return undefined
};

calAge(1999);

const calAgeArr = b => {
  console.log(2020 - b);
  console.log(this); // return Window using its parent's this
};

calAgeArr(1999);

const Joe = {
  year: 1993,
  calAge: function () {
    console.log(this);
    console.log(2020 - this.year);
  },
};

Joe.calAge();

const amy = {
  year: 1999,
};

amy.calAge = Joe.calAge;
amy.calAge();

// Proof that the this keyword in the function can be undefined, thus the this.year doesn't exist that raise an error.
const f = Joe.calAge;
f();
*/

var firstName = 'Alice'; // create a global property in the Window.

const Joe = {
  firstName: 'Joe',
  year: 1993,
  calAge: function () {
    console.log(this);
    console.log(2020 - this.year);

    // Solution 1 for pre ES6
    const self = this; // or use that
    const isMillenial = function () {
      console.log(self);
      console.log(self.year >= 1981 && self.year <= 1996); // Now it's working
      // console.log(this.year >= 1981 && this.year <= 1996);
    };

    // Solution 2
    // Using an arrow function the this keyword will inherit from the parent scope
    const notMillenial = () => {
      console.log(this);
      console.log(!(this.year >= 1981 && this.year <= 1996)); // Now it's working
    };

    // this keyword is called from a undefined, so there raise an error
    // this.year == undefined.year which is the error.
    isMillenial();
    notMillenial();
  },

  // This will cause error
  // greet: () => console.log(`Hey ${this.firstName}`),
  // NEVER use this keyword in the arrow function.

  // This is the correct version
  // The methid get its own this keyword
  greet: function () {
    console.log(`Hey ${this.firstName}`);
  },
};

Joe.greet(); // this.firstName is undefined. this keyword is now the global obect which is the Window itself for this case.
// this.firstName now pointed to "Alice" because we can create a global attribute by using var
// To avoid this kind of error
Joe.calAge();

// argument keyword
const addExpr = function (a, b) {
  console.log(arguments);
  return a + b;
};

addExpr(1, 2);
addExpr(1, 2, 3, 4);

const addArr = (a, b) => {
  // the argument keyword is not defined in the arrow function
  // console.log(arguments);
  return a + b;
};

addArr(1, 2);
