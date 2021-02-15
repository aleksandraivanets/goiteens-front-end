'use strict';

//--------PART 1













//---------PART 2

const age = 55;

if (age) {
    if ((!Number.isNaN(1 * age)) && (age > 0)) {

        if (age < 0 || age >= 16) {
            console.log('Дитина');
        } else if (age <= 17 || age >= 60) {
            console.log('Дорослі');
        }
        else if (age <= 61 || age >= 100) {
            console.log('Пенсіонери');
        }
    }
}

const age2 = 55 <= 60 ? 'Дорослий' : 'Не дорослий';
console.log(age2);


//----------PART 3

let name = 'Олександра';
let surname = 'Іванець';

console.log(name.length);
console.log(surname.length);

const fullNum = name + surname;

console.log(fullNum.length);

if (name, surname) {
    if ((!Number.isNaN(1 * name.length, surname.length)) && (name.length, surname.length > 0)) {
        if (name.length < 4, surname.length < 5) {
            console.log(fullNum.length);
        } else if (name.length < 4, surname.length < 5) {
            console.log('УПС');
        }
    }
}