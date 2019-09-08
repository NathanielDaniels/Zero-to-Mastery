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

let array = ["Banana", "Apples", "Oranges", "Blueberries"];

let banana = array.shift();
console.log(banana);

array.sort();
console.log(array);

array.push("kiwi");
console.log(array);

let apples = array.splice(0, 1);
console.log(apples);

console.log(array);

array.reverse();

console.log(array);

var array2 = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];

let oranges = array2[1][1][0];
console.log(oranges);

//?======================================

//?======================================

//?======================================
