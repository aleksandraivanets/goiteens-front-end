"use strict";

//----------------part 1

console.log("-------------PART1--------------");

const Arr1 = [1, 5, "4", "hello"];
console.log(Arr1[1]);

const Arr2 = [true, 2, "{}", ["a"], 222];
console.log(Arr2[1]);

console.log(Arr1[1] + Arr2[1]);

console.log("------------PART2---------------");

Arr1[4] = 22;
console.log(Arr1);

//  Arr1.push(22);
//  console.log(Arr1);

console.log("------------PART3---------------");

for (const Arr22 of Arr2) {
  console.log(Arr22);
}

console.log("------------PART4---------------");

let message = "Welcome to Ukraine!";

message = message.split("");
console.log(message);

console.log(message.indexOf("l"));

console.log(message.join(""));

console.log("------------PART5---------------");

const styles = ["Джаз", "Блюз"];

styles.push("Рок-н-ролл");

styles.splice(1, 1, "Класика");

const styles1 = styles.splice(0, 1);

console.log(styles1);

styles.unshift("Реп", "Реггі");

console.log(styles);
