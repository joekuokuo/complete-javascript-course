'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

/*
// Simple array methods
///////////////// slice //////////////////////////////
let arr = ['a', 'b', 'c', 'd', 'e'];
console.log(arr.slice(2));
console.log(arr.slice(2, 4));
console.log(arr.slice(-2));
console.log(arr.slice(-1));
// ====================================================
console.log(arr.slice()); // To create a shalllow copy
console.log([...arr]); // To create a shalllow copy
// ====================================================

///////////////// splice //////////////////////////////
// The original array will be mutated
console.log(arr.splice(3));
// arr.splice(-1); // == arr.pop();
console.log(arr); // a, b, c
arr.splice(1, 2); // b, c are gone
console.log(arr); // a is left

////////////////// Reverse ////////////////////////////
// The original array will be mutated
arr = ['a', 'b', 'c', 'd', 'e'];
const arr2 = ['e', 'd', 'c', 'b', 'a'];
console.log(arr2.reverse());
console.log(arr2); // The original array are mutated

////////////////// Concate ////////////////////////////
const arr3 = arr.concat(arr2);
console.log(arr3);
console.log([...arr, ...arr2]); // This get the same result

////////////////// Join ////////////////////////////
console.log(arr3.join(' '));
*/

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// for (const move of movements) {

for (const [idx, move] of movements.entries()) {
  // To get the index of the array

  if (move > 0) {
    console.log(`Movement ${idx + 1}: Deposite ${move}`);
  } else {
    console.log(`Movement ${idx + 1}: Withdrew ${Math.abs(move)}`);
  }
}

console.log('=======forEach=======');
// movements.forEach(function (move) {
movements.forEach(function (move, idx, arr) {
  // forEach(callbackfn: (value: T, index: number, array: T[])
  // To get the index

  if (move > 0) {
    console.log(`Movement ${idx + 1}: Deposite ${move}`);
  } else {
    console.log(`Movement ${idx + 1}: Withdrew ${Math.abs(move)}`);
  }
});

// 0: function(200)
// 1: function(450)
// 2: function(-400)
// ...

// Note:
// The forEach loop cannot be "break"
// The for of loop can use "break"
