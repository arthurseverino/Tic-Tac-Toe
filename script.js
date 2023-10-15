/*
try to put everything in classes
you want the least amount of global variables possible 
make modal look nicer
*/
const cells = document.querySelectorAll(".cell");
const winnerHeading = document.querySelector(".winnerHeading");
const modal = document.querySelector("dialog");
const restartBtn = document.querySelector("#restartBtn");
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
let round = 0;
let movesX = [];
let movesO = [];
let turn = true; // X's turn

function checkWin() {
  for (let array of winningArray) {
    if (round === 9) {
      modal.showModal();
      winnerHeading.textContent = "It's a tie!";
    }
    // flip the logic, if every element in winning array is in our moves it should work
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
  }
}

cells.forEach((cell) => {
  cell.addEventListener("click", () => {
    if (cell.textContent === "") {
      if (turn) {
        cell.textContent = "X";
        movesX.push(cell.id);
      } else {
        cell.textContent = "O";
        movesO.push(cell.id);
      }
      turn = !turn;
      console.log("movesX: " + movesX);
      console.log("movesO: " + movesO);
      round++;
      checkWin();
    }
  });
});

//it's resolved if you define function inside eventListener
restartBtn.addEventListener("click", () => {
  movesX = [];
  movesO = [];
  turn = true;
  round = 0;
  cells.forEach((cell) => {
    cell.textContent = "";
  });
  modal.close();
});
