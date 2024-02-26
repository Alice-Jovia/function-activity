// function chooseShape(a, b) {
//   const modulus = a % b;
//   return modulus;
// }
// const modula = chooseShape(2, 4);
// console.log(modula);
// // function requestForComputer(typeOfComputer = "laptop") {
// //   console.log(typeOfComputer);
// // }
// // requestForComputer("Desktop computer");
// function chooseCarType(carType = "BMW") {
//   console.log(carType);
// }
// chooseCarType("Ford");
// function areaOfTrapizium(a = "2", b = "2", h = "2") {
//   return 0.5 * a * b * h;
// }
// const area = areaOfTrapizium();
// console.log(area);
const username = prompt("Enter username.");
function validateName(username) {
  if (username.length < 3) {
    alert("username must be above three characters.");
    return false;
  } else {
    return true;
    const password = prompt("Enter your password.");
  }
}
validateName(username);
// function validatePassword(password) {
//   if (password.length < 4) {
//     alert("Password should be of four characters and above.");
//     return false;
//   } else {
//     return true;
//     const gender = prompt("Enter your gender.");
//   }
// }
// validatePassword(password);
