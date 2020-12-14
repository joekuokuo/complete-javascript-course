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

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

// BankList Project

const displayMovements = function (movements) {
  // console.log(containerMovements.innerHTML); // receive the whole html content
  // console.log(containerMovements.textContent); // receive only the text content but not the html
  containerMovements.innerHTML = ''; // To clear the original html in the container

  movements.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';
    const html = `
        <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
        <div class="movements__value">${mov}€</div>
      </div>
    `; // This html needs to be attached to the container in the html file
    containerMovements.insertAdjacentHTML('afterbegin', html);
    // const containerMovements = document.querySelector('.movements');
  });
};

displayMovements(account1.movements);

// Compute user name, using map method of array
const user = 'Steven Thomas Williams'; // stw
// const username = user
//   .toLowerCase()
//   .split(' ')
//   .map(name => name[0])
//   .join('');
// console.log(username);
const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};
console.log(createUsernames(accounts));
console.log(accounts);
/*
/////////////////////////////////////////////////
///////////// Coding Challenge 1 ////////////////
/////////////////////////////////////////////////

const checkDogs = function (arr1, arr2) {
  const newArr1 = arr1.slice(1, -2);
  // console.log(newArr1); // shallow copy
  // console.log(arr1); // not affected
  const dogs = newArr1.concat(arr2);
  dogs.forEach(function (val, i) {
    const puppyOrAdult = val >= 3 ? 'adult' : 'puppy';
    console.log(`Dog number ${i + 1} is a ${puppyOrAdult}`);
  });
};
checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);
// TEST DATA 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
// TEST DATA 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]
*/
/////////////////////////////////////////////////
// LECTURES
/////////////////////////////////////////////////

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

/*
//////////////////// forEach - Array /////////////////////

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
    console.log(`Movement ${idx + 1}: Deposit ${move}`);
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
*/

/*
//////////////////// forEach - Map /////////////////////



currencies.forEach(function (value, key) {
  console.log(`${key}: ${value}`);
});

//////////////////// forEach - Set /////////////////////

const currenciesSet = new Set(['USD', 'USD', 'EUR', 'GBP', 'EUR']);
console.log(currenciesSet);

currenciesSet.forEach(function (value, _, map) {
  console.log(`${_}: ${value}`); // USD: USD
});
*/

/*
// Recap of Map
// Map properties from MDN
let wmp = new Map();
wmp[1] = 'Joe';
wmp[2] = 'Jack';
wmp[3] = 'James';

console.log(wmp);
console.log(wmp.has(1)); // false!

// Note:
// Setting Object properties works for Map objects as well, and can cause considerable confusion. But that way of setting a property does not interact with the Map data structure. It uses the feature of the generic object. The value of 'bla' is not stored in the Map for queries. Other operations on the data fail:

wmp.set('Joe', 100);
console.log(wmp);
console.log(wmp.has('Joe')); // true

// Create a map from Array
const arr = [
  ['Alex', 90],
  ['May', 80],
  ['Ken', 100],
];
let newMap = new Map(arr);
console.log(newMap);
console.log(newMap.get('Alex')); // print 90
console.log([...newMap]); // Convert a map back to an array
console.log([...newMap.keys()]); // Convert keys of a map back to an array
console.log([...newMap.values()]); // Convert values of a map back to an array
*/

/*
// Map
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const euro2USD = 1.1;

// functional programming
// const movementsUSD = movements.map(function (mov) {
//   return mov * euro2USD;
// });

// simplfied with arrow function
const movementsUSD = movements.map(mov => mov * euro2USD); // Arrow function is perfect for these small callback functions

console.log(movements); // not mutated
console.log(movementsUSD); // return a new array with the operation

// Do the same thing in "for of loop"
const movementsUSDArr = [];
for (const move of movements) {
  movementsUSDArr.push(move * euro2USD);
}
console.log(movementsUSDArr);

const movementsDes = movements.map(
  (move, i) =>
    `Movement ${i + 1}: ${move > 0 ? 'Deposit' : 'Withdrew'} ${Math.abs(move)}`
  // return move > 0
  //   ? `Movement ${i + 1}: Deposit ${move}`
  //   : `Movement ${i + 1}: Withdrew ${Math.abs(move)}`;
  // if (move > 0) {
  //   console.log(`Movement ${idx + 1}: Deposit ${move}`);
  // } else {
  //   console.log(`Movement ${idx + 1}: Withdrew ${Math.abs(move)}`);
  // }
);

console.log(movementsDes);
// Note:
// the map method will call the callback function for each of the element in the array
*/
