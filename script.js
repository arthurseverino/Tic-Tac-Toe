/*
try to put everything in classes
you want the least amount of global variables possible 
Have a display for turn 
*/
const cells = document.querySelectorAll(".cell");
const winnerHeading = document.querySelector(".winnerHeading");
const modal = document.querySelector("dialog");
const restartBtn = document.querySelector("#restartBtn");
const turnDisplay = document.querySelector(".turnDisplay");
const winningArray = [
  ["1", "2", "3"],
  ["1", "4", "7"],
  ["1", "5", "9"],
  ["2", "5", "8"],
  ["3", "6", "9"],
  ["3", "5", "7"],
  ["4", "5", "6"],
  ["7", "8", "9"],
];
let movesX = [];
let movesO = [];
let round = 0;
let turn = true; // X's turn

function checkWin() {
  for (let array of winningArray) {
    // if every element in winningArray is in our moves, it's a win
    if (movesX.length >= 3) {
      if (array.every((num) => movesX.includes(num))) {
        modal.showModal();
        winnerHeading.textContent = "X wins!";
      }
    }
    if (movesO.length >= 3) {
      if (array.every((num) => movesO.includes(num))) {
        modal.showModal();
        winnerHeading.textContent = "O wins!";
      }
    }
    if (
      round === 9 &&
      !array.every((num) => movesO.includes(num)) &&
      !array.every((num) => movesX.includes(num))
    ) {
      modal.showModal();
      winnerHeading.textContent = "It's a tie!";
    }
  }
}

cells.forEach((cell) => {
  cell.addEventListener("click", () => {
    if (cell.textContent === "") {
      if (turn) {
        cell.style.color = "red";
        cell.textContent = "X";
        turnDisplay.textContent = `Current Turn: O`;
        movesX.push(cell.id);
      } else {
        cell.style.color = "blue";
        cell.textContent = "O";
        turnDisplay.textContent = `Current Turn: X`;
        movesO.push(cell.id);
      }
      turn = !turn;
      round++;
      checkWin();
      console.log("movesX: " + movesX);
      console.log("movesO: " + movesO);
    }
  });
});

//it's resolved if you close modal inside eventListener
restartBtn.addEventListener("click", () => {
  movesX = [];
  movesO = [];
  turn = true;
  round = 0;
  cells.forEach((cell) => {
    cell.textContent = "";
  });
  turnDisplay.textContent = "Click a box to play again!";
  modal.close();
});
