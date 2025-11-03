// function G(a="Prashant") {
    
//     console.log(a)
// }
// G()

// function f(name) {
//     console.log(name) 
// } 
// f("Prashant")


// function num(a,b) {
//     console.log(a+b)
// } 
// num(2,3) 

                                // ------Default Parameter  ---------       

// function f(a="Prashant") {
//     console.log(a)
// }
// f() 

// console.log(f())


// function sum(a,b) {
//     add= a+b ;
//     return add;
// } 
// ans=sum(3,5)
// console.log(ans);

                    // ----------------------Using  template string ----------------

// function f(name) {
//     console.log(`hello ${name}`); 
// }
// f("anshu"); 


// a=10;
// console.log(typeof(undefined))  

                    // ---------------Function Expression--------

                    // let f=function() {
                    //     console.log("Hello world") 
                    // }
                    // f()


                            // ----------------Hoisting---------------- 
                            
//  f("hello world")
// function f(string) {
//     console.log(string)
// }                            

// f1()
// let f1=function() {
//     console.log("hello world")
// }



// const a = 10 ; 
// //  a = 15 
// //  console.log(a) 
// let b =20 
//  b= 30 
//  console.log(b)


                // ----------------------Array-----------------------------

// function f(a) {
        
//         console.log(a);
// }         
// f(a=[1,2,3,4,5]);

// let a=[1,2,3,4,5]
// function f(a) {
//    console.log(a);  
// }        
// f(a);

//      ----------------------------Accessing Elements---------------------------


// let fruits=["apple","banana","mango","Prashant",30.6,100];
// console.log(fruits[0]);
// console.log(fruits[1]);
// console.log(fruits[2]);
// console.log(fruits[3]);
// console.log(fruits[4]);
// console.log(fruits[5]);


//                      ---------------------Adding Elements-----------------

// let num=[1,2,3,4,5] ;
// function f(num) {
//         num.push(6);
//         num.unshift('a');
//         console.log(num);
// }
// f(num);


//             -----------------Callback Function --------------------


// function f1() {
//         console.log("hey buddy")
// } 
// function f2(f1) {
//         console.log("hey buddy i am back")
//         f1()
// }
// f2(f1)  


// function pizzaReady (callback) {
//         console.log("Making Pizza.....");
//         callback(); // calling the callback
// } 
// function notifyMe() {
//         console.log("Pizza is ready...");
// } 
// pizzaReady(notifyMe);


// function coffee (prepare) {
//         console.log(`preparing coffee....`);
//         prepare();
// } 
// function notifyMe () {
//         console.log("coffee is ready...");
// } 
// coffee(notifyMe);
// notifyMe(coffee);

//                     ----------------------ForEach loop--------------------

// let arr=[1,2,3,4,5];
// let a=arr.forEach(function(item,index) {
//        arr[index]=item+2;
// })
// console.log(arr);
// console.log(typeof(a));

//                      --------------------Map function-----------------

// let arr=[1,2,3,4,5];
// let a=arr.map(function(item) {
//        return item+2;
// })
// console.log(a);
// console.log(typeof(a));  


//                      -------------------Question Practice------------------


// let num=[1,2,3,4,5];
// let sum=0;
// num.forEach(function(num){
//         sum=sum+num;
// }) 
// console.log(sum); 


// let num=[1,2,3,4,5];
// let multi=1;
// num.forEach(function(num){
//         multi=multi*num;
// }) 
// console.log(multi); 


// console.log("hey i am prashant");


// -------------------------practice Qns -----------------------------

// let age=23;
// // age+2;
// age=age+2;
// console.log(age);


// let hindi=80;
// let eng=90;
// let math=100;
// let avg=(hindi+eng+math)/3;
// console.log(avg);



// ------------------------ Loops -----------------------------



// for(let i=0;i<=10;i++) {
//         console.log(i);
// }


// for(let i=10;i>=1;i--) {
//         console.log(i);
// }





// ---------------- For loop in JS ------------------------


// for(let i=1;i<=5;i++) {
//         console.log(i);
// }


// for(let i=5;i>=this;i--) {
//         console.log(i)
// }

// ------------------------------------------------------------------------------


// Output: 1 2 3 ... 10
// for (let i = 1; i <= 10; i++) {
//         console.log(i);
//       }
      


// Output: 2 4 6 ... 20
// let i = 2;
// while (i <= 20) {
//   console.log(i);
//   i += 2;
// }




// Output: 5050
// let sum = 0, j = 1;
// do {
//   sum += j;
//   j++;
// } while (j <= 100);
// console.log(sum);





// let str = "JavaScript";
// let reversed = "";
// for (let i = str.length - 1; i >= 0; i--) {
//   reversed += str[i];
// }
// console.log(reversed); // tpircSavaJ





// const student = { name: "Rahul", age: 20, branch: "CSE" };
// for (let key in student) {
//   console.log(`${key}: ${student[key]}`);
// }






// const fruits = ["apple", "banana", "mango"];
// for (let fruit of fruits) {
//   console.log(fruit);
// }



const accountId=144553;
let accountEmail="prash@123gmail.com";
var accountPassword="12345";
accountCity="Jaipur";

accountEmail="pks@gmail.com";
accountPassword="1234234";
accountCity="patna";

console.log(accountEmail);
console.log(accountId);
console.log(accountPassword);
console.log(accountCity);

console.log("------------------------------");

console.table([accountEmail,accountId,accountPassword,accountCity]);


a=10
b=5
console.log(a+b);

console.log(typeof accountEmail);
console.log(typeof accountId);
        
console.log("-----------------------------");

console.log(2>1);
console.log("1"==2);
console.log("1"==1);
console.log("2"==2);
console.log(1>-1);
console.log("2"=="2");
console.log("2"===2);
console.log(2!=2);
console.log(2!=1);













