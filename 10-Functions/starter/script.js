'use strict';

/* default values
const bookings = [];

const createBooking = function (
  flightNum = 'XXX',
  numPessengers = 1,
  price = 100 * numPessengers
) {
  // default value
  // ES5
  //   flightNum = 1;
  //   numPessengers = 1;
  //   price = 100;

  const booking = {
    flightNum,
    numPessengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBooking('L123', 2, 100);
createBooking('L123', 2);
createBooking('L123', undefined, 400); // use undefined to skip parameters

*/

/*
// primitive and reference type
const flight = 'A123';
const joe = {
  name: 'Joe Kuo',
  passport: 123435234,
};

const checkIn = function (flightNum, passenger) {
  flightNum = 'L900';
  passenger.name = 'Mr. ' + passenger.name;
  if (passenger.passport === 123435234) {
    console.log('Check in');
  } else {
    console.log('Wrong passenger');
  }
};

checkIn(flight, joe);
// console.log(flight); // primitive type, so the data is copied to the new variable inside the function
// console.log(joe);

// Is the same as doing this...
// const flightNum = flight;
// const passenger = joe;

const randPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 1000000);
};

// Note: When an object is passed into the function, the modification of the object will reflect to the original object. While the primitive type of variable won't be affected

randPassport(joe); // Now the passport number has been randomly changed
checkIn(flight, joe);

// Note:
// JavaScript do not have pass by reference only pass by value. This example randPassport(joe) is passing the value of the memory address
// Like C++, you can pass by reference with even primitive data type, the any modification will affect outside the function

*/

/*
const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

// console.log(oneWord('Joe Kuo')); // print(joekuo)

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  // return first.toUpperCase() + ' ' + others;
  // console.log(first, others);
  return [first.toUpperCase(), ...others].join(' ');
};

// console.log(upperFirstWord('joe kuo wejkr')); // print JOE kuo

// Higher-order function
const transformer = function (str, fn) {
  console.log(`Origin string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);
  // console.log(typeof fn(str));
  console.log(`Transform function name: ${fn.name}`);
};

transformer('JavaScript is great', upperFirstWord); // upperFirstWord is the callback function and will be called later
transformer('JavaScript is great', oneWord);

const high5 = function () {
  console.log('hi5');
};

// JS uses callbacks all the time
// addEventListener is a higher order function
document.body.addEventListener('click', high5);

// forEach is also another higherorder function
['a', 'b', 'c'].forEach(high5);

*/

/*
// Closure
const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};
// const greet = greeting => {
//   return name => {
//     console.log(`${greeting} ${name}`);
//   };
// };
const greeterHey = greet('Hey');
greeterHey('May');
greeterHey('Alex');
const greetArr = greeting => name => console.log(`${greeting} ${name}`);

greetArr('Hi')('Joe');
*/

/*
// Call & Bind
const chinaAir = {
  airline: 'ChinaAir',
  code: 'CH',
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.code}${flightNum}`
    );
    this.bookings.push({
      flight: `${this.code}${flightNum}`,
      name,
    });
  },
};

chinaAir.book(123, 'Joe Kuo');
chinaAir.book(990, 'Ken Ning');
console.log(chinaAir);

const eurowings = {
  airline: 'Eurowings', // the structure name need to be the same
  code: 'EW',
  bookings: [],
};

const book = chinaAir.book;

// book(123, 'K.Lin'); // this pointed tp undefined, so it raise an error

// To fix this problem
// Call method
// Will actually call the function
book.call(eurowings, 234, 'Sarah');
// The call function explicitly make the first argument to be the this keyword
console.log(eurowings);

// Apply method
// But not used in the modern JS anymore
const data = [123, 'John Conner'];
// book.apply(eurowings, data);
// console.log(eurowings);

// Now in modern JS
book.call(eurowings, ...data);
console.log(eurowings);

// bind menthod
// bind the object to the method
// book.call(eurowings, 234, 'Sarah');
const bookEW = book.bind(eurowings);
bookEW(999, 'Ken');

const bookEW23 = book.bind(eurowings, 23);
bookEW23('Harry');
bookEW23('Lion');

// IMPORTANT EXAMPLE
// With Event Listeners
chinaAir.planes = 100;
chinaAir.buyNewPlane = function () {
  console.log(this); // print the button

  this.planes++;
  console.log(this.planes);
};

document
  .querySelector('.buy')
  .addEventListener('click', chinaAir.buyNewPlane.bind(chinaAir)); // this keyword in chinaAir.buyNewPlane now pointed to the button itself
// We need to use a bind method to explicitly assign this keyword to chinaAir

// Partial application
// To use the partial application the order of the arguments is important
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.2, 100));

// Use BIND is to create a new function
const addTaxWA = addTax.bind(null, 0.1); // We could use null to skip assigning the this keyword
console.log(addTaxWA(200));

// const addTaxWA2 = function (value) {
//   return addTax(0.1, value);
// };
// console.log(addTaxWA2(100));

// This is the same as the bind method
const addTaxRate = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};

const addTaxWA2 = addTaxRate(0.1);
console.log(addTaxWA2(100));
console.log(addTaxWA2(200));

*/

/*
// Coding challenge #1
const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
  // This generates [0, 0, 0, 0]. More in the next section 😃
  answers: new Array(4).fill(0),
  registerNewAnswer() {
    // 1.1
    // 0: JaveScript\n
    // 1: Python\n
    // 2: Rust\n
    // 3: C++\n
    let option = Number(
      prompt(
        `${this.question}\n${this.options.join('\n')}(Write option number)`
      )
    );
    // console.log(typeof option);

    // 1.2
    // while (option < 0 || option > 4) {
    //   option = prompt(`Answer again with a number`);
    // }
    // if (option >= 0 && option < 4) {
    //   this.answers[option]++;
    // }
    // Use short circuiting
    typeof option === 'number' &&
      option >= 0 &&
      option < this.answers.length &&
      this.answers[option]++;
    // console.log(this.answers);
    this.displayResults();

    this.displayResults('string');
  },
  displayResults(type = 'array') {
    if (type === 'array') {
      console.log(this.answers);
    } else if (type === 'string') {
      // console.log(`Poll results are ${this.answers}`);
      console.log(`Poll results are ${this.answers.join(', ')}`);
    }
  },
};
// tests
// poll.registerNewAnswer();

document
  .querySelector('.poll')
  .addEventListener('click', poll.registerNewAnswer.bind(poll));

// this keyword now pointed to the object pass into the call function
poll.displayResults.call({ answers: [1, 2, 3, 8] }, 'string');
*/

// To run the function once and without storing it somewhere
const runOnce = function () {
  console.log('Used once');
  const isPrivate = 20; // this varible cannot be access from the global
};
runOnce();
// console.log(isPrivate); // Error occur
// Immediate invoked function expression (pattern)
(function () {
  console.log('Used once');
})();

(() => console.log('Used once also'))();

{
  const isPrivate = 20;
  var notPrivate = 21;
}
// console.log(isPrivate); // Still cause an error
console.log(notPrivate); // This works fine
