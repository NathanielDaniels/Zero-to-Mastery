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

const a = "simon";
const b = true;
const c = {};

const obj = {
  a,
  b,
  c
};

console.log(obj);

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
