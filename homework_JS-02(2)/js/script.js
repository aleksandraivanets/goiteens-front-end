"use strict";

console.log("-----------PART1-------------");

const hello1 = function () {
  console.log("Привіт JavaScript");
};

hello1();

console.log("-----------PART2-------------");

function hello2(name = "Василь") {
  console.log(`Привіт, ${name}!`);
}

hello2();

console.log("-----------PART3-------------");

const mul = function (n, m) {
  return `n * m , n + m , n - m `;
};

// return `n * m = ${n * m}, n + m = ${n + m}, n - m = ${n - m}`;

console.log(mul(5, 9));

console.log("-----------PART4-------------");

const myNewArrowFunction = (...rest) => {
  console.log(rest);
};

myNewArrowFunction(1, 2, 3);
myNewArrowFunction(100, 200, 300, 400, 500);
myNewArrowFunction("Js", "Python", "Java", "PHP", "C++");

console.log("-----------PART5-------------");

const mark = [100, 75, 81, 96];

const myAverageScore = function (...mark) {
  let totalMark = 0;
  let lastMark;
  for (const total of arguments) {
    totalMark += total;
  }

  lastMark = totalMark / mark.length;
  if (lastMark <= 100 && lastMark >= 91) {
    console.log("My average score: A");
  } else if (lastMark <= 90 && lastMark >= 81) {
    console.log("My average score: B");
  } else if (lastMark <= 80 && lastMark >= 71) {
    console.log("My average score: C");
  } else if (lastMark <= 70) {
    console.log("My average score: D");
  }
};

myAverageScore(...mark);
