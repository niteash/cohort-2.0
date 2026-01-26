let allBtn = document.querySelectorAll("button");

allBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (btn.textContent == "Add Friend") {
      btn.textContent = "Remove Friend";
    } else {
      btn.textContent = "Add Friend";
    }
  });
});
