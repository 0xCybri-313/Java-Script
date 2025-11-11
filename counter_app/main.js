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
    return "No more tickets";
  }
}
function count_down() {
  document.getElementById("count_down").innerText = count_number();
}

// ========================================= //

function save_count() {
  console.log(count_digit);
}

// let countEl = document.getElementById("count-el")
// let count = 0

// function increment() {
//     count = count + 1
//     countEl.innerText = count
// }
