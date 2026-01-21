//DOM is based on 4 pillars
// - Selection of element
//- changing HTML
//- changing CSS
//- Event Listener

let h1 = document.querySelector("h1");
let btn = document.getElementById("btn");

let h2 = document.querySelector("h2");
let inc = document.getElementById("inc");
let dec = document.getElementById("dec");

console.log((h1.innerText = "Hello, Shwe Win Aung"));
h1.style.fontSize = "3rem";

btn.style.padding = "3rem";
btn.addEventListener("click", () => {
  document.body.style.backgroundColor = "black";

  h1.innerText = "Welcome to the DarkWeb!";
  h1.style.color = "gold";
});

//inc

inc.addEventListener("click", () => {
  h2.innerText++;
});

dec.addEventListener("click", () => {
  h2.innerText--;
});
