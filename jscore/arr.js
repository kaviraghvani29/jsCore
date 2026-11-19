// let fruits = ["mango", "orange", "banana", "pineapple", "apple"];

// fruits.push();
// fruits.pop();
// fruits.shift();
// fruits.unshift();
// console.log(fruits);

// console.log(fruits[0]);
// console.log(fruits[2]);
// console.log(fruits.length);
// console.log((fruits[1] = "mango"));

// for (let i = 0; i < fruits.length; i++) {
//   console.log(fruits[i]);
// }

// for (let fruit of fruits) {
//   console.log(fruit);
// }

// let numbers = [10, 13, 20, 54, 30, 40, 65, 50];
// console.log(numbers[numbers.length - 1]);
// console.log((numbers[2] = 100));
// numbers[0] += 5;
// numbers.push(60);

// numbers.push(50);
// numbers.pop();
// numbers.unshift(5);
// numbers.shift();
// console.log(numbers);

// for (i = 0; i < numbers.length; i++) {
//   console.log(numbers[i]);
// }

// for (i = 0; i < numbers.length; i++) {
//   console.log(numbers[i]);
// }

// for (let i of numbers) {
//   console.log(i);
// }

// for (let i = 0; i < numbers.length; i++) {
//   if (numbers[i] % 2 === 0) {
//     console.log(numbers[i]);
//   }
// }

// for (let i of numbers) {
//   if (i % 2 === 0) {
//     console.log(i);
//   }
// }

// let sum = 0;
// for (let i = 0; i < numbers.length; i++) {
//   sum += numbers[i];
// }
// console.log("Total:", sum);

// let sum = 0;
// for (let i of numbers) {
//   sum += i;
// }
// console.log(sum);

// MAP
// let num = [10, 13, 20, 56, 30, 79, 40];
// console.log(num);

// let result = num.map((n) => n * 2);
// console.log(result);

// let sq = num.map((n) => n * n);
// console.log(sq);

// let numbers = num.filter((n) => {
//   if (n > 15) {
//     console.log(n);
//   }
// });

// let nums = num.filter((n) => n >= 15);
// console.log(nums);

// let odd = num.filter((n) => n % 2 == 0);
// console.log(odd);

// let numbers = num.filter((n) => n % 5 == 0);
// console.log(numbers);

// REDUCE

// let total = num.reduce((sum, n) => {
//   return sum + n;
// }, 0);
// console.log(total);

// let multiply = num.reduce((mult, n) => {
//   return mult * n;
// }, 1);
// console.log(multiply);

// let evensum = num.reduce((sum, n) => {
//   if (n % 2 === 0) {
//     return sum + n;
//   }
//   return sum;
// }, 0);
// console.log(evensum);

// let evensum = num.reduce((sum, n) => (n % 2 === 0 ? sum + n : sum), 0);
// console.log(evensum);

//FIND

// let number = num.find((n) => n > 30);
// console.log(number);

// let number = num.findIndex((n) => n > 30);
// console.log(number);

// let numbers = [5, 12, 18, 25, 32, 40];

// let num = numbers.find((n) => n > 20);
// console.log(num);

// let number = numbers.findIndex((n) => n > 20);
// console.log(number);

// let divisible  = numbers.find((n) => n % 5 === 0);
// console.log(divisible );

// some() and every()

// let numbers = [10, 15, 20, 25, 30];

// console.log(numbers.some((n) => n > 25));
// console.log(numbers.every((n) => n > 5));
// console.log(numbers.every((n) => n % 2 === 0));

// includes() and indexOf()

// let colors = ["Red", "Blue", "Green", "Yellow"];

// console.log(colors.includes("Blue"));
// console.log(colors.indexOf("Green"));
// console.log(colors.includes("Black"));
// console.log(colors.indexOf("Black"));

// slice() vs splice()

// let numbers = [10, 20, 30, 40, 50];

// let result = numbers.slice(1, 3);
// console.log(numbers);
// console.log(result);

// let results = numbers.splice(1, 3);
// console.log(numbers);
// console.log(results);

// sort() and reverse()

// let numbers = [10, 20, 30, 40];
// numbers.reverse();
// console.log(numbers);

// let fruits = ["Mango", "Apple", "Banana"];
// fruits.sort();
// console.log(fruits);

// numeric sorting needs special handling.
// let numbers = [100, 5, 25, 10];
// numbers.sort((a, b) => b - a);
// console.log(numbers);

// concat() and spread operator (...)

// let a = [10, 20];
// let b = [30, 40];

// let result = a.concat(b);
// console.log(result);

// let result = [...a, ...b];
// console.log(result);

// let a = [1, 2];
// let b = [3, 4];
// let c = [5, 6];

// let result = [...a, ...b, ...c];
// console.log(result);

// Nested Arrays and flat()

// let numbers = [
//   [1, 2],
//   [3, 4],
//   [5, 6],
// ];
// console.log(numbers[0]);
// console.log(numbers[0][1]);

// let numbers = [
//   [1, 2],
//   [3, 4],
//   [5, 6],
// ];

// let result = numbers.flat();
// console.log(result);

// let numbers = [1, [2, [3, 4]]];
// console.log(numbers.flat(2));

// console.log(Array.isArray([1, 2, 3]));
// console.log(Array.isArray("Hello"));

// let name = "KAVI";
// let result = Array.from(name);
// console.log(result);

// console.log(Array.isArray({ name: "Rahul" }));

// Array destructuring

// let fruits = ["Apple", "Mango", "Banana", "Orange"];
// let [a, b, c] = fruits;

// console.log(a);
// console.log(b);
// console.log(c);

// let numbers = [10, 20, 30, 40, 50];
// let [first, , third, ...rest] = numbers;

// console.log(first);
// console.log(third);
// console.log(rest);

// forEach()

// let numbers = [10, 20, 30, 40];
// numbers.forEach((n) => {
//   console.log(n);
// });

// let fruits = ["Apple", "Banana", "Mango", "Orange"];
// fruits.forEach((f) => {
//   console.log(f);
// });

// fruits.forEach((value, index) => {
//   console.log(value, index);
// });

// fruits.forEach((f) => {
//   console.log(f.toUpperCase());
// });

// console.log(fruits.join());
// console.log(fruits.join(" "));
// console.log(fruits.join("-"));

// let skills = ["HTML", "CSS", "JavaScript", "React"];

// console.log(skills.join(" "));
// console.log(skills.join("-"));
// console.log(skills.join("|"));

// let data = "Apple-Banana-Mango";
// console.log(data.split("-"));

// let lang = "JavaScript,Python,Java,C++";
// console.log(lang.split(","));

// let fruits = ["Apple", "Banana", "Mango"];

// let result = fruits.toString();
// console.log(result);
// console.log(typeof result);

// flatMap() combines map() and flat().

// let numbers = [1, 2, 3];

// let result = numbers.flatMap((n) => [n, n * 2]);
// console.log(result);

// numbers.fill(0, 1, 4);
// console.log(numbers);

// let text = "hello";
// let result = Array.from(text);
// console.log(result);

// let result = Array.from("12345", (n) => Number(n) * 2);
// console.log(result);
// console.log(typeof result);

// console.log(Array(3));
// console.log(Array.of(3));

// let colors = ["Red", "Green", "Blue"];

// console.log([...colors.keys()]);
// console.log([...colors.values()]);
// console.log([...colors.entries()]);

// console.log(colors.at(0));

// console.log([...colors.keys()]);
// console.log([...colors.values()]);
// console.log([...colors.entries()]);

let numbers = [10, 20, 30, 40, 50];

console.log(numbers.at(-1));
console.log(numbers.at(-3));
console.log(numbers.at(1));
console.log(numbers.at(-6));
