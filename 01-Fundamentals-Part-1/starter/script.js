// let js = 'amazing';

// console.log(1 + 2);

// console.log(12)

// console.log(js);

// // ======================================

// let jsIsFun = true;
// console.log(jsIsFun);
// console.log(typeof jsIsFun);

// console.log(typeof null); // print object which is a legacy bug


// // ======================================

// const now = 2020;
// const ageJoe = now - 1993;
// const ageMay = now - 2000;

// console.log(ageJoe, ageMay);
// console.log(3 ** 2);

// const firstName = "Joe"
// const lastName = "Kuo"
// console.log(firstName + " " + lastName);

// let x = 10 + 5; // 15
// x += 10;
// x++; //26
// x--;
// console.log(x);

// console.log(ageJoe > ageMay);
// console.log(ageMay >= 18);

// const firstName = "Joe"
// const lastName = "Kuo"
// const birth = 1993;
// const year = 2020;
// const job = "student"

// ======================================

// const joe = "I'm " + firstName + ", a " + (year - birth) + " year old " + job + " !";
// console.log(joe);

// const joeNew = `I'm ${firstName}, a ${year - birth} year old${job}`;
// console.log(joeNew);

// console.log(`These are 
// multilines`);

// ======================================

// const age = 14;
// const isValid = age >= 18;

// if (isValid) {
//     console.log("Joe can drive.")
// } else {
//     const yearLeft = 18 - age;
//     console.log(`Joe needs to wait another ${yearLeft} years`);
// }

// ======================================

// type conversion
// const year = "1999";
// console.log(Number(year) + 19);

// // type coercion
// console.log("I'm " + 23 + " years old");
// console.log('12' - '12') // substract triggers coercion
// console.log('24' * '2'); // triggers coercion
// console.log('24' / '2'); // triggers coercion
// console.log('23' > '19'); // triggers coercion


// ======================================
// 5 falsy values: 0, '', undefined, null, NaN

// console.log(Boolean(0)); //F
// console.log(Boolean(undefined)); //F
// console.log(Boolean('Joe')); //T
// console.log(Boolean({})); //T
// console.log(Boolean('')); //F

// const age = 20;

// if (age === 18) {
//     console.log("20");
// } else {
//     console.log("You are not 18");
// }

// if (age == '20') {
//     console.log("20");
// } else {
//     console.log("it's a string");
// }

// const num = prompt("Enter a number: ");
// console.log(typeof num, num);