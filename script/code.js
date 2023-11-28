// functionality
const btnAdd = document.querySelector("[data-add]");
const btnNext = document.querySelector("[data-next]");

let totalNums = document.querySelector("[data-arr]");
let input = document.querySelector("[data-input]");
let output = document.querySelector("[data-res]");

let arr = [];

function add() {
  if (input.value === "") {
    output.textContent = "enter a number";
  } else {
    arr.push(input.value);
    totalNums.textContent = arr.length;
  }
}
btnAdd.addEventListener("click", add);


let index = 0;
function next() {
  if (index < arr.length) {
    output.textContent = arr[index];
    index++;
  }else{
   output.textContent = 'End of List';
  }
}
btnNext.addEventListener("click", next);