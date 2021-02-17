'use strict';

//--------PART 1

const num = prompt('Введіть число');

if (num) {
    if ((!Number.isNaN(1 * num)) && (num >= 55) && (num <= 99)) {
        console.log('Число попадає в діапазон');
    }

    else {
        console.log('Число не попадає в діапазон');
    }
}

console.log('--------------------');



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

const name = 'Олександра';
const surname = 'Іванець';
const something = 'УПС';
let fullName;

console.log(name.length);
console.log(surname.length);

let name1 = 10;
let name2 = 7;

if (name1 > 4 && name2 > 5) {
    fullName = name1 + name2;
} else {
    fullName = something;
}

console.log(fullName);

//----------PART 4

let num1 = Math.random() * (5 - 1) + 1;

if ((num1 < 5) && (num1 > 1)) {
    console.log(num1);
}


//---------PART 5

let lang = prompt('Оберіть мову => "ua, en, ru, fr"');
lang = lang ? lang.toLowerCase() : false;

switch (lang) {
    case 'ua':
        console.log('Січень');
        break;

    case 'en':
        console.log('January');
        break;

    case 'ru':
        console.log('Январь');
        break;

    case 'fr':
        console.log('Janvier');
        break;

    default:
        console.log('Вашої мови немає в списку');
}

