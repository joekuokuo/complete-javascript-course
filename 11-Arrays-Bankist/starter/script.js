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

// displayMovements(account1.movements);

// Calculate the current balance
const calDisplayBalance = function (account) {
  account.balance = account.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${account.balance} €`;
};
// calDisplayBalance(account1.movements);

const calDisplaySummary = function (account) {
  const income = account.movements
    .filter(mov => mov > 0)
    .reduce((acc, cur) => acc + cur, 0);
  labelSumIn.textContent = `${income}€`;

  const outcome = account.movements
    .filter(mov => mov < 0)
    .reduce((acc, cur) => acc + cur);
  labelSumOut.textContent = `${Math.abs(outcome)}€`;

  const interest = account.movements
    .filter(mov => mov > 0)
    .reduce((acc, cur) => {
      const int = (cur * account.interestRate) / 100;
      // console.log('Interest', int);
      return int >= 1 ? acc + int : acc;
    }, 0);
  // acc + (cur * 1.2) / 100, 0);
  labelSumInterest.textContent = `${interest}€`;
};

// calDisplaySummary(account1.movements);

// Note (Chaining methods):
// Do not over use the chaining method to avoid low performance.
// Try not to chain a method that can mutate the original array such as "splice"

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
createUsernames(accounts);
// console.log(accounts);

// Define the current user account
let currentAcc;

const updateUI = function (acc) {
  // display movements
  displayMovements(acc.movements);
  // display balance
  calDisplayBalance(acc);
  // display summary
  calDisplaySummary(acc);
};

btnLogin.addEventListener('click', function (e) {
  // To prevent the form from submitting
  e.preventDefault();
  // console.log('LOGIN');
  currentAcc = accounts.find(acc => acc.username === inputLoginUsername.value);
  console.log(currentAcc);

  // if (currentAcc && currentAcc.pin === Number(inputLoginPin.value)) {
  // using technique: optional chaining
  if (currentAcc?.pin === Number(inputLoginPin.value)) {
    // the value need to be convert to a number first
    // display UI and welcome message
    labelWelcome.textContent = `Welcome back, ${
      currentAcc.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;

    // clear the input field
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginUsername.blur();
    inputLoginPin.blur();

    // Update UI
    updateUI(currentAcc);
  }
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault(); // preventing from reloading the page in form
  const amount = Number(inputTransferAmount.value);
  const receiver = accounts.find(acc => acc.username === inputTransferTo.value);
  console.log(amount, receiver);

  // Clear the input
  inputTransferAmount.value = inputTransferTo.value = '';

  if (
    amount > 0 &&
    receiver && // still need this since the receiver needd to be existed
    currentAcc.balance >= amount &&
    receiver?.username !== currentAcc.username // this won't ensure the receiver is existed such as undefined !== "XXXX", and the transfer will still be valid
  ) {
    console.log('Transfer valid');
    currentAcc.movements.push(-amount);
    receiver.movements.push(amount);
    updateUI(currentAcc);
  }
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Number(inputLoanAmount.value);

  if (amount > 0 && currentAcc.movements.some(mov => mov >= amount * 0.1)) {
    // Add the movement
    currentAcc.movements.push(amount);

    // Update UI
    updateUI(currentAcc);
    inputLoanAmount.value = '';
  }
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  if (
    inputCloseUsername?.value === currentAcc?.username &&
    Number(inputClosePin?.value) === currentAcc.pin
  ) {
    // console.log('Close');
    const idx = accounts.findIndex(acc => acc.username === currentAcc.username);
    // return the first index of match item
    // console.log(idx);

    // Delete the account
    accounts.splice(idx, 1);

    // Hide UI
    containerApp.style.opacity = 0;
  }
  inputCloseUsername.value = inputClosePin.value = '';
});
/////////////////////////////////////////////////
///////////// Coding Challenge 2 ////////////////
/////////////////////////////////////////////////

const calAvgHumanAge = function (dogs) {
  const dogAge = dogs
    .map(function (age) {
      return age <= 2 ? age * 2 : 16 + age * 4;
    })
    .filter(function (age) {
      return age > 18;
    })
    .reduce(function (acc, cur, i, arr) {
      return acc + cur / arr.length;
    }, 0);
  console.log(dogAge);
};

// calAvgHumanAge([5, 2, 4, 1, 15, 8, 3]);

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

/*
// Array - Filter
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const deposits = movements.filter(function (mov) {
  return mov > 0;
});
console.log(movements);
console.log(deposits);

const depositsForOf = [];
for (const mov of movements) if (mov > 0) depositsForOf.push(mov);
console.log(depositsForOf); // same results

// Note
// The advantage of using a method instead of a for loop is that the the method can be chained together

const withdrawals = movements.filter(function (mov) {
  return mov < 0;
});
// Arrow function version
// const withdrawals = movements.filter(mov => mov < 0);
console.log(withdrawals);

// Array - reduce
// acc -> accumulator
// const balance = movements.reduce(function (acc, cur, i, arr) {
//   console.log(`Iteration ${i}: ${acc}.`);
//   return acc + cur;
// }, 0); // reduce method can specified an initial value. Without assigning the initial value, the operation will start at 0 automatically but the first index won't be shown

const balance = movements.reduce((acc, mov) => acc + mov, 0);
console.log(balance);

// For loop
let balance2 = 0;
for (const mov of movements) balance2 += mov;
console.log(balance2);

// Maximun value (Array - reduce)
const maxMovements = movements.reduce(function (acc, mov) {
  // console.log(acc);
  return acc > mov ? acc : mov;
}, movements[0]);
console.log(maxMovements);

*/

/*
// Chaining methods
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const euro2USD = 1.1;
console.log(movements);

// Pipeline
const totalDepositUSD = movements
  .filter(mov => mov > 0)
  .map(mov => mov * euro2USD)
  .reduce((acc, cur) => acc + cur, 0);
console.log(totalDepositUSD);
*/
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const firstWithdrawal = movements.find(mov => mov < 0); // only return the first one, and return the item
// console.log(firstWithdrawal);
// console.log(accounts);

// return the object that match the certain property
const account = accounts.find(acc => acc.owner === 'Sarah Smith');
// console.log(account);

// Small challenge using for of to implement some features above
// let account_1 = null;
// for (const acc of accounts) {
//   console.log(acc);
//   if (acc.owner === 'Sarah Smith') {
//     account_1 = acc;
//   }
// }
// console.log(account_1);

console.log(movements);

// equality
console.log(movements.includes(-130));

// condition
// If there is any value that matches the condition, it will return true
console.log(movements.some(mov => mov === -130));
const anyDeposit = movements.some(mov => mov > 0);
console.log(anyDeposit);

// Every
// if all the items in the array match the condition
console.log(account4.movements.every(mov => mov > 0));

// Seperate callback
const deposit = mov => mov > 0;
console.log(movements.some(deposit));
console.log(movements.every(deposit));
console.log(movements.filter(deposit));
