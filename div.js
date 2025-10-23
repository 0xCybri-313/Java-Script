let divs = document.querySelectorAll(".box");

console.log(divs);
let idx = 1;
for (div of divs) {
  div.innerText = `I am box number ${idx}`;
  idx++;
}
