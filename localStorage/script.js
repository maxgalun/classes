let counter;
const localStorageValue = Number(localStorage.getItem("counter-key"));
if (localStorageValue) {
  counter = localStorageValue;
} else {
  counter = 0;
}
updateValue();

function updateValue() {
  const counterSpan = document.querySelector("#counter-value");
  counterSpan.innerText = counter;
}

function countFunc() {
  counter = counter + 1;
  localStorage.setItem("counter-key", counter);
  updateValue();
}
