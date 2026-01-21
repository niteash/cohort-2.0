function abcd(name, age) {
  console.log(name, age);
}

abcd("Nicky", 24);

//rest parameter

function a(a, b, ...c) {
  console.log(a, b, ...c);
}
a(1, 2, 3, 4, 5, 6, 7, 8);

//hoisting means execution code before its declaration

// def();
var def = function hoisting() {
  console.log("Hoisting");
};

function obj({ name, age }) {
  console.log({ name, age });
}
obj({ name: "Nicky", age: 24 });

//rest operator

function rest(...val) {
  console.log(...val);
}

rest(1, 2, 3, 4, 5, 6, 7, 8, 9);

//nested function

function one() {
  function two() {
    console.log("Nested function");
  }
  two();
}

one();

//IIFE (Immediately invoke function expression) - it is used to create private variable

(function () {
  let balance = 2000;
})();

//arrow function || fat arrow

let fnc = () => {
  console.log("hello, fnc");
};

fnc();

//higher order function - functions that either take one or more functions as arguments or return a function as their result.

function fncOne() {
  return function () {
    console.log("higher order fnc");
  };
}
fncOne();

//OR

function fncTwo(a) {}

fncTwo(function () {
  return "Hello";
});
