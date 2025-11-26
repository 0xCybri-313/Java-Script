// =================== Functions =================== //

function startGame() {
  renderGame();
}

function renderGame() {
  //   Create a for loop that renders out all the cards instead of just two
  cardsEl.textContent = "Cards: ";
  for (let i = 0; i < cards.length; i++) {
    cardsEl.textContent += cards[i] + " ";
  }
  sumEl.textContent = "Sum: " + sum;
  if (sum <= 20) {
    message = "Do you want to draw a new card?";
  } else if (sum === 21) {
    message = "You've got Blackjack!";
    hasBlackJack = true;
  } else {
    message = "You're out of the game!";
    isAlive = false;
  }
  messageEl.textContent = message;
}

function newCard() {
  let card = getRandomNumber();
  sum += card;
  // Push the card to the cards array
  cards.push(card);
  renderGame();
}
function getRandomNumber() {
  let ranCard = Math.floor(Math.random() * 13) + 1;
  if (ranCard > 10) {
    return 10;
  } else if (ranCard === 1) {
    return 11;
  } else {
    return ranCard;
  }
}
// =================== Main Program =================== //

let firstCard = getRandomNumber();
let secondCard = getRandomNumber();
let cards = [firstCard, secondCard];
let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("card-el");
