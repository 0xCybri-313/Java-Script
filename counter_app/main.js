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
