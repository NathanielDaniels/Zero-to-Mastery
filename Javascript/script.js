let age = prompt("How Old are You?");

if (Number(age) < 18) {
  alert("Sorry, you are too young to drive this car. Powering off");
} else if (Number(age) === 18) {
  alert("Congratulations on your first year of driving. Enjoy the ride!");
} else {
  alert("Powering On. Enjoy the ride!");
}

// switch (age) {
//   case Number(age) < 18:
//     alert("Sorry, you are too young to drive this car. Powering off");
//     break;
//   case Number(age) === 18:
//     alert("Congratulations on your first year of driving. Enjoy the ride!");
//     break;
//   case Number(age) > 18:
//     alert("Powering On. Enjoy the Ride!");
//     break;
// }
