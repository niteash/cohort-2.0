// let btn = document.getElementById("btn");
// let h1 = document.querySelector("h1");

// btn.addEventListener("click", () => {
//   h1.innerHTML = "Changing User...";

//   setTimeout(() => {
//     h1.innerHTML = "Hello, Nitesh Agrahari ";
//   }, 2000);
// });

// let a = 0;

// var int = setInterval(() => {
//   a++;
//   console.log(a);
// }, 200);

// setTimeout(() => {
//   clearInterval(int);
// }, 1000);

let Dlbtn = document.getElementById("dl");
let zero = document.getElementById("zero");
let inner = document.querySelector(".inner");

let r = 50 + Math.floor(Math.random() * 50);

let num = 0;

Dlbtn.addEventListener("click", () => {
  var timeout = setInterval(() => {
    num++;
    zero.innerHTML = num;
    inner.style.width = num + "%";
    Dlbtn.style.pointerEvents = "none";
  }, r);

  setTimeout(() => {
    clearInterval(timeout);
    Dlbtn.innerHTML = "Downloaded!";
    Dlbtn.style.opacity = 0.5;
    Dlbtn.style.backgroundColor = "black";
  }, r * 100);
});
