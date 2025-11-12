// document.getElementById("count").innerText = 5
// let count = 5
// count = count + 1
// console.log(count)
// initialize the count as 0
// listen for clicks on the increment button
// increment the count variable when the button is clicked (log it out)
// change the count-el in the HTML to reflect the new count

let count_digit = 0;
function count_number() {
  count_digit += 1;
  if (count_digit <= 10) {
    return count_digit;
  } else {
    count_digit = "No more tickets";
    return "No more tickets";
  }
}
function count_down() {
  document.getElementById("count_down").innerText = count_number();
}

// ========================================= //

// 1. Grab the save-el paragraph and store it in a variable called saveEl
let saveEl = document.getElementById("save_el");
function save_count() {
  saveEl.innerHTML = saveEl.innerHTML + " " + count_digit + " - ";
}

// 2. Create a variable that contains both the count and the dash separator, i.e. "12 - "
// 3. Render the variable in the saveEl using innerText
// NB: Make sure to not delete the existing content of the paragraph

// =========== Reset Button ================ //

function resetCount() {
  count_digit = 0;
  document.getElementById("count_down").innerText = count_digit;
}
