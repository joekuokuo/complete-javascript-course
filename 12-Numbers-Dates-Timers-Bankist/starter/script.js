'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

/////////////////////////////////////////////////
// Data

// DIFFERENT DATA! Contains movement dates, currency and locale

const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    '2019-11-18T21:31:17.178Z',
    '2019-12-23T07:42:02.383Z',
    '2020-01-28T09:15:04.904Z',
    '2020-04-01T10:17:24.185Z',
    '2020-05-08T14:11:59.604Z',
    '2021-03-15T17:01:17.194Z',
    '2021-03-19T23:36:17.929Z',
    '2021-03-20T10:51:36.790Z',
  ],
  currency: 'EUR',
  locale: 'pt-PT', // de-DE
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2020-04-10T14:43:26.374Z',
    '2020-06-25T18:49:59.371Z',
    '2020-07-26T12:01:20.894Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

const accounts = [account1, account2];

/////////////////////////////////////////////////
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
// Functions

const formatMovementDate = date => {
  const daysPassed = (d1, d2) =>
    Math.round(Math.abs(d2 - d1) / (1000 * 60 * 60 * 24));
  const days = daysPassed(new Date(), date);
  console.log(days);

  if (days === 0) return 'Today';
  if (days === 1) return 'Yesterday';
  if (days <= 7) return `${days} days ago`;

  const day = `${date.getDate()}`.padStart(2, 0); // add padding for single day with 0
  const month = `${date.getMonth() + 1}`.padStart(2, 0);
  const year = date.getFullYear();

  return `${day}/${month}/${year}`;
};
const displayMovements = function (acc, sort = false) {
  containerMovements.innerHTML = '';
  let movements = acc.movements;
  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';
    const date = new Date(acc.movementsDates[i]);
    let displayDate = formatMovementDate(date);

    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
        <div class="movements__date">${displayDate}</div>
        <div class="movements__value">${mov.toFixed(2)}€</div>
      </div>
    `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${acc.balance.toFixed(2)}€`;
};

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes.toFixed(2)}€`;

  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(out).toFixed(2)}€`;

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      // console.log(arr);
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${interest.toFixed(2)}€`;
};

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

const updateUI = function (acc) {
  // Display movements
  displayMovements(acc);

  // Display balance
  calcDisplayBalance(acc);

  // Display summary
  calcDisplaySummary(acc);
};

///////////////////////////////////////
// Event handlers
let currentAccount;

// FAKE ALWAYS LOGGED IN
currentAccount = account1;
updateUI(currentAccount);
containerApp.style.opacity = 100;

btnLogin.addEventListener('click', function (e) {
  // Prevent form from submitting
  e.preventDefault();

  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  console.log(currentAccount);

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    // Display UI and message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;

    // Create current date
    const now = new Date();
    const day = `${now.getDate()}`.padStart(2, 0); // add padding for single day with 0
    const month = `${now.getMonth() + 1}`.padStart(2, 0);
    const year = now.getFullYear();
    const hour = `${now.getHours()}`.padStart(2, 0);
    const min = `${now.getMinutes()}`.padStart(2, 0);

    // day/month/year
    labelDate.textContent = `${day}/${month}/${year}, ${hour}:${min}`;

    // Clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

    // Update UI
    updateUI(currentAccount);
  }
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  inputTransferAmount.value = inputTransferTo.value = '';

  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    // Doing the transfer
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);

    // Add transfer date
    currentAccount.movementsDates.push(new Date().toISOString());
    receiverAcc.movementsDates.push(new Date().toISOString());

    // Update UI
    updateUI(currentAccount);
  }
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  // get rid of the decimal part
  const amount = Math.floor(inputLoanAmount.value);

  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    // Add movement
    currentAccount.movements.push(amount);
    // Add transfer date
    currentAccount.movementsDates.push(new Date().toISOString());
    // Update UI
    updateUI(currentAccount);
  }
  inputLoanAmount.value = '';
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  if (
    inputCloseUsername.value === currentAccount.username &&
    Number(inputClosePin.value) === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );
    console.log(index);
    // .indexOf(23)

    // Delete account
    accounts.splice(index, 1);

    // Hide UI
    containerApp.style.opacity = 0;
  }

  inputCloseUsername.value = inputClosePin.value = '';
});

let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount, !sorted);
  sorted = !sorted;
});

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES
let numLec = true;
let convertAndCheckNumber = false;
let mathAndRounding = false;
let remainder = false;
let bigInt = false;
let dateTime = false;
let dateOp = true;

if (numLec && convertAndCheckNumber) {
  // Number is float
  // console.log(23 == 23.0); //true
  console.log(0.1 + 0.2); // 0.30000000000000004
  console.log(0.1 + 0.2 === 0.3); // WERID false
  // Note No scientific calculation in JS

  console.log(Number('23')); // Number
  console.log(+'23'); // Number

  // Parsing: Only work if start with number
  console.log(Number.parseInt('30px', 10)); // 30
  console.log(Number.parseInt('px123', 10)); // NaN
  console.log(Number.parseInt('100px', 2)); // 4 (in base 10)

  console.log(Number.parseFloat('2.5px')); // 2.5
  console.log(Number.parseInt('2.5px')); // 2
  // Number provide a namespace

  console.log(Number.isNaN(20)); // false
  console.log('qwe', Number.isNaN('qwe')); // false

  console.log(Number.isNaN('20')); // false
  console.log(Number.isNaN(+'2x')); // true
  console.log(Number.isNaN(2 / 0)); // false
  // Note: Number.isNaN: true if the given value is NaN and its type is Number; otherwise, false.

  // Checking if a value is a Number
  // Number.isFinite is the best way to chech if a value is number
  console.log(Number.isFinite(20)); // true
  console.log(Number.isFinite('20')); // false
  console.log(Number.isFinite(2 / 0)); // false

  console.log(+'2x'); // NaN
}

if (numLec && mathAndRounding) {
  console.log(Math.sqrt(25)); // 5
  console.log(25 ** (1 / 2)); // 5
  console.log(8 ** (1 / 3)); // 2

  console.log(Math.max(2, 3, 1, 23, 10)); // 23
  console.log(Math.max(2, 3, 1, '23', 10)); // 23 type coercion applies
  console.log(Math.max(2, 3, 1, 23, '10px')); // NaN

  console.log(Math.min(2, 3, 1, 23, 10)); // 1

  console.log(Math.PI * Number.parseFloat('10px') ** 2);

  console.log(Math.trunc(Math.random() * 5) + 1);

  const randomInt = (min, max) =>
    Math.floor(Math.random() * (max - min) + 1 + min);

  console.log(randomInt(3, 10));

  console.log(Math.round(23.23)); // 23
  console.log(Math.round(23.8)); // 24

  console.log(Math.ceil(23.23)); // 24
  console.log(Math.ceil(23.9)); // 24

  console.log(Math.floor(23.23)); // 23
  console.log(Math.floor(23.9)); // 23

  console.log(Math.trunc(23.23)); // 23
  console.log(Math.trunc('23.9')); // 23

  console.log(Math.trunc(-23.23)); // -23
  console.log(Math.floor(-23.23)); // -24
  console.log(Math.ceil(-23.23)); // -23

  // Rounding Decimal
  // toFixed returns a string
  // the number indicates the number of decimal to keep
  console.log((2.8).toFixed(0)); // 3
  console.log((2.8).toFixed(3)); // 2.800
  console.log((2.346).toFixed(2)); // 2.35
  console.log(+(2.346).toFixed(2)); // 2.35
}

if (remainder && numLec) {
  console.log(5 % 2);
  console.log(5 / 2);

  console.log(8 % 3);
  console.log(8 / 3);

  console.log(4 % 2);
  console.log(4 / 2);

  console.log(7 % 2);
  console.log(7 / 2);

  const isEven = n => n % 2 == 0;
  console.log(isEven(4)); // true

  labelBalance.addEventListener('click', function () {
    [...document.querySelectorAll('.movements__row')].forEach(function (
      row,
      i
    ) {
      if (i % 2 === 0) {
        row.style.backgroundColor = 'orange';
      }
      if (i % 3 === 0) {
        row.style.backgroundColor = 'blue';
      }
    });
  });
}

if (numLec && bigInt) {
  console.log(2 ** 53 - 1);
  console.log(Number.MAX_SAFE_INTEGER); // The biggest number that javascript can represent
  console.log(2 ** 53 + 1); // Not accurate

  // BigInt
  console.log(1237891729381283081092803123n);
  console.log(BigInt(1237891729381));

  // operations
  console.log(10000n + 10000n);
  let num = 2;
  let huge = 1237891729381283081092803123n;
  // console.log(huge * num); // not working BigInt can't be mixed with other data type
  console.log(huge * BigInt(num));
  // console.log(Math.sqrt(16n)); // Won't work

  // Exceptions
  console.log(20n > 15); // true
  console.log(20n === 20); // false
  console.log(20n == 20); // true
  console.log(typeof 20n);
  console.log(typeof 20);

  console.log(huge + ' BigInt'); // transform into strings

  console.log(10n / 3n); // => 3n
  // console.log(14n / 3); // can't mix BigInt and number
  console.log(10 / 3); // => 3.3333
}

if (numLec && dateTime) {
  // create date
  // 1.
  const now = new Date();
  console.log(now);

  console.log(new Date('Mar 20 2021'));
  console.log(new Date('April 30, 2021'));

  console.log(new Date(account1.movementsDates[0]));
  console.log(new Date(2020, 3, 30, 10, 10, 10)); // month is 0-index
  console.log(new Date(0));
  console.log(new Date(3 * 24 * 60 * 60 * 1000)); // 3 days later
  // 259200000 is the result which is also the time stamp

  // Working with dates
  let future = new Date(2021, 3, 30, 10, 10, 10);
  console.log(future);
  console.log(future.getFullYear()); // 2021 -> year
  console.log(future.getMonth()); // 3 -> month(0 based)
  console.log(future.getDate()); // 30 -> day
  console.log(future.getDay()); // 5 -> Friday -> weekday
  console.log(future.getHours()); // 10 -> Friday -> weekday
  console.log(future.getMinutes()); // 10 -> Friday -> weekday
  console.log(future.getSeconds()); // 10 -> Friday -> weekday

  console.log(future.toISOString()); // 2021-04-30T17:10:10.000Z
  console.log(future.getTime()); // 1619802610000 time stamp
  console.log(new Date(1619802610000));
  console.log(Date.now()); // time now - time stamp

  // setter
  future.setFullYear(2030);
  console.log(future);
}

if (numLec && dateOp) {
  let future = new Date(2021, 3, 30, 10, 10, 10);
  console.log(+future); // time stamp

  const daysPassed = (d1, d2) => Math.abs(d2 - d1) / (1000 * 60 * 60 * 24);

  const days1 = daysPassed(new Date(2030, 3, 10), new Date(2030, 3, 15));
  console.log(days1);
}
