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

let num = 20;

let maxNum = 30;

while (num < maxNum) {
    console.log(num);
    num += 1;
}

console.log('------------------------');

//----------------PART 4

let name = '';

do {
    name = prompt('Введіть вашого улюбленого персонажа', '');
} while (name.length > 6);

console.log('Ввели персонажа: ', name);