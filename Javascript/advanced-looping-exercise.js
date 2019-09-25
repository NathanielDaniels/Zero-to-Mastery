const basket = ["apples", "oranges", "grapes"];
const detailedBasket = {
  apples: 5,
  oranges: 10,
  grapes: 1000
};

//1
// for (let i = 0; i < basket.length; i++) {
//   console.log(basket[i]);
// }

//2
// basket.forEach(item => {
//   console.log(item);
// });

// for (item in detailedBasket) {
//   console.log(item);
// }

// for (item of basket) {
//   console.log(item);
// }

console.log("============================");

// Question #1:
// create a function called biggestNumberInArray() that takes
// an array as a parameter and returns the biggest number.
// biggestNumberInArray([-1,0,3,100, 99, 2, 99]) should return 100;
// Use at least 3 different types of javascript loops to write this:
// const array = [-1, 0, 3, 100, 99, 2, 99]; // should return 100
// const array2 = ["a", 3, 4, 2]; // should return 4
// const array3 = []; // should return 0

// function biggestNumberInArray(arr) {
//   let highest = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (highest < arr[i]) {
//       highest = arr[i];
//     }
//   }
//   return highest;
// }

// function biggestNumberInArray2(arr) {
//   let highest2 = 0;
//   for (i of arr) {
//     if (highest2 < i) {
//       highest2 = i;
//     }
//     // console.log(i);
//   }
//   return highest2;
// }

// function biggestNumberInArray3(arr) {
//   let highest3 = 0;
//   arr.forEach(i => {
//     if (highest3 < i) {
//       highest3 = i;
//     }
//   });
//   return highest3;
// }

// Question #2:
// Write a function checkBasket() that lets you know if the item is in the basket or not
amazonBasket = {
  glasses: 1,
  books: 2,
  floss: 100
};

ultaBasket = {
  hairspray: 2,
  conditioner: 1,
  shampoo: 1
};

//======================================================

const basketArray = Object.keys(amazonBasket);

function checkBaskets(basket, lookingFor) {
  if (basket.includes(lookingFor) === true) {
    console.log("amazonBasket Includes: ", lookingFor);
  } else {
    console.log("amazonBasket Does NOT Include: ", lookingFor);
  }
}

checkBaskets(basketArray, "books");

//======================================================
function checkBasket(basket, lookingFor) {
  for (item in basket) {
    if (item === lookingFor) {
      return `${item} IS currently in the basket`;
    }
  }
  return `${item} currently NOT in the basket`;
}

checkBasket(amazonBasket, "glasses");
checkBasket(ultaBasket, "hairspray");
