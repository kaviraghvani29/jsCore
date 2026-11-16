// for (let i = 1; i <= 10; i++) {
//   console.log(i);
// }

// let i = 1;
// while (i <= 5) {
//   console.log(i);
//   i++;
// }

// let i = 10;
// do {
//   console.log(i);
//   i++;
// } while (i <= 5);

// for (let i = 2; i <= 20; i += 2) {
//   console.log(i);
// }

// for (let i = 10; i >= 1; i--) {
//   console.log(i);
// }

// for (let i = 1; i <= 10; i++) {
//   if (i === 5) continue;
//   console.log(i);
// }

// for (let i = 10; i >= 1; i--) {
//   if (i === 3) break;
//   console.log(i);
// }

// let sum = 0;
// for (let i = 1; i <= 10; i++) {
//   sum += i;
// }
// console.log(sum);

// let n = 5;
// for (let i = 1; i <= 10; i++) {
//   console.log(`${n} * ${i} = ${n * i}`);
// }

// nested loop

// for (let i = 1; i <= 3; i++) {
//   for (let j = 1; j <= 2; j++) {
//     console.log(i, j);
//   }
// }

// for (let i = 1; i <= 2; i++) {
//   for (let j = 1; j <= 2; j++) {
//     console.log("*");
//   }
// }

// for (let i = 1; i <= 5; i++) {
//   console.log("*");
// }

// for (let i = 1; i <= 4; i++) {
//   let row = "";
//   for (let j = 4; j >= i; j--) {
//     row += "*";
//   }
//   console.log(row);
// }

// for (let i = 4; i >= 1; i--) {
//   console.log("*".repeat(i));
// }

// for (let i = 1; i <= 4; i++) {
//   let row = "";
//   for (let j = 3; j >= i; j--) {
//     row += " ";
//   }
//   for (let j = 1; j <= i; j++) {
//     row += "*";
//   }

//   console.log(row);
// }

// Diamond

// for (let i = 1; i <= 5; i++) {
//   let row = "";
//   for (let j = 4; j >= i; j--) {
//     row += " ";
//   }
//   for (let j = 1; j <= 2 * i - 1; j++) {
//     row += "*";
//   }
//   console.log(row);
// }

// // REVERSE
// for (let i = 2; i <= 5; i++) {
//   let row = "";
//   for (let j = 1; j <= i - 1; j++) {
//     row += " ";
//   }
//   for (let j = 1; j <= 2 * (5 - i) + 1; j++) {
//     row += "*";
//   }
//   console.log(row);
// }

// Hollow diamond

for (let i = 1; i <= 5; i++) {
  let row = "";
  for (let j = 1; j <= 5 - i; j++) {
    row += " ";
  }

  row += "*";

  for (let j = 1; j <= 2 * i - 3; j++) {
    row += " ";
  }
  if (i > 1) {
    row += "*";
  }
  console.log(row);
}

for (let i = 1; i <= 4; i++) {
  let row = "";
  for (let j = 1; j <= i; j++) {
    row += " ";
  }

  row += "*";

  for (let j = 1; j <= 2 * (4 - i) - 1; j++) {
    row += " ";
  }
  if (i < 4) {
    row += "*";
  }
  console.log(row);
}
