// ========== Declaration ==========

let boxes = document.querySelectorAll(".boxes");
let restart = document.querySelector(".reset");
let newGame = document.querySelector(".new_game");
let message = document.querySelector(".result");

let count = 1;
let turn = true;
let winnerFound = false;

let winPattern = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

// ========== Function ==========

const startGame = () => {
  turn = true;
  enabledBtn();
  count = 1;
};

const checkWin = () => {
  for (let wins of winPattern) {
    let val1 = boxes[wins[0]].innerText;
    let val2 = boxes[wins[1]].innerText;
    let val3 = boxes[wins[2]].innerText;

    if (val1 !== "" && val1 !== "" && val1 !== "") {
      if (val1 === val2 && val2 === val3) {
        showWinner(val1);
        winnerFound = true;
        break;
      }
    }
  }
  if (!winnerFound && count === 9) {
    newGame.classList.remove("hide");
    message.classList.remove("hide");
    message.textContent = "Draw";
    console.log("Draw");
  }
};

const showWinner = (winner) => {
  newGame.classList.remove("hide");
  message.classList.remove("hide");
  message.textContent = `Winner is ${winner}`;
  disabledBtn();
};

const disabledBtn = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};
const enabledBtn = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerText = "";
    message.classList.add("hide");
    newGame.classList.add("hide");
  }
};

// ========== Main ==========

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turn) {
      console.log("X");
      box.textContent = "X";
      turn = false;
    } else {
      console.log("O");
      box.textContent = "O";
      turn = true;
    }
    box.disabled = true;
    checkWin();
    count++;
  });
});

newGame.addEventListener("click", startGame);
restart.addEventListener("click", startGame);
