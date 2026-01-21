//higher order function run twice

function runTwice(fn) {
  fn();
  fn();
}

runTwice(function () {
  console.log("higher order function");
});

//pure fnc || simple fnc = take same arguments and give same output

function pure(a, b) {
  console.log(a * b);
}
pure(2, 3);
//global impure fnc
let global = 0;
function impure(a) {
  global++;
  console.log(a + global);
}

impure(2);

//function obj destructing

function obj({ name, age }) {
  console.log(name, age);
}

obj({
  name: "Shwe win aung",
  age: 24,
});

//this

let myobj = {
  name: "Nicky",
  fnc: function () {
    console.log(this);
  },

  arrfnc: () => {
    console.log(this); //arrow fnc takes this value from the parent
  },
};

myobj.fnc();
myobj.arrfnc();

//arr

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let sqArr = arr.map((x) => {
  return x * x;
});
console.log(sqArr);

let even = arr.filter((x) => {
  return x % 2 == 0;
});

console.log(even);

let salary = [1000, 2000, 3000];

let total = salary.reduce((acc, currVal) => {
  return acc + currVal;
}, 0);
console.log(total);

let names = ["Nicky", "Ram", "Abid", "Sandili", "Sakshi"];

let some = names.some((x) => {
  return x.length > 3;
});

console.log(some);

let every = names.every((val) => {
  return val.length > 3;
});

console.log(every);

//obj

let user = {
  name: "Nicky",
  age: 24,
  email: "abc@gmail.com",
};
// Object.freeze(user);
Object.seal(user);
user.age = 45;
user.social = "Facebook";
console.log(user);

//nested obj

let Userobj = {
  user: {
    address: {
      city: {
        name: "Mandalay",
      },
    },
  },
};

console.log(Userobj.user.address.city.name);
