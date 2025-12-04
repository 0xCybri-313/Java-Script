let userScore = 0;
let compScore = 0;
let resultMessage = document.querySelector(".message");
let showUserScore = document.querySelector("#your-score");
let showCompScore = document.querySelector("#comp-score");
const choices = document.querySelectorAll(".option");

// Function

const playgame = (userChoice) => {
  const compChoice = genCompChoice();

  if (userChoice === compChoice) {
    drawGame();
  } else {
    userWin = true;
    if (userChoice === "rock") {
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      userWin = compChoice === "scissors" ? false : true;
    } else {
      userWin = compChoice === "rock" ? false : true;
    }
    if (userWin) {
      resultMessage.textContent = "You - Win";
      showUserScore.textContent = ++userScore;
    } else {
      resultMessage.textContent = "AI - Win";
      showCompScore.textContent = ++compScore;
    }
  }
};
const genCompChoice = () => {
  let option = ["rock", "paper", "scissors"];
  const ranIndex = Math.floor(Math.random() * 3);
  return option[ranIndex];
};
const drawGame = () => {
  resultMessage.textContent = "Draw";
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    let userChoice = choice.getAttribute("id");
    playgame(userChoice);
  });
});
