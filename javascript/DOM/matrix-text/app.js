const p = document.querySelector("p");
const str = p.innerText;

const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
let iteration = 0;

p.addEventListener("mouseenter", () => {
  function randomText() {
    const newstr = str
      .split("")
      .map((e, idx) => {
        if (idx < iteration) {
          return e;
        }
        return characters.split("")[Math.floor(Math.random() * 53)];
      })
      .join("");

    p.innerText = newstr;
    iteration += 0.1;
  }

  setInterval(randomText, 20);
});
