let str = "JavaScript";

// Basic
console.log(str.length);
console.log(str[0]);
console.log(str[4]);

// Creating strings
let a = "Hello";
let b = "Hello";
let c = `Hello`;

console.log(a);
console.log(b);
console.log(c);

// at() and charAt()
console.log(str.at(-1));
console.log(str.charAt(1));

// Case conversion
console.log(str.toUpperCase());
console.log(str.toLowerCase());

// Trim
console.log(" hello ".trim());
console.log(" hello ".trimStart());
console.log(" hello ".trimEnd());

// slice() and substring()
console.log("javaScript".slice(0, 4));
console.log("javaScript".substring(0, 4));

// replace()
console.log("hello world".replace("world", "js"));

// replaceAll()
console.log("hi hi hi".replaceAll("hi", "hello"));

// includes()
console.log("javascript".includes("Script"));

// startsWith()
console.log("javaScript".startsWith("java"));

// endsWith()
console.log("javaScript".endsWith("java"));

// indexOf()
console.log("hello".indexOf("4"));

// lastIndexOf()
console.log("helo".lastIndexOf("3"));

// split()
console.log("apple,banana".split(","));

// concat()
console.log("hello".concat(" world"));

// repeat()
console.log("hi".repeat(3));

// padStart() and padEnd()
console.log("5".padStart(3, "4"));
console.log("5".padEnd(3, "4"));

// search()
console.log("hello world".search("world"));

// Template literals
let name = "kavi";
console.log(`Hello ${name}`);
