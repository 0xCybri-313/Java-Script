// Delay function (returns a Promise)
function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// Async function for countdown
async function startCountdown() {
  for (let c = 100; c >= 0; c--) {
    document.getElementById("count_down").innerText = c;
    await delay(1000); // wait 1 second
  }

  // Optional: when finished
  document.getElementById("count_down").innerText = "Time’s up!";
}

// Start countdown
startCountdown();

// Optional: add a button to start the countdown
document
  .getElementById("start_button")
  .addEventListener("click", startCountdown);
