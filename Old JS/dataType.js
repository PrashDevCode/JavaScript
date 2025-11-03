console.log("hello javascript");
console.table({City: "Bhopal"});
console.warn({City: "Bhopal"});

// ----------------------Data types-------------

    // Primitive Data Types
let num = 42;              // Number
let name = "JavaScript";   // String
let isCoding = true;       // Boolean
let value;                 // Undefined
let emptyValue = null;     // Null
let bigNum = 12345678901234567890n; // BigInt
let sym = Symbol("unique"); // Symbol
console.log(sym);


    // Non-Primitive Data Types
let person = { name: "Alice", age: 25 }; // Object
let numbers = [1, 2, 3, 4, 5];           // Array
function greet() { console.log("Hello!"); } // Function

console.log(typeof num);   // "number"
console.log(typeof name);  // "string"
console.log(typeof person); // "object"


// -------------------Variables------------------

// Using var (Function-scoped)
var name1 = "Alice";
console.log(name); // Alice

// Using let (Block-scoped)
let age = 25;
console.log(age); // 25

// Using const (Cannot be reassigned)
const pi = 3.1416;
console.log(pi); // 3.1416

// Reassigning variables
age = 30; // ✅ Allowed
// pi = 3.14; ❌ Error: Assignment to constant variable


// -------------------Operations---------------------

/*
Arithmetic Operators → +, -, *, /, %, **
Assignment Operators → =, +=, -=, *=, /=
Comparison Operators → ==, ===, !=, !==, >, <, >=, <=
Logical Operators → &&, ||, !
Bitwise Operators → &, |, ^, ~, <<, >>
Ternary Operator → condition ? true_value : false_value
*/


let a1 = 10, b1 = 3;
console.log(a1 + b1); // 13
console.log(a1 % b1); // 1
console.log(2 ** 3); // 8


let x = 5;
x += 3; // x = x + 3
console.log(x); // 8

console.log(5 == "5"); // true (only checks value)
console.log(5 === "5"); // false (checks type too)


let a = true, b = false;
console.log(a && b); // false
console.log(a || b); // true
console.log(!a); // false


console.log(5 & 1); // 1
console.log(5 | 1); // 5
console.log(5 ^ 1); // 4
console.log(5 << 1); // 10
console.log(5 >> 1); // 2


let age1 = 20;
let status = (age1 >= 18) ? "Adult" : "Minor";
console.log(status); // "Adult"





