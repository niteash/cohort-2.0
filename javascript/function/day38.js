// let arr = [1, 2, 3, 4, 56, 7];
// console.log(arr);

// let arr = [];
let Newarr = new Array();

let arr = [1, 2, 3, 4, 56, 7];
// console.log(arr.push(88));

let arr2 = arr.filter((x) => {
  return x > 4;
});

console.log(arr2);

let arr3 = [...arr2];

for (let i = 0; i < 5; i++) {
  console.log(arr[i]);
}

arr.forEach((x) => {
  console.log(x);
});

//obj

let obj = {
  name: "Shwe win aung",
  designation: "Data Analyst",
  age: 24,
};
console.log(obj);

function sum(a, b) {
  return a + b;
}

console.log(sum(96, 43));

function name(guest = "guest") {
  console.log(`Hi, ${guest}`);
}

name("Shwe win aung");

function unlimitNum(...nums) {
  let sum = 0;
  //firstway

  //   nums.forEach((x) => {
  //     sum += x;
  //   });
  //   console.log(sum);

  //secondway

  //   for (let i = 0; i <= nums.length; i++) {
  //     sum += i;
  //   }

  //   console.log(sum);

  //thirdway

  let answ = nums.reduce((acc, val) => {
    return acc + val;
  }, 0);

  console.log(answ);
}

unlimitNum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

//IIFE

(() => {
  console.log("I run instantly!");
})();

//nested func

function first() {
  let box = 13;
  function second() {
    console.log(box);
  }
  second();
}
first();

//arr

let fruits = ["apple", "banana", "watermelon", "Orange", "pineapple"];

console.log(fruits.shift());
console.log(fruits.push("Blueberry"));
console.log(fruits);

//obj

let myobj = {
  name: "Shwe win aung",
  age: 22,
  city: "punjab",
};

for (let key in myobj) {
  console.log(myobj[key]);
}

setTimeout(() => {
  console.log("Time's up!");
}, 2000);
