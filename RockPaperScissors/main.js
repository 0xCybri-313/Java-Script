let userScore = 0;
let computerScore = 0;
const choices = document.querySelectorAll(".option");

// Function

const playgame = (userChoice) => {
  console.log("User Choice is ", userChoice);
  const compChoice = genCompChoice();
  console.log("Computer Choice is ", compChoice);

  if (userChoice === computerChoice) {
    drawGame();
  } else {
    userWin = true;
    if (userChoice === "rock") {
      userWin = compChoice === "paper" ? false : true;
    }
  }
};
const genCompChoice = () => {
  let option = ["rock", "paper", "scissors"];
  const ranIndex = Math.floor(Math.random() * 3);
  return option[ranIndex];
};
const drawGame = () => {
  console.log("Draw");
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    let userChoice = choice.getAttribute("id");
    playgame(userChoice);
  });
});
