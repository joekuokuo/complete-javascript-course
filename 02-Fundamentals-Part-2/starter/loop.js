'use strict';

for (let i = 1; i <= 10; i += 2) {
    console.log(`Count: ` + i);
}

const friends = ["Joe", "Ken", "Amy", 12, [123, 123]];
const types = []

for (let i = 0; i < friends.length; i++) {
    console.log(friends[i]);

    // Filling the elements to the array
    // types.push(typeof friends[i]);
    types[i] = typeof friends[i];
}

console.log(types);


// continue and break
for (let i = 0; i < friends.length; i++) {
    if (typeof friends[i] !== 'string') continue;
    // else if (typeof friends[i] === 'object') break;
    // types[i] = typeof friends[i];
    console.log(typeof friends[i]);
}


for (let i = 1; i <= 10; i++) {
    console.log(`Count: ` + i);
}
let i = 1;
while (i <= 10) {
    console.log(`Count: ` + i);
    i++;
}
