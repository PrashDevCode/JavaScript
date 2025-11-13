//----- Q.1) Take user name and print a greeting message. 

// <!-- <!DOCTYPE html>
// <html lang="en">
// <head>
//     <title>Document</title>
// </head>
// <body>
//     <script>
//         let userName = prompt("Enter your name:");
//         console.log(`Hello, ${userName}! Welcome! to JavaScript Practice.`);
//     </script>
// </body>
// </html> -->


//------ Q.2) Check if a number is even or odd.

// function checkEvenOdd(num) {
//     if(num%2==0){
//         console.log("Even number");
//     } else {
//         console.log("Odd number");
//     }
// }
// checkEvenOdd(7);
// checkEvenOdd(10);


//------- Q3. Print multiplication table of a number

// function printMultiplicationTable(num) {
//     for(let i=1;i<=10;i++) {
//         console.log(`${num} * ${i} = ${num*i}`);
//     }
// } 
// printMultiplicationTable(5);
// printMultiplicationTable(12);


// Q4. Find max of 3 numbers using conditions

// function findMaxOfThree(a,b,c) {
//     if(a>b && a>c) {
//         console.log(`${a} is Max.`);
//     } else if(b>a && b>c) {
//         console.log(`${b} is Max.`);
//     } else {
//         console.log(`${c} is Max.`);
//     }
// } 
// findMaxOfThree(10,25,15);
// findMaxOfThree(45,30,60);


//------- Q5. Count from 1 to 100 using loop

// function countOneToHundred() {
//     for(let i=1;i<=100;i++) {
//         console.log(i);
//     }
// }
// countOneToHundred();


//------- Q6. Check if a number is Prime

// function isPrime(num) {
//     if(num<=1) return false;
//     for(let i=2;i<=Math.sqrt(num);i++) {
//         if(num%i===0) return false;
//     } 
//     return true;
// } 
// console.log(isPrime(7));
// console.log(isPrime(21));


//------- Q7. Reverse a string

// function reverseString(str) {
//     let reversed = '';
//     for(let i=str.length-1;i>=0;i--) {
//         reversed += str[i];
//     }
//     return reversed;    
// }
// console.log(reverseString("Hello World"));
// console.log(reverseString("JavaScript"));

// function reverseString(str) {
//     return str.split("").reverse().join("");
// }
// console.log(reverseString("Hello JS"));


//------- Q8. Check if a number is Palindrome

// function isPalindrome(num) {
//     let str=num.toString();
//     let reversed = str.split("").reverse().join("");
//     return str === reversed;
// } 
// console.log(isPalindrome(121));
// console.log(isPalindrome(123));


//------- Q9. Find sum & average of array

// function sumAndAverage(arr) {
//     let sum = 0;
//     for(let num of arr) {
//         sum += num;
//     }
//     let average = sum / arr.length;
//     return { sum, average };     
// } 
// let result = sumAndAverage([10, 20, 30, 40, 50]);
// console.log(`Sum: ${result.sum}, Average: ${result.average}`);

let arr=[10, 20, 30, 40, 50];
let sum=0;
for(let i=0;i<arr.length;i++) {
    sum+=arr[i];
} 
let avg=sum/arr.length;
console.log("Sum "+ sum);
console.log("Average "+ avg);
