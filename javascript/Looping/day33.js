// for (let i = 0; i <= 10; i++) {
//   console.log(i);
// }

//even
// for (let i = 0; i <= 20; i++) {
//   if (i % 2 === 0) {
//     console.log(i);
//   }
// }

//odd
// for (let i = 0; i <= 21; i++) {
//   if (i % 2 !== 0) {
//     console.log(i);
//   }
// }

//print the word 5 times

// let hey = "hey";
// for (let i = 0; i <= 5; i++) {
//   console.log(hey + i);
// }

// for (let i = 0; i <= 10; i++) {
//   if (i % 2 === 0) {
//     console.log("even - " + i);
//   } else {
//     console.log("odd - " + i);
//   }
// }

// let age = prompt("What is your age?"); //putting "+" auto converts the string to number

// if (age >= 18) {
//   console.log("You are eligible for voting!");
// } else {
//   console.log("You are not eligible for voting");
// }

// console.log(age);
// console.log(parseInt(age));

// if (age === null) {
//   console.error("You pressed the cancel");
// } else {
//   if (age.trim() === "" || age.trim() === 0) {
//     console.log("Please type the letter");
//   } else {
//     age = Number(age.trim());
//     if (isNaN(age)) {
//       console.log("Give the number only");
//     }
//   }
//   console.log(age);
// }

//day 35

// let pass = "Nicky";

// let first = prompt("Enter your password to get access: ");

// if (first === pass) {
//   console.log("You are logged in >>>");
// } else {
//   let second = prompt("Enter your password to get access: ");
//   if (second === pass) {
//     console.log("You are logged in >>>");
//   } else {
//     let third = prompt("Enter your password to get access: ");
//     if (third === pass) {
//       console.log("You are logged in >>>");
//     } else {
//       console.log("Your account is locked!");
//     }
//   }
// }

//while

// let attempt = 0;
// let pass = "Nicky";
// let userpass = prompt("Enter your password - ");

// while (pass != userpass) {
//   if (attempt === 3) break;
//   let userpass = prompt("Enter your password - ");
//   attempt++;
// }

//ask user for words until they type "stop"

let count = 0;
let pass = "Stop";
let Userprompt = prompt("Words daal lo ?");

while (pass != Userprompt) {
  if (pass === Userprompt) break;
  let Userprompt = prompt("Words daal lo ?");
  count++;
}
