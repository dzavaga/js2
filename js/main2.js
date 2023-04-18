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
let arr = [4, 5, 2, 1, 6, 5, 3, 5, 2, 5];

// Створити об'єкт, щоб порахувати кількість входжень кожного числа
let counts = {};
for (let i = 0; i < arr.length; i++) {
  if (counts[arr[i]] === undefined) {
    counts[arr[i]] = 1;
  } else {
    counts[arr[i]]++;
  }
}

// Знайти число з найбільшою кількістю входжень
let maxCount = 0;
let data;
for (let key in counts) {
  if (counts[key] > maxCount) {
    maxCount = counts[key];
    data = key;
  }
}

// Додати число до нового масиву
let newArr = [data];

// Видалити всі входження числа з поточного масиву
arr = arr.filter(num => num !== Number(data));

console.log(newArr); // [5]
console.log(arr); // [4, 2, 1, 6, 3, 2]



