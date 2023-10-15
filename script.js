/*
try to put everything in classes
you want the least amount of global variables possible 
Have a X wins! / O wins! display on modal
*/

let movesX = [];
let movesO = [];
let turn = true; // X's turn

// Store player moves in an array.
// Check after every round beginning at 3rd round if that
// array contains any 3 of the same numbers in winningArray
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

let winnerHeading = document.querySelector(".winnerHeading");

//if you pick somewhwere that's not a perfect 3 it doesn't work
function checkWin() {
  for (let array of winningArray) {
    if (round === 9) {
      // modal.showModal();
      modal.style.display = "block";
      winnerHeading.textContent = "It's a tie!";
    }
    //if it's equal to 3 this works
    // if it's >= 3, than we have nums in our array like [3,5,6,7]
    //you still picked [3,5,7] so you should win but because of that 6 you picked earlier it doesn't let you...
    // and you dont want to pop it or delete it because it can be a part of another move
    //what if you sort the array, pop the non-matching elements out, check if they are equal, if not then put popped element back in array
    //The max possible moves X can have is 5
    // The max possible moves O can have is 4
    if (movesX.length === 3) {
      if (movesX.every((num) => array.includes(num))) {
        // modal.showModal();
        modal.style.display = "block";
        winnerHeading.textContent = "X wins!";
      }
    }
    if (movesO.length === 3) {
      if (movesO.every((num) => array.includes(num))) {
        // modal.showModal();
        modal.style.display = "block";
        winnerHeading.textContent = "O wins!";
      }
    }
  }
}

const cells = document.querySelectorAll(".cell");
let round = 0;

cells.forEach((cell) => {
  cell.addEventListener(
    "click",
    () => {
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
    },
    { once: true }
  );
});

function handleRestart() {
  modal.close();
  modal.style.display = "none";
  movesX = [];
  movesO = [];
  turn = true;
  round = 0;
  cells.forEach((cell) => {
    cell.textContent = "";
  });
}

const modal = document.querySelector("dialog");

//try adding a new btn right next to this one
const restartBtn = document.querySelector("#restartBtn");
restartBtn.addEventListener("click", handleRestart());
