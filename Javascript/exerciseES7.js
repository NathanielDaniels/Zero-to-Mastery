// Solve the below problems:

// #1) Check if this array includes the name "John".
// const dragons = ["Tim", "Johnathan", "Sandy", "Sarah"];

// let included = dragons.includes("john");
// console.log("is John in Dragons array?", included);

// #2) Check if this array includes any name that has "John" inside of it. If it does, return that
// name or names in an array.
const dragons2 = ["Tim", "Johnathan", "Sandy", "Sarah"];

let news = dragons2.filter(name => name.includes("John"));

console.log(news);

// #3) Create a function that calulates the power of 100 of a number entered as a parameter

const powerHundo = num => num ** 100;

console.log(powerHundo(5));
// #4) Useing your function from #3, put in the paramter 10000. What is the result?
// Research for yourself why you get this result

if (powerHundo(10000) === Infinity) {
  console.log("Its Infinity!");
} else {
  console.log("Not infinity");
}
