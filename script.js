/*
try to put everything in classes
you want the least amount of global variables possible 
*/

let cellArray = [];
const winningArray = [
  [1, 2, 3],
  [1, 4, 7],
  [1, 5, 9],
];

const cells = document.querySelectorAll(".cell");

cells.forEach((cell) => {
  cellArray.push(cell);
  cell.addEventListener("click", () => {
    console.log(`I am cell #${cell.id}`);
  }, {once:true});
});
