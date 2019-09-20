// Complete the below questions using this array:
const array = [
  {
    username: "john",
    team: "red",
    score: 5,
    items: ["ball", "book", "pen"]
  },
  {
    username: "becky",
    team: "blue",
    score: 10,
    items: ["tape", "backpack", "pen"]
  },
  {
    username: "susy",
    team: "red",
    score: 55,
    items: ["ball", "eraser", "pen"]
  },
  {
    username: "tyson",
    team: "green",
    score: 1,
    items: ["book", "pen"]
  }
];

//? Create an array using forEach that has all the usernames with a "!" to each of the usernames
// const newExited = [];
// const exitedPeople = array.forEach(user => {
//   let { username } = user;
//   username = username + "!";
//   newExited.push(username);
// });

// console.log(array);
// console.log(newExited);

//===========
// this seems to tod this same with less code

// const forEachArray = [];
// const newArray = array.forEach(user => {
//   forEachArray.push(user.username + "!");
// });

// console.log(forEachArray);
// console.log(array);

//? Create an array using map that has all the usernames with a "?" to each of the usernames

// const mapArray = array.map(user => {
//   let { username } = user;
//   return username + "?";
// });

// console.log(array);
// console.log(mapArray);

//===========
// this seems to tod this same with less code

// const mapArray = array.map(user => {
//   return user.username + "?";
// });

// console.log(array);
// console.log(mapArray);

//? Filter the array to only include users who are on team: red

// const filterArray = array.filter(user => {
//   // let { team } = user;
//   // return team === "red";
//   return user.team === "red";
// });

// console.log(array);
// console.log(filterArray);

//? Find out the total score of all users using reduce

// const totalScore = array.reduce((acc, num) => {
//   return acc + num.score;
// }, 0);

// console.log("reduced to: ", totalScore);
//?  (1), what is the value of i?
//?  (2), Make this map function pure:
// const arrayNum = [1, 2, 4, 5, 8, 9];
// const newArray = arrayNum.map((num, i) => {
//   return num * 2;
// });

//?? BONUS: create a new list with all user information, but add "!" to the end of each items they own.

// const answer = array.map(user => {
//   user.items = user.items.map(item => {
//     return item + "!";
//   });
//   return user;
// });

// console.log(answer);

const newList = array.map(user => {
  user.items = user.items.map(item => {
    return item + "!";
  });
  return user;
});

console.log(newList);
