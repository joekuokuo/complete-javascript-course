'use strict';

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function (starterIdx, mainIdx) {
    return [this.starterMenu[starterIdx], this.mainMenu[mainIdx]];
  },

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  // A
  order: function (startIdx, mainIdx) {
    return [this.starterMenu[startIdx], this.mainMenu[mainIdx]];
  },

  // B with default values
  orderDelivery: function ({
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

  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Here is your pasta with ${ing1}, ${ing2}, and ${ing3}`);
  },
};

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
