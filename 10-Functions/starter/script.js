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
