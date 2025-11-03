
// ------------------Create a Traffic light system that shows what to do based on colour. ------------------

//  -------------------------------------  Traffic Light System ---------------------



/*
let colour="Red";
let colour="Yellow";
let colour="Green";

if(colour==="Red") {
    console.log("Signal is Red:  STOP");
}
if(colour==="Yellow") {
    console.log("Signal is Yellow:  Slow Down");
}
if(colour==="Green") {
    console.log("Signal is Green:  Go");
} 
*/ 



// ----------------- Create a system to calculate popcorn prices based on the size customer asked for: ----------


/*
let size= "XL";
let size= "L";
let size= "M";
let size= "S";

let size= "VS";

if(size==="XL") {
    console.log("Price is:  ₹250");
} else if(size==="L") {
    console.log("Price is:  ₹200");
} else if(size==="M") {
    console.log("Price is:  ₹100");
} else if(size==="S") {
    console.log("Price is:  ₹50");
} else {
    console.log("Sorry! Not Available");
} 
*/ 



//  ------------------------A "good string" is a string that starts with the letter 'a' & has a length > 3.WAP to find if a string is good or not.



/*
let str="Prashant";

if((str[0]==='a') && (str.length>3)) {
    console.log(`${str} is good string`);
} else {
    console.log(`${str} is not good string`);
}
*/   



// ------------------ Use switch statement to print the day of the week using a number variable 'day' with values 1 to 7.



/*
let day=5;

switch(day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");    
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("wrong day!");  
}
*/ 



// ------------ create a number variable num with some value. Now, print "good" if the number is divisible by 10 and print "bad" if it is not.



/*
let num=20;

if(num%10==0) {
    console.log("Good");
} else {
    console.log("Bad");
}
*/


//  -------------------Prompt alert --------------------


/*
let name= prompt("please enter your name");
let age= prompt("please enter your age");

alert(`${name} is ${age} years old`);
*/



//  ---------------- Write a switch statement to print the monthsin a quarter -------------------


/*
let quarter=3;

switch(quarter) {
    case 1:
        console.log("January, Fabruary, March");
        break;
    case 2:
        console.log("April, May, June");
        break;
    case 3:
        console.log("July, August, Septemper");
        break;
    case 4:
        console.log("Octuber, November, December");
        break;
    default:
        console.log("INVALID QUARTER");
}
*/ 



// ---------------- A string  is a golden string if it starts with the char. 'A' or 'a'  and has a total length is greater than 5. 



/*
let str="apple";

if((str[0]=='a'|| str[0]=='A') && (str.length>4)) {
    console.log("golden string");
} else {
    console.log("not golden string");
}
*/


// ---------------------------- WAP to find the largest of 3 numbers -----------------------



/*
let a=50;
let b=90;
let c=30;

if(a>b) {
    if(a>c) {
        console.log("a is largest");
    } else {
        console.log("c is largest");
    }
} else {
    if(b>c) {
        console.log("b is largest");
    } else {
        console.log("c is largest");
    }
} 
*/ 




// ----------------------- WAP to check if 2 numbers have the same last digit. -------------------------


/*
let num1=33;
let num2=47853;

if((num1%10)==(num2%10)) {
    console.log("same last digit which is ", num1%10);
} else {
    console.log("not same last digit");
}
*/ 




// -----------------------------------------------------------------------


/*
let msg="     help!      ";
let output=msg.trim().toUpperCase();
console.log(output);
*/


// ----------------------------------------------------------------------


/*
let name="ApnaCollege";
console.log(name.slice(4,9));
console.log(name.indexOf('na'));
console.log(name.replace('Apna','Our'));
*/



// ------------------------------------------------------------------------


/*
let name="ApnaCollege";
console.log(name.slice(4).replace('l','t').replace('l','t'));
*/



// -------------------------------------- Array Qns on shift/unshift-----------------------------------------



/*
let month=["jan", "jul", "mar", "aug"];
console.log(month);
month.shift();
month.shift();
console.log(month);
month.unshift("jun");
month.unshift("july");
console.log(month);
*/



// ------------------------------------- Array Qns on splice/slice ------------------------------------------


/*
let arr=['jan','jul','mar','aug'];
let output=arr.splice(0,2,'jul','jun');
console.log(output);
console.log(arr);
*/


/*
let lang=['c','c++','js','html','python','java','c#','sql'];
let output=lang.reverse().indexOf('js');
console.log(output);
*/




// ----------------------------- Nested array (tic-tac-toe game) -------------------------------------


/*
let ticTac=[['X',null,'O'],[null,'X',null],['O',null,'X']];
console.log(ticTac);
*/


// -------------- WAP of JS to get the first n element of an array.(n can be any positive no.) -------------



/*
let arr=[7,9,0,-2];
let n=3;
let output=arr.slice(0,n);
console.log(output);
*/



// ---------------------- WAP of JS to get the last element of an array.(n can be any positive no.) ----------------------



/*
let arr=[7,9,0,-2];
let n=3;
let output=arr.splice(0,1);
console.log(arr);
*/

/*
let arr=[7,9,0,-2];
let n=3;
// let output=arr.slice(1);
let output=arr.slice(arr.length-n);
console.log(output);
*/



// -------------------- WAJSP to check whether a string is blank or not. -------------------------


/*
let str=prompt("please enter a string");
if(str.length==0) {
    console.log("string is empty");
} else {
    console.log("string is not empty");
}
*/


// ------------------ WAJSP to test whether the character at the given (char) index is lower case. ------------



/*
let str="PraShant";
let index=3;
if(str[index]==str[index].toLowerCase()) {
    console.log("char. is lowercase");
} else {
    console.log("char. is not lowercase");
}
*/



// ----------------------- WAJSP to strip leading and trailing spaces from a string. -------------------



/*
let str=prompt("please enter a string");
console.log(`original string= ${str}`);
console.log(`string without spaces= ${str.trim()}`); 
*/ 



// -------------------- WAJSP to check if an element exists in an array or not. ------------------------



/*
let arr=["hello",'a',23,64,99,-6];
let item=64;
if(arr.indexOf(item)!=-1) {
    console.log("element exists in array");
} else {
    console.log("element doesnt exists in array");
}
    */



//  ---------------------------- Print all odd numbers(1 to 15) ------------------------------


/*
for(let i=1;i<=15;i=i+2) {
    console.log(i);
}



for(let i=15;i>=1;i=i-2) {
    console.log(i);
}
*/




// --------------------- Print all even numbers (2 to 20) --------------------


/*
for(let i=2;i<=20;i=i+2) {
    console.log(i);
}

for(let i=20;i>=2;i=i-2) {
    console.log(i);
}
*/



// --------------------- Print the multipliaction table of 5 ------------------------


// for(let i=5;i<=50;i+=5) {
//     console.log(i);
// }


// ---------------- Print all odd numbers(1 to 15) --------------------------------


// for(let i=1;i<=15;i=i+2) {
//     console.log(i);
// }


// -------------------- Print all even numbers (2 to 20) -------------------------



// for(let i=2;i<=20;i+=2) {
//     console.log(i);
// }


// -------------------- Print multiplication table for 5 -------------------



// for(let i=5;i<=50;i+=5) {
//     console.log(i);
// }



// --------------------------- Favorite Movie ----------------------------



/*
const favMovie="3 idiots";
let guess= prompt("guess my favorite movie ?");

while((guess!=favMovie) && (guess!="quit")) {
    guess= prompt("wrong guess. plz try again")
}

if(guess==favMovie) {
    console.log("Congrats!!");
} 
*/



// ------------------- Practice Exercise ------------------




