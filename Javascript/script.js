//! Function Declaration

// function checkDriverAge(age) {
//   var age = prompt("What is your age?");
//   if (Number(age) < 18) {
//     alert("Sorry, you are too young to drive this car. Powering off");
//   } else if (Number(age) > 18) {
//     alert("Powering On. Enjoy the ride!");
//   } else if (Number(age) === 18) {
//     alert("Congratulations on your first year of driving. Enjoy the ride!");
//   }
// }

// checkDriverAge();

//?======================================
//! Function Expression
// let checkDriverAge2 = function(age) {
//   // var age = prompt("What is your age?");
//   if (Number(age) < 18) {
//     alert("Sorry, you are too young to drive this car. Powering off");
//   } else if (Number(age) > 18) {
//     alert("Powering On. Enjoy the ride!");
//   } else if (Number(age) === 18) {
//     alert("Congratulations on your first year of driving. Enjoy the ride!");
//   }
// };

// checkDriverAge2(18);

//?======================================
//! Arrays

//* Exercise 6

// let array = ["Banana", "Apples", "Oranges", "Blueberries"];

// let banana = array.shift();
// console.log(banana);

// array.sort();
// console.log(array);

// array.push("kiwi");
// console.log(array);

// let apples = array.splice(0, 1);
// console.log(apples);

// console.log(array);

// array.reverse();

// console.log(array);

// var array2 = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];

// let oranges = array2[1][1][0];
// console.log(oranges);

//?======================================
//! Objects

// let user = {
//   //? Property: Value,
//   name: "Nathan",
//   age: 33,
//   hobby: "coding",
//   isMarried: false,
//   shout: () => {
//     console.log("Loud Noises!");
//   }
// };

// console.log(user);
// console.log(user.name);

// user.lastName = "Daniels";
// console.log(user);

//* Run the arrow function inside user object
//? this is called a Method
// user.shout();

//* Change user name
// user.name = "stan";
// console.log(user);

//* if statement from Object Property Value
// if (user.name === "Nathan" || user.lastName === "Daneils") {
//   console.log(`Welcome in, ${user.name} ${user.lastName}!`);
// } else {
//   console.log(`You're Not Welcome Here`);
// }

//* Object inside Array

// let list = [
//   {
//     username: "Andy",
//     password: "secret"
//   },
//   {
//     username: "Stan",
//     password: "123"
//   }
// ];

//* pull username from 2nd object inside list array
// console.log(list[1].username);
//?======================================
//! Javascript Terminology

//*function Declaration
// function newFunction() {}

//*function Expression
// let newFunction = function() {};

//*expression
//? an expression is anything that produces a value
// 1 + 3;
// let a = 2;
// return true;

//*calling (involking) a function
// alert();
// newFunction(param1, param2);

//*assign a variable
// let b = true;

//*function vs method
// function thisIsAFunction() {}
// var obj = { thisIsAMethod: function() {} };

//* calling function vs method
// thisIsAFunction(0);
// obj.thisIsAMethod();

//?======================================
//! LOOPS!

// let todos = [
//   "clean room",
//   "brush teeth",
//   "exercise",
//   "study javascript",
//   "eat healthy"
// ];

// //* for loop
// for (let i = 0; i < todos.length; i++) {
//   todos[i] = `${todos[i]}!`;
// }
// console.log(todos);

// console.log("=============================");

// //* forEach
// todos.forEach(i => {
//   console.log(i);
// });

// console.log("=============================");

// //* while loop
// let i = 0;
// while (i < todos.length) {
//   console.log(todos[i]);
//   i++;
// }

// console.log("=============================");

// //* do while loop
// let counterTwo = 10;
// do {
//   console.log(counterTwo);
//   counterTwo--;
// } while (counterTwo > 0);

// console.log("=============================");

// //* forEach
// todos.forEach(i => {
//   console.log(i);
// });

//?======================================
//! Exercise 7 (Facebook App)

// let database = [
//   {
//     username: "Nathan",
//     password: "nathan"
//   },
//   {
//     username: "Stanley",
//     password: "stanley"
//   }
// ];

// let newsfeed = [
//   {
//     username: "Bobby",
//     timeline: "So tired from all that learning!"
//   },
//   {
//     username: "Sally",
//     timeline: "Javascript is sooooo cool!"
//   },
//   {
//     username: "Mitch",
//     timeline: "Javascript is preeetyy cool!"
//   }
// ];

// function isUserValid(username, password) {
//   for (let i = 0; i < database.length; i++) {
//     if (
//       database[i].username === username &&
//       database[i].password === password
//     ) {
//       return true;
//     }
//   }
//   return false;
// }

// function signIn(username, password) {
//   if (isUserValid(username, password) === true) {
//     console.log(`Welcome, ${username}`);
//     console.log(newsfeed);
//   } else {
//     alert(
//       `Sorry ${username}, Your Username or Password seems to be Invalid. Please Try Again`
//     );
//   }
// }

// var userNamePrompt = prompt("Enter Username Below:");
// var userPasswordPrompt = prompt("Enter Password Below:");
// signIn(userNamePrompt, userPasswordPrompt);

// ?======================================
// ! DOM (Todo List Project)

// const btn = document.getElementById("btn");
// const li = document.getElementsByTagName("li");
// const list = document.getElementById("list");
// const input = document.getElementsByTagName("input")[0];

// // console.log(li.length);

// function addListAfterClick() {
//   if (input.value.length > 0) {
//     const newItem = document.createElement("li");
//     newItem.style.width = "50px";
//     let newText = input.value;
//     //add input.value to list item
//     newItem.innerText = newText;
//     list.append(newItem);
//     //remove innerText from input.value
//     input.value = "";
//   }
//   // deleteItem();
//   toggleDelete();
// }

// function addListAfterKeypress(event) {
//   // Number 13 is the "Enter" key on the keyboard
//   if (event.keyCode === 13) {
//     // Cancel the default action, if needed
//     event.preventDefault();
//     // Trigger the button element with a click
//     btn.click();
//   }
// }

// btn.addEventListener("click", addListAfterClick);
// input.addEventListener("keypress", addListAfterKeypress);

// // function deleteItem() {
// //   for (let i = 0; i < li.length; i++) {
// //     li[i].addEventListener("click", () => {
// //       // li[i].remove(li[i]);
// //       li[i].parentNode.removeChild(li[i]);
// //       console.log("deleted");
// //     });
// //   }
// // }

// function toggleDelete() {
//   let delBtn = document.createElement("button");
//   delBtn.innerText = "Delete";

//   for (let i = 0; i < li.length; i++) {
//     li[i].addEventListener("click", () => {
//       li[i].append(delBtn);
//       li[i].classList.toggle("done");

//       if (li[i].classList == "done") {
//         delBtn.classList = "done";
//         delBtn.style.display = "block";
//       } else {
//         delBtn.style.display = "none";
//       }
//     });
//   }
//   //* Click Delete Btn
//   delBtn.addEventListener("click", () => {
//     for (let i = 0; i < li.length; i++) {
//       // li[i].parentNode.removeChild(li[i]);
//       delBtn.parentNode.remove();
//       console.log("deleted");
//       // console.log(event.target);
//     }
//   });
// }

// ?======================================
//! Advanced Control Flow

// ! Ternary

// function isUserValid(valid) {
//   return valid;
// }

// let answer = isUserValid(false) ? "You may enter" : "Access Denied";

// let automatedAnswer =
//   "Your Account # is " + (isUserValid(false) ? "1234" : "not available");

// let condition = () => {
//   if (isUserValid(true)) {
//     return "You may Enter";
//   } else {
//     return "Access Denied";
//   }
// };

// let answer2 = condition();

// ! Switch Statement

// function moveCommand(direction) {
//   let whatHappens;
//   switch (direction) {
//     case "forward":
//       whatHappens = "you encounter a monster";
//       break;
//     case "back":
//       whatHappens = "you encounter a pathway";
//       break;
//     case "left":
//       whatHappens = "you encounter a door";
//       break;
//     case "right":
//       whatHappens = "you encounter a castle";
//       break;
//     default:
//       whatHappens = "please enter a valid direction";
//   }
//   return whatHappens;
// }

// moveCommand("left");

//* Built on my own
// function newSwitch(direction) {
//   let movingdirection;
//   switch (direction) {
//     case "top":
//       movingdirection = "to the top";
//       break;
//     case "bottom":
//       movingdirection = "to the bottom";
//       break;
//     case "left":
//       movingdirection = "to the left";
//       break;
//     case "right":
//       movingdirection = "to the right";
//       break;
//     default:
//       movingdirection = "enter correct direction";
//       break;
//   }
//   return movingdirection;
// }

// console.log(newSwitch("right"));

// ?======================================
//! ECMAScript6 (ES6)

//! Arrow Functions

// let arrow = () => console.log("test");

// let arrow2 = function arrow2() {
//   console.log("test2");
// };

// const obj = {
//   player: "bobby",
//   experience: 100,
//   wizardLevel: false
// };

// const player = obj.player;
// const experience = obj.experience;
// const wizardLevel = obj.wizardLevel;

// const { player, experience } = obj;
// let { wizardLevel } = obj;

//! Object Properties (Dynamic)
// const name = "john snow";

// const obj = {
//   [name]: "hello",
//   ["ray" + "smith"]: "hihi"
// };

// console.log(obj);

//==============

// const a = "simon";
// const b = true;
// const c = {};

// const obj = {
//   a,
//   b,
//   c
// };

// console.log(obj);

//==============
//! Default Arguments

// function greet(name = "", age = 30, pet = "cat") {
//   console.log(`name = ${name}, age = ${age}, pet = ${pet}`);
// }

// greet("billy", 24, "dog");

//==============
//! Symbols

// let sym1 = Symbol();
// let sym2 = Symbol("foo");
// let sym3 = Symbol("foo1");

// ?======================================
//! Advanced Functions

// const first = () => {
//   const greet = "hi";
//   const name = "nathan";
//   const second = () => {
//     console.log(name);
//     alert(greet);
//   };
//   return second;
// };

// let newFunc = first();
// newFunc();

//? Closures = A function ran. the Function Executed. It's NEVER going to be Execute again. But, it's going to remember references to those variables, so the child scope always has access to parent scope

//*Currying
// const multiply = (a, b) => a * b;
// const curriedMultiply = a => b => console.log(a * b);
// const multiplyBy10 = curriedMultiply(10);

// const one = a => {
//   const two = b => {
//     console.log(a * b);
//   };
//   return two;
// };

// let newOne = one();
// newOne(5)(2);

//* Compose
// const compose = (f, g) => a => f(g(a));
// const sum = num => num + 2;

// let composed = compose(
//   sum,
//   sum
// )(5);

// console.log(composed);

// Avoiding Side Effects, Functional Purity
//? =====================================
//! Advanced Arrays

// const array = [1, 2, 10, 16];

// const double = [];
// const newArray = array.forEach(num => {
//   double.push(num * 2);
// });
// console.log("forEach", double);

//* MAP/ FILTER/ REDUCE

//* Map
// const mapArray = array.map(num => num * 2);
//? Map -> Always Must use Return (unless shorthand like above)
// console.log("Map", mapArray);

//* Filter
// const filterArray = array.filter(num => num < 5);
//? Filter -> Just like Map, use Return (unless shorthand like above)
// console.log("filter", filterArray);

//* Reduce
// const reduceArray = array.reduce((accumulator, num) => {
// return accumulator + num;
// }, 0);
//? Accumulator is something that stores info thats happens in the body. It adds one to the next, so 1 + 2 = 3, 3 + 10 = 13, 13 + 16 = 29. So it reduces the array down to one number

// console.log("reduce", reduceArray);

//? =====================================
//! Advanced Objects

//? reference type
// let object1 = { value: 10 };
// let object2 = object1;
// let object3 = { value: 10 };

//? context vs scope
//* Scope is whats between the { Brackets } which can't be accessed outside of those brackets

// function b() {
//   // scope
//   let a = 4;
// }
// console.log(a); //not defined

//* Context tells you where we are inside an object
// console.log(this); // inside window object
// this refers to what object you are inside of

// const object4 = {
//   a: () => {
//     console.log(this);
//     // this now refers to object4
//   }
// };

//? instantiation
// class Player {
//   constructor(name, type) {
//     console.log("player: ", this);
//     this.name = name;
//     this.type = type;
//   }
//   introduce() {
//     console.log(`Hi I'm ${this.name}, I'm a ${this.type}`);
//   }
// }

// class Wizard extends Player {
//   constructor(name, type) {
//     super(name, type);
//     console.log("wizard: ", this);
//     //* anytime you run *extends*, you have to run super(), with properties passed to constructor
//     //* super takes us up to the constructor of Player
//     //* *This* Becomes wizard (wizard.name, wizard.type)
//   }
//   play() {
//     console.log(`Weeeee I'm a ${this.type}`);
//   }
// }

// const wizard1 = new Wizard("Shelly", "Healer");
// const wizard2 = new Wizard("Shawn", "Dark Magic");

// console.log("===========================");

// console.log(wizard1.introduce());
// console.log(wizard2.introduce());
// console.log(wizard2.play());

//?==========================================
//! By Reference vs By Value

//* Pass By Value

// let a = 5;
// let b = a;

// b++;

// console.log(b); //6 //No Longer Connected to a
// console.log(a); //5

//=========================
//* Pass By Reference

// let obj1 = { name: "nate", password: "123" };
// let obj2 = obj1;

// console.log(obj2); // { name: "nate", password: "123" };

// console.log("-----------------");

// obj2.password = "321";

// console.log(obj1); // { name: "nate", password: "321" };
// console.log(obj2); // { name: "nate", password: "321" }; // Stay the same

//? pass by ref. also works on arrays

// let c = [1, 2, 3, 4, 5];
// let d = c;
// d.push(534343);
// console.log(d);
// console.log(c);

//? To stop this behavior...
//* let d = [].concat(c);
//This clones c into a new array called d

// let obj = {
//   a: "a",
//   b: "b",
//   c: "c"
// };

//? How to assign Obj to a new place in memory (without reference)
// run the object constructor and assign obj to a new object
// let newObj = Object.assign({}, obj);

// console.log("newObj", newObj);

// obj.c = 5;
// console.log("newObj", newObj);
// console.log("obj", obj);

//! This is the same as running Object.assign()
// let clone2 = { ...newObj };

// newObj.b = 5;
// console.log("newObj updated", newObj);

// console.log("clone2/ no change", clone2);

//? if you have a nested object

// let obj2 = {
//   a: "a",
//   b: "b",
//   c: { c: "Old C" } // This is another place in memory
// };

// console.log("original obj2", obj2);

// object3 = { ...obj2 };

// console.log(object3);

// obj2.c.c = "NEW";

// console.log("updated obj2", obj2);

//!shadow cloning means you can only clone the first level inside an object. so when running the code from obj, even though we cloned everything like before, they would all show the nested object inside c. You need JSON to Clone multi levels

// for some reason I can't get this to work

//! IF this object is really deep, it could hurt performance.
// let superClone = JSON.parse(JSON.stringify(obj2));

// console.log("superClone", superClone);

//?==========================================
//! Type Coercion
// Known To make people pull out their hair in frustration
//* Type Coercion is when you use two equal signs (==) to find if they are equal. If the types aren't equal, it tries to "Coerce" it to be the same. which is why (2 == "2" (True))
//* When using two equals signs for JavaScript equality testing, some funky conversions take place.
//? Use 3 equal signs to find equal values without trying to Coerce. (2 === "2" (False))
//? When using three equals signs for JavaScript equality testing, everything is as is. Nothing gets converted before being evaluated.

//* This also works with if statements (typically 1 and 0 being Coerced into True or False).

// if (1) {
//   // 1 is True
//   console.log("1 is true");
// }

//?==========================================
//! ES7

//* Includes()
//? Includes tells you if something is inside an element. Below, we check if the string "hello" includes the letter "o", which is True
// let newHello = "hello".includes("o");

// console.log(newHello); //true

//? Includes also works on Arrays
// const pets = ["cat", "dog", "rabbit"];
// const cat = pets.includes("cat");
// console.log(cat); //true

//* exponential operator (**)
// const square = x => x ** 2; // (**) = to the power of
// const cube = y => y ** 3;
// console.log(square(2));
// console.log(cube(2));

//?==========================================
//! ES8
//* padStart()
//* padEnd()
// These add padding?!

// console.log("turtle".padStart(10)); // "__________turtle"
//this adds 10 spaces in front of "turtle"

//* ===========================

// const fun = (a, b, c, d) => {
//   console.log(a);
// };

// console.log(fun(1, 2, 3, 4));

//? Object values, entries and keys
//* Object.values;
//* Object.entries;
//* Object.keys

// let obj = {
//   username0: "santa",
//   username1: "Rudolf",
//   username2: "Mr. Grinch"
// };

//? Turn Object into array with Object.keys()
//* Keys are the "property values of an object (left of (:))"
// let keys = Object.keys(obj); // Turns object into Array
// console.log(keys); // [ username0, username1, username2 ]

//? Iterate through objects
// Object.keys(obj).forEach((key, index) => {
//   console.log(key, obj[key]);
// });

//? Find the object Values (right of (:))
// Object.values(obj).forEach(value => {
//   console.log("values", value);
// });

//? Full Object Entries (Prints both key and value in seperate arrays)
// Object.entries(obj).forEach(value => {
//   console.log("entries", value);
// });

//? Change key names
// let newNames = Object.entries(obj).map(value => {
//   return value[1] + value[0].replace("username", "");
// });

// console.log(newNames);
// console.log(Object.values(obj));

//?==========================================
//! Advanced Loops!

// const basket = ["apples", "oranges", "grapes"];
// const detailedBasket = {
//   apples: 5,
//   oranges: 10,
//   grames: 1000
// };

//? for loop
// for (let i = 0; i < basket.length; i++) {
//   console.log("for loop: ", basket[i]);
// }

//? forEach
// basket.forEach(item => {
//   console.log("forEach: ", item);
// });

//? for of
// Iterating - arrays, strings
//! for of loops do NOT work with Objects - Objects are Not Iterable
// for (item of basket) {
//   console.log("forOf loop", item);
// }

//? for in - object properties
// enumerating (enumerable properties) - objects
// for (item in detailedBasket) {
//   console.log("forIn: ", item);
// }

//?==========================================
//! Debugging!

// const flattened = [[0, 1], [2, 3], [4, 5]].reduce((accumulator, array) => {
//   console.log("array", array);
//   console.log("accumulator", accumulator);
//   return accumulator.concat(array);
// }, []);

//?==========================================
//! How Javascript Works

//? What is a program?
//* Allocate Memory
//* Parse and Execute scripts

const a = 1; // we just allocated memory
const b = 10;
const c = 100;

//* memory leaks happen when you have unused variables taking up space. It fills up the "Memory Heap"

//* Call stack is what reads and executes our scripts

const one = () => {
  const two = () => {
    console.log("4");
  };
  two();
};

one();

//Asynchronous
// setTimeout() is part of a webAPI (DOM (Document), AJAX(XMLHttpRequest), Timeout (setTimout))
console.log("1");
setTimeout(() => {
  console.log("2");
}, 2000);
console.log("3");

//! What Happens when you run setTimeout?

// console.log("1") goes into the CALL STACK. This gets executed so we console log "1" to browser

// Then runs setTimeout() which goes into the WebAPI to be run. The WebAPI starts a 2 second timer (in this case). While this is happening, the CALL STACK is empty and ready to take the next input.

// console.log("3") goes into the CALL STACK. This gets executed so we console log "3" to browser

// After the 2 seconds is up, the function inside setTimeout is run, but since its a callback, it gets moved to CALLBACK QUEUE. Then the EVENT LOOP checks if there is anything left inside CALL STACK. IF CALL STACK is empty, the CALLBACK QUEUE moves the function into the CALL STACK to be executed, which in this case, console logs "2"

// So "1" gets logged first, then "3" gets logged before "2" (1,3,2)

//* Javascript Runtime Environment
//======================================
// CALL STACK

// WEB API

// CALLBACK QUEUE

// EVENT LOOP

//======================================
// Asynchronous vs synchronous
