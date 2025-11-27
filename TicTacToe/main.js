let boxes = document.querySelectorAll(".boxes");
let restart = document.querySelector(".reset");
let newGame = document.querySelector(".new_game");
let message = document.querySelector(".result");
let turn = true;

// 2D array of win pattern
const win = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const startGame = () => {
  turn = true;
  enabledBtn();
};

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turn) {
      box.innerText = "X";
      console.log("X");
      turn = false;
    } else {
      box.innerText = "O";
      console.log("O");
      turn = true;
    }
    box.disabled = true;
    checkWin();
  });
});

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
const showWinner = (winner) => {
  message.classList.remove("hide");
  newGame.classList.remove("hide");
  message.innerText = `Winner is :${winner}`;
  disabledBtn();
};
const checkWin = () => {
  for (let pattern of win) {
    let val1 = boxes[pattern[0]].innerText;
    let val2 = boxes[pattern[1]].innerText;
    let val3 = boxes[pattern[2]].innerText;

    if ((val1 != "", val2 != "", val3 != "")) {
      if (val1 === val2 && val2 === val3) {
        showWinner(val1);
      }
    }
  }
};

newGame.addEventListener("click", startGame);
