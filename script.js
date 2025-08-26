const result = document.getElementById("result");
const btns = document.querySelectorAll(".up");
const clear = document.getElementById("clear");
const backspace = document.getElementById("backspace");
const equal = document.getElementById("equal");

btns.forEach(function (button) {
  button.addEventListener("click", function () {
    result.value += button.textContent;
  });
});

clear.addEventListener("click", () => {
  result.value = "";
});

backspace.addEventListener("click", () => {
  result.value = result.value.slice(0, -1);
});

equal.addEventListener("click", () => {
  result.value = eval(result.value);
});
