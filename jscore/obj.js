// let user = {
//   name: "kavi",
//   age: 35,
//   city: "bhuj",
// };

// console.log(user.name);

// user.email = "kavi@gmail.com";
// user.age = 34;
// delete user.city;

// console.log(Object.keys(user));
// console.log(Object.values(user));
// console.log(Object.entries(user));

// let person = {
//   name: "kavi",
//   greet() {
//     console.log("welcome " + this.name);
//   },
// };

// person.greet();

// let student = {
//   name: "dasu",
//   age: 25,
//   course: "mech",
// };

// console.log(student);

// student.email = "dasu@gmail.com";
// student.age = 44;
// delete student.course;
// console.log(student);

// let user = { name: "Kavi", age: 25, city: "Pune" };

// console.log(user.assign({}, user));

// user.freeze(user);
// user.age = 30;

// nested object

// let user = {
//   name: "kavi",
//   address: {
//     city: "bhuj",
//     state: "gujarat",
//   },
//   skills: ["html", "CSS", "js"],
// };
// console.log(user.address.city);
// console.log(user.skills[1]);

// user.address.city = "mumbai";
// console.log(user.address.city);

// user.address.country = "india";
// console.log(user.address);

// let { name, address } = user;
// console.log(name);
// console.log(address.city);

// let emp = {
//   name: "kabi",
//   salary: 20000,
//   address: {
//     city: "bhuj",
//     state: "gujarat",
//   },
//   skills: ["creative", "communication"],
// };

// console.log(emp.address.city);
// console.log(emp.skills[1]);

// let { name, salary, address } = emp;

// console.log(name);
// console.log(salary);
// console.log(address.city);

// let { name: dasu } = emp;
// console.log(dasu);

let user = {
  name: "kavi",
  age: 35,
  city: "rajkot",
};

// let b = {
//   city: "bhuj",
// };

// let copy = { ...user };
// console.log(copy);

// let updated = { ...user, city: "rajkot" };
// console.log(updated);

// let result = { ...user, ...b };
// console.log(result);

// for (let key in user) {
//   console.log(key, user[key]);
// }
