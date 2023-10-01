"use strict"; // treaat all code as newer version of js

//alert(3 + 5) // don't work ,becouse we use Node js not browser;

const age = 85;
// const str ="Hello ranjeet";

//DataTypes
// Number => 2 to power 54
//bigint => use for big value
//boolean => true/false
//null=> standalone value type object()
//undefined => not define => type undefined
//symbol => unique

//object
//console.log(typeof str ) // fun to check type of datatypes

//*********************datatypes summary********** */
// Primitive Datatypes

// 7 types : String ,Number ,Boolean ,null ,underdefined ,Symbol ,Bigint
const score = 100;
const scoreValue = 100.4;
const isLoggedIn = false;
const outsideTemp = null;
let userEmail;

const id = Symbol("123");
const anotherid = Symbol("123"); //Look like same but not same thats beauty of Sybole they are uniqiue

const binNumber = 6532589725225n;

// Reference (Non primitive)

//Array , objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
  name: "hitesh",
  age: 22,
};

const myFunction = function () {
  // console.log("Hello world")
};

//console.log(typeof binNumber) // undifined

//********************Datatypes sumary ****** */
// stack(Primitive ) ,Heap (Non-Primitive)

let myYoubename = "Ranjeet Dev kumar ";
let anotherName = myYoubename;

anotherName = "Dev Kumar Ranjeet";
// stack
console.log(myYoubename); // Ranjeet Dev kumar
console.log(anotherName); // Dev Kumar Ranjeet //that means actuall value change nahi hue uski copy mili thi bo bali change ho gai

// Heap
let userOne = {
  email: "Ranjeet@google.com",
  upi: "user@byl",
};
let userTwo = userOne;
userTwo.email = "Dev@google.com";

console.log(userOne);// Dev@google.com
console.log(userTwo); // Dev@google.com  // that means ye actual bale ko hi chabge kar diya 
