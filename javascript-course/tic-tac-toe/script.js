const matrix = ["", "", "", "", "", "", "", "", ""];

let currentPlayer = "X";

const boardDiv = document.querySelector("#board");

function createBoard() {
  for (let i = 0; i < 9; i++) {
    let newDiv = document.createElement("div");
    newDiv.className = "cell";
    newDiv.innerHTML = `${matrix[i]}`;
    newDiv.addEventListener("click", () => {
      if (matrix[i] === "") {
        matrix[i] = currentPlayer;
        newDiv.innerHTML = `${matrix[i]}`;
        togglePlayer();
      }
    });
    boardDiv.appendChild(newDiv);
  }
}

function togglePlayer() {
  if (currentPlayer === "X") {
    currentPlayer = "O";
  } else {
    currentPlayer = "X";
  }
  document.querySelector(
    "#current-user"
  ).innerHTML = `Current User: ${currentPlayer}`;
}
