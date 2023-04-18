/*1 завдання*/
let a = 10;
let b = 20;
let c = 30;

if (a < b && b < c) {
  console.log("a < b < c is true");
} else {
  console.log("a < b < c is false");
}
/* 2 завдання*/
let x = 1;
let y = 2;

let res1 = "" + x + y;
console.log(res1); // ""12""
console.log(typeof res1); // ""string""

let res2 = Boolean(x) + "" + y;
console.log(res2); // ""true2""
console.log(typeof res2); // ""string""

let res3 = x < y;
console.log(res3); // true
console.log(typeof res3); // ""boolean""

let res4 = x / 0;
console.log(res4); // NaN
console.log(typeof res4); // ""number""
/*3 завдання*/
let age = +prompt("Введіть вік:");
let isAdult = age >= 18 ? "Вітаю, ви повнолітній!" : "Ви ще надто молоді";
console.log(isAdult);
/*4 завдання*/



