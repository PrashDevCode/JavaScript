//  ------------------------------------- Objects --------------------------------

//  singleton
//  Object.create

/*  objects can be declare in two ways - 
            1--> like literals
            2--> like constructor 
            */

//  --------------------------------- Object Literals ----------------


const JsUser= {
    name: "Prashant",
    "full name": "Prashant Singh",
    age: 23,
    location: "Bhopal",
    email: "prashantsinghberath@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday","Saturday"]
} 

// console.log(JsUser.email);      // object calling method but this is not efficient  with dot(.)
// console.log(JsUser["email"]);    // it's also a calling method of object in square[] bracket without dot(.)
// console.log(JsUser["name"]);
// console.log(JsUser["location"]);
// console.log(JsUser["age"]);
// console.log(JsUser["isLoggedIn"]);
// console.log(JsUser["lastLoginDays"]);
// console.log(JsUser["full name"]);
// console.log(JsUser.full name);      // so here we have to ignore the first method of calling object and used of second method of calling object


JsUser.greeting=function() {
    console.log("hello JS User");
}
JsUser.greetingTwo=function() {
    console.log(`hello JS User, ${this.name}`); 
    console.log(`hello JS User, ${this.age}`); 
}

// console.log(JsUser.greeting());
// console.log(JsUser.greetingTwo());


// const tinderUser = new Object();  // Object decleration bcz this is a Singleton object 
// const tinderUser1 = {} ;      // Object decleration bcz this is a non singleton object

// tinderUser.id="123abc";
// tinderUser.name="Prashant";
// tinderUser1.name="Singh";
// tinderUser.isLoggedIn= false;

// console.log(tinderUser);
// console.log(tinderUser.name);
// console.log(tinderUser1);

const regularUser={
    email:"pwefuwdf@gmail.co",
    name:"Pks",
    rollno:1121281,
    fullname:{                          // this is the nested objects we have to go more nesting in depth
        userfullname:{
            firstname:"Prashant",
            middlename:"Kumar",
            lastname:"Singh"
        }
    }  

} 

// console.log(regularUser.fullname.userfullname.firstname);
// console.log(regularUser[rollno]);

const obj1={1:"a", 2:"b"}
const obj2={3:"c", 4:"d"}

// const obj3={obj1, obj2}
const obj3=Object.assign(obj1,obj2)

console.log(obj3);



