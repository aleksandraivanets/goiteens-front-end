'use strict';


//---------PART 1

let counter = 0;

while (counter < 11) {
    console.log('counter: ', counter);
    counter += 1;
}

console.log('-------------------------')

//-----------PART 2

for (let i = 1; i <= 10; i++) {
    const y = i % 2;
    if (y != 0) {
        console.log(`Число непарне - ${i}`);
    } else {
        console.log(`Число парне - ${i}`);
    }
}

console.log('------------------------');


//-------------PART 3




