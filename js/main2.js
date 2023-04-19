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
let counter = {}; // створюємо порожній об'єкт для підрахунку входжень чисел

// підраховуємо кількість входжень кожного числа в масиві
for (let num of arr) {
  if (num in counter) {
    counter[num]++;
  } else {
    counter[num] = 1;
  }
}

let maxCount = 0;
let mostFrequent;
// знаходимо число, яке найбільш часто зустрічається
for (let num in counter) {
  if (counter[num] > maxCount) {
    maxCount = counter[num];
    mostFrequent = num;
  }
}

// створюємо новий масив зі знайденим числом
let data = parseInt(mostFrequent);
let newArr = [data];

// видаляємо входження числа з поточного масиву
for (let i = 0; i < arr.length; i++) {
  if (arr[i] === data) {
    arr.splice(i, 1);
    i--; // оскільки масив зменшився на один елемент, потрібно зменшити індекс
  }
}

console.log(newArr); // [5]
console.log(arr); // [4, 2, 1, 6, 3, 2]

