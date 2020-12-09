'use strict';
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
