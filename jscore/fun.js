// function greet() {
//   console.log("welcome");
// }
// greet();

// function add(a, b) {
//   console.log(a + b);
// }
// add(20, 4);

// function multiply(a, b) {
//   return a * b;
// }
// console.log(multiply(20, 3));

// const sayhii = function () {
//   console.log("HII");
// };
// sayhii();

// const square = (n) => n * n;
// console.log(square(4));

// closure funct

// function outer() {
//   let name = "kavi";

//   function inner() {
//     console.log(name);
//   }
//   return inner;
// }
// let result = outer();
// result();

// promise

// let promise = new Promise((resolve, reject) => {
//   let success = true;

//   if (success) {
//     resolve("Task completed");
//   } else reject("Task failed");
// });

// promise
//   .then((result) => console.log(result))
//   .catch((error) => console.log(error))
//   .finally(() => console.log("Finished"));

// Promise.resolve(5)
//   .then((num) => {
//     return num + 5;
//   })
//   .then((num) => {
//     return num * 2;
//   })
//   .then((result) => {
//     console.log(result);
//   });

// async function greet() {
//   return "hello";
// }
// greet().then((result) => console.log(result));

// function getData() {
//   return Promise.resolve("Data Received");
// }

// async function showData() {
//   let result = await getData();
//   console.log(result);
// }
// showData();

// async function calc() {
//   try {
//     let a = await Promise.resolve(10);
//     let b = await Promise.resolve(20);
//     console.log(a + b);
//   } catch (error) {
//     console.log(error);
//   }
// }
// calc();

// console.log("A");

// setTimeout(() => {
//   console.log("B");
// }, 2000);

// console.log("C");

// let count = 1;

// let timer = setInterval(() => {
//   console.log(count);
//   count++;

//   if (count > 5) {
//     clearInterval(timer);
//   }
// }, 1000);

console.log("A");

setTimeout(() => {
  console.log("B");
}, 0);

Promise.resolve().then(() => {
  console.log("C");
});
console.log("D");
