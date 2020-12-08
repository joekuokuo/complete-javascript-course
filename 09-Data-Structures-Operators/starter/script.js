'use strict';

const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
// ES6 enhanced object literals
const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function (starterIdx, mainIdx) {
    return [this.starterMenu[starterIdx], this.mainMenu[mainIdx]];
  },

  // Before ES6
  // openingHours: openingHours,
  openingHours, // new feature in ES6+

  // openingHours: {
  //   thu: {
  //     open: 12,
  //     close: 22,
  //   },
  //   fri: {
  //     open: 11,
  //     close: 23,
  //   },
  //   sat: {
  //     open: 0, // Open 24 hours
  //     close: 24,
  //   },
  // },

  //////////////////////////
  // A
  // order: function (startIdx, mainIdx) {
  //   return [this.starterMenu[startIdx], this.mainMenu[mainIdx]];
  // },

  // ES6+ new functions declaration way
  order(startIdx, mainIdx) {
    return [this.starterMenu[startIdx], this.mainMenu[mainIdx]];
  },

  // B with object with default values to pass in
  orderDelivery({
    time = '00:00',
    address = 'XXXXXXXXX',
    mainIdx = 0,
    startIdx = 0,
  }) {
    // The name of the property in the object need to match while calling the function
    console.log(
      `The order of ${this.starterMenu[startIdx]} and ${this.mainMenu[mainIdx]} will be delievered to ${address} at ${time}`
    );
    // console.log(obj);
  },

  // orderDelivery: function (obj) {
  //   console.log(obj);
  // },

  orderPasta(ing1, ing2, ing3) {
    console.log(`Here is your pasta with ${ing1}, ${ing2}, and ${ing3}`);
  },

  orderPizza(mainIng, ...otherIng) {
    console.log(mainIng);
    console.log(otherIng);
  },
};

/*
// Strings part1 and part2
const airline = 'AIR Taiwan';
const plane = 'A320';
console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);
console.log('B123'[0]);

console.log(airline.indexOf('T')); // print 4
console.log(airline.lastIndexOf('a')); // print 8
console.log(airline.indexOf('taiwan')); // print -1

console.log(airline.slice(4)); // begin with T
console.log(airline.slice(4, 7)); // print Tai
console.log(airline.slice(0, airline.indexOf(' ')));
console.log(airline.slice(airline.indexOf(' ') + 1));

console.log(airline.slice(-2));
console.log(airline.slice(1, -1)); // print IR Taiwa

const checkMiddleSeat = function (seat) {
  // B and E are middle seats
  const s = seat.slice(-1);
  if (s === 'B' || s === 'E') {
    console.log('You in the middle seat.');
  } else {
    console.log('You are lucky.');
  }
};

checkMiddleSeat('11B');
checkMiddleSeat('11C');
checkMiddleSeat('11E');

// JS convert the string into an object when ever a string is passed into a function. After doing the operation on it, it will be converted back to a string type.

console.log(new String('Joe'));
console.log(typeof new String('haha'));
console.log(typeof new String('haha').slice(-1));

console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

// Fix capitalization in name
const passenger = 'JOe'; // Joe
const passengerLower = passenger.toLowerCase();
const passengerCorrect = passenger[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect);

// Comparing email
const email = 'hello@joe.com';
const loginEmail = '   Hello@Joe.Com    \n';
const lowerEmail = loginEmail.toLowerCase();
console.log(lowerEmail);
// trim the space
const trimmedEmail = lowerEmail.trim();
console.log(trimmedEmail); // print hello@joe.com
const normalizedEmail = loginEmail.toLowerCase().trim(); // delete the while spaces.
console.log(normalizedEmail);
console.log(normalizedEmail === email); // true

// replacing
const priceNTD = 'NTD29,99';
const priceUS = priceNTD.replace('NTD', '$').replace(',', '.');
console.log(priceUS);

const announcement =
  'All passengers come to boarding door 22, Boarding door 22!';
console.log(announcement.replace('door', 'gate'));
// to target all the door in the string, we need to use regluar expression
// console.log(announcement.replaceAll('door', 'gate')); // working!!
console.log(announcement.replace(/door/g, 'gate')); // working! g: global

// Booleans
const airplane = 'Apple B234app';
console.log(airplane.includes('B234')); // true
console.log(airplane.includes('app')); // true
console.log(airplane.includes('B235')); // false
console.log(airplane.startsWith('B23')); // true

if (airplane.startsWith('Apple') && airplane.endsWith('app')) {
  console.log('Part of apple family');
}

// Practice exercise
const checkBaggage = function (items) {
  const baggage = items.toLowerCase();
  if (
    baggage.includes('knife') ||
    baggage.includes('gun') ||
    baggage.includes('water')
  ) {
    console.log('You are not allow to be on board.');
  } else {
    console.log('You are welcome to be on board.');
  }
};

checkBaggage('I have a Knife, a gun, some food.');
checkBaggage('I have a banana, some water, some food.');
checkBaggage('I have shoes, a ball, some bread.');
checkBaggage('I have a camera, some snacks.');
*/

/*
// Map .emtries, .keys, .values
const question = new Map([
  ['question', `What's the best programming lanuage?`],
  [1, 'C'],
  [2, 'Jave'],
  [3, 'JS'],
  ['Correct', 3],
  [true, 'Correct!'],
  [false, 'Try again!'],
]);

// console.log(question);

// Convert object to map
const hoursMap = new Map(Object.entries(openingHours));
// console.log(hoursMap);

// Map iteration
// console.log(question.get('question'));
// Different from object, the map itself is iterable, while object is iterable only when calling Object.entries
for (const [key, value] of question) {
  if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
}
// const ans = Number(prompt('Your answer'));
const ans = 3;
// console.log(question.get(ans === question.get('Correct')));

// Convert map to array
console.log([...question]);
console.log(question.entries());
console.log([...question.keys()]);
console.log([...question.values()]);

*/
/*
// Map
// Map can store key value pairs, but different from objects, map can store key value pairs which keys can be any type. Keys in object have to be string.

const rest = new Map();

// Map .set
rest.set('name', 'McDonld');
rest.set(1, 'Taipei');
rest.set(2, 'Keelung');

// console.log(rest.set(3, 'London'));
rest
  .set('categories', ['TW', 'JP', 'EN'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'We are open :)')
  .set(false, 'We are closed :(');

// Map .get
console.log(rest.get('name'));
console.log(rest.get('open'));
console.log(rest.get(true)); // make sure to use the right type

const time = 20;
console.log(rest.get(time > rest.get('open') && time < rest.get('close'))); // the usage of using boolean as map keys

console.log(rest.has('categories')); // print true
// Object also has "hasownproperty" function

console.log(rest);
rest.delete(2);
// There is also a delete operator in the object but it's rather slow. Often not encourage to use
// rest.clear(); // clear everything in the map

//In order to retrieve the item using array as a key:
const arr = [1, 2];
console.log(rest.set(arr, 'test'));
console.log(rest.get([1, 2])); // will return undefined since the 2 arrays are different in the heap memory, though they look the same in value
console.log(rest.get(arr)); // print test! Success!
console.log(rest);
console.log(rest.size);

// DOM manipuation using map
rest.set(document.querySelector('h1'), 'Heading');
*/
/*
// Set
const orderSet = new Set(['Pasta', 'Pizza', 'Pizza', 'Bread', 'Pasta', 'Egg']);
console.log(orderSet); // print {"Pasta", "Pizza", "Egg"}
console.log(new Set('Joe')); // print("J", "o", "e")
console.log(orderSet.size);
console.log(orderSet.has('Pizza'));
console.log(orderSet.has('Bread'));
console.log(orderSet.has('Ham'));
orderSet.add('Ham');
orderSet.add('Cheese');
orderSet.delete('Pasta'); // All the pasta is gone
// orderSet.clear(); // Clean the set
console.log(orderSet);
// There is no way to retrieve items from the set using index
for (const order of orderSet) {
  console.log(order);
}
//Example
const staff = ['Waiter', 'Chef', 'Chef', 'Manager', 'Waiter'];
// const staffUni = new Set(staff);
const staffUni = [...new Set(staff)]; // convert the set into an array
console.log(staffUni);
console.log(new Set(staff).size); // print 3
console.log(new Set('Jessica').size);
*/

/*
// Keys
const properties = Object.keys(openingHours);
console.log(properties);

console.log(`We are opening for ${properties.length} days. `);

console.log();
for (const day of properties) {
  console.log(day);
}

// Values
const values = Object.values(openingHours);
console.log(values);

// entries is used differently on object and array
const entries = Object.entries(openingHours);
console.log(entries);
for (const [day, { open: openHour, close }] of entries) {
  console.log(`We open on ${day} at ${openHour} o'clock and close at ${close}`);
}
*/

/*
//////////////////////////////////////////////////
////////////// optional chaining /////////////////
//////////////////////////////////////////////////

// console.log(restaurant.order(1, 0));
if (restaurant.openingHours && restaurant.openingHours.mon)
  console.log(restaurant.openingHours.mon.open);

// ES2020+ optional chaining & Nullish coalescing introduced
// With optional chaining
console.log(restaurant.openingHours.mon?.open);
console.log(restaurant.openingHours?.mon?.open);

// Example
const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
for (const day of days) {
  // console.log(day);
  // const open = restaurant.openingHours[day]?.open || 'closed'; // Cause an error that the open ar sat is 0 which is a falsy value
  const open = restaurant.openingHours[day]?.open ?? 'closed';
  console.log(`On ${day}, we open at ${open}`);
}

// Method
console.log(restaurant.order?.(0, 1) ?? 'Method not exist!');
console.log(restaurant.orderHam?.(0, 1) ?? 'Method not exist!'); // This print not exist

// Arrays
const users = [{ name: 'Joe', email: 'ioqweiqwoie@gmail.com', age: 29 }];
console.log(users[0]?.name ?? 'User array empty');
console.log(users[1]?.name ?? "User doesn't exist");

*/

/*
////////////////////////////////////////////////
///////////////// For-of loop //////////////////
////////////////////////////////////////////////
// initial array
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

// For of loop
for (const itm of menu) console.log(itm);

// for (const itm of menu.entries()) {
//   console.log(`${itm[0] + 1}: ${itm[1]}`); // old school way
// }

for (const [i, el] of menu.entries()) {
  console.log(`${i + 1}: ${el}`); // old school way
}

*/

const gameEvents = new Map([
  [17, '⚽️ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽️ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽️ GOAL'],
  [80, '⚽️ GOAL'],
  [92, '🔶 Yellow card'],
]);

/*
////////////////////////////////////////////////
///////////// Coding Challenge 3 ///////////////
////////////////////////////////////////////////

// 1)
const events = [...new Set(gameEvents.values())];
console.log(events);

// 2)
gameEvents.delete(64);
console.log(gameEvents);

// 3)
// const time = [...gameEvents.keys()][gameEvents.size - 1]; // 92
const time = [...gameEvents.keys()].pop(); // 92

console.log(
  `An event happened, on average, every ${time / (gameEvents.size - 1)} minutes`
);
// 4)
for (const [time, ev] of gameEvents) {
  // console.log(time, ev);
  let half = time < 45 ? 'FIRST HALF' : 'SECOND HALF';
  console.log(`[${half}] ${time}: ${ev}`);
}

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

*/
/*
////////////////////////////////////////////////
///////////// Coding Challenge 2 ///////////////
////////////////////////////////////////////////

// 1)
// let i = 1;
// for (const player of game.scored) {
//   console.log(`Goal ${i}: ${player}`);
//   i++;
// }

for (const [i, player] of game.scored.entries()) {
  console.log(`Goal ${i + 1}: ${player}`);
}

// 2)
let sum = 0;
const odds = Object.values(game.odds);
for (const odd of odds) {
  sum += odd;
}
console.log(sum / odds.length);

// 3)
for (const [team, odd] of Object.entries(game.odds)) {
  // console.log(team, odd);
  const teamStr = team == 'x' ? 'draw' : `victory ${game[team]}`;
  console.log(`Odd of ${teamStr}: ${odd}`);
}
*/

/*
////////////////////////////////////////////////
///////////// Coding Challenge 1 ///////////////
////////////////////////////////////////////////



// 1)
// const players1 = game.players[0];
// const players2 = game.players[1];

const [players1, players2] = game.players;
console.log(players1);
console.log(players2);

// 2)
const [gk, ...fieldPlayers] = players1;
console.log(gk);
console.log(fieldPlayers);

// 3)
const allplayers = [...players1, ...players2];
console.log(allplayers);

// 4)
const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
console.log(players1Final);

// 5)
const {
  odds: { team1, x: draw, team2 },
} = game;
// const { team1, x: draw, team2 } = game.odds;
console.log(team1, draw, team2);

// 6)
const printGoals = function (...players) {
  console.log(`${players.length} goals were scored.`);
  console.log(players);
  // let score = 0;
  // for (let i = 0; i < players.length; i++) {
  //   console.log(players[i]);
  //   score++;
  // }
  // console.log(score);
};

printGoals('Davies', 'Muller');
printGoals('Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels');
printGoals(...game.scored);

// 7)
team1 < team2 && console.log(`Team 1 is more likely to win!`);
team1 > team2 && console.log(`Team 2 is more likely to win!`);
*/

/*
/////////////////////////////////////////////////
// Logical operator
// Use any data type, return ANY data type,
// short-circuiting
console.log('-------OR---------');
console.log(3 || 'Joe'); // print 3
console.log('' || 'Joe');
console.log(true || 0);
console.log(undefined || null); // return null, undefined is falsy value, so it's been short-circuited
console.log(0 || undefined || 'Hi' || '' || 20 || null); // Hi is the first trusy value

// tenary method
restaurant.numGuests = 20;
const guest1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guest1); // print 10 since restaurant.numGuests is not defined yet

// Using short-sircuiting
const guest2 = restaurant.numGuests || 10;
console.log(guest2);
// Both method above won't work when restaurant.numGuest = 0

console.log('-------AND---------');
console.log(0 && 'Joe'); // print the first falsy value
console.log(1 && 'Joe'); // print the second value since the first value is trusy
console.log('Hi' && 'Joe' && 0 && '...');

// Practice examples
restaurant.orderPizza && restaurant.orderPizza('Chicken', 'Bacon'); // restaurant.orderPizza exists so the second part of the code will execute

restaurant.orderHam && restaurant.orderHam('a'); // It will not do anything since the first part of the code is not executable

// Nullish operator: ES2020+
// In previous example
restaurant.numGuests = 0;
const guest = restaurant.numGuests || 10;
console.log(guest); // print 10
// Nullish operator: null and undefined (NOT 0 nor "")
const guestCorrect = restaurant.numGuests ?? 10;
console.log(guestCorrect); // print 0 since 0 is not a nullish value
*/
/*
////////////////////////////////////////////////
// Rest and Spread 
// 1) Destructure
// Spread, because ... is on the right
const arr = [1, 2, ...[3, 4]];
console.log(arr);

// Rest, because ... is on the left
const [a, b, ...c] = [1, 2, 3, 4];
console.log(a, b, c);
const [pizza, , risotto, ...others] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, risotto, others); // others is the rest of the items in behind, not including the skip item

// Objects
const { sat, ...weekdays } = restaurant.openingHours;
console.log(sat, weekdays);

// 2) Functions
const add = function (...nums) {
  // Rest argument
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
  }
  console.log(sum);
};

add(2, 3);
add(2, 3, 4, 5);
add(1, 3, 5, 6, 7, 8);

const x = [1, 2, 12];
add(...x);

restaurant.orderPizza('chicken', 'spinach', 'cheese', 'onion');
*/

// mainIng = chicken
// otherIng = ['spinach', 'cheese', 'onion']

// Spread operator: can unpack an array into seperate values
// ======================================================
/*
const arr = [3, 4, 5];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr);

// ES6+ using spread operator
const newArr = [1, 2, ...arr];
console.log(newArr);

// To create a new array
const newMenu = [...restaurant.mainMenu, 'hamburger'];
console.log(newMenu);

// Copy array (shallow)
const mainMenuCopy = [...restaurant.mainMenu];

// Join 2 menu
const fullMenu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(fullMenu);

//Iterables: arrays, strings, maps, sets, but NOT object
const str = 'John';
const letters = [...str, ' ', 'M.'];
console.log(letters);
console.log(...str);
// console.log(`${...str} Kuo`); // ${} is not expecting to receive multiple values
// The spread operator is mostly used in passing values into function and array copy

// Real world examples
const ingredients = [
  // prompt(`Let's make pasta! Ingredient 1?`),
  // prompt(`Ingredient2?`),
  // prompt(`Ingredient3?`),
  // prompt(`Ingredient4?`), // this will not be catched in the function since it only accept 3 items
];
console.log(ingredients);
restaurant.orderPasta(...ingredients);

// Objects
// object is now supported in ES2018
const newRestaurant = { foundIn: 1900, ...restaurant, founder: ' Joe' };
console.log(newRestaurant);
const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'ABC Rest';
console.log(restaurantCopy.name); // changed
console.log(restaurant.name);

// 2 inner array are both been added apple since this copy method is still just a shallow copy
restaurantCopy.mainMenu.push('Apple');
console.log(restaurantCopy.mainMenu);
console.log(restaurant.mainMenu);
*/

/*
// Call the function B
restaurant.orderDelivery({
  time: '12:00',
  address: 'XXXXXXXXX',
  mainIdx: 1,
  startIdx: 2,
});

// Object destructuring
const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

// Rename the properties
const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;

console.log(restaurantName, hours, tags);

const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters); // menu is set to be default value while starters get an assignment

// Mutating variables
let a = 11;
let b = 99;
const obj = { a: 23, b: 7, c: 15 };

// {a, b} = obj; // js expect a code block when encountering {}
({ a, b } = obj); // need to add () instead
console.log(a, b); // success

// Nested object
const {
  fri: { open, close },
} = restaurant.openingHours;
console.log(open, close);
*/

/*
===================================================
// Array destructure
const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

const [x, y, z] = arr;
console.log(x, y, z);

const [firstR1, secondR1] = restaurant.categories;
console.log(firstR1, secondR1); //'Italian', 'Pizzeria'

const [firstR2, , thirdR2] = restaurant.categories;
console.log(firstR2, thirdR2); // Italian Vegetarian

// Switch variables
let [main, secondary] = restaurant.categories;

// traditional way
// const tmp = main;
// main = secondary;
// secondary = tmp;
// console.log(main, secondary);

// New way using destructuring
[main, secondary] = [secondary, main];
console.log(main, secondary); // The result if the same

// recieving two outputs from the function 
// A
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

// Nested destructuring
const nested = [1, 2, [3, 4]];
// const [i, , j] = nested;
// console.log(i, j);

// using destructuring
const [i, , [j, k]] = nested;
console.log(i, j, k);

// Default values
const [p = 0, q = 0, r = 0] = [8, 9];
console.log(p, q, r);
// we can simply set a default value to the variable in case there is an undefined value

*/
