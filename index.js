const btn = document.querySelector("#btn");
const inputSec = document.querySelector("#input-sec");
const submitBtn = document.querySelector("#submit");
const input = document.querySelector("#input-area");
btn.addEventListener("click", () => {
  if (inputSec.className == "input-section-diss") {
    inputSec.classList.remove("input-section-diss");
    inputSec.classList.add("input-section");
  } else {
    inputSec.classList.remove("input-section");
    inputSec.classList.add("input-section-diss");
  }
});

submitBtn.addEventListener("click", () => {
  if (input.value == "") {
    alert("Please enter userName!");
  } else {
    alert("Hello, " + input.value + "!");
    inputSec.classList.remove("input-section");
    inputSec.classList.add("input-section-diss");
  }
});
