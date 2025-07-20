// let matrix = Array(9).fill("");
// let gameOver = false;
// let currentPlayer = "X";

// const boardDiv = document.querySelector("#board");

// function createBoard() {
//   matrix = Array(9).fill("");
//   boardDiv.innerHTML = "";
//   for (let i = 0; i < 9; i++) {
//     let newDiv = document.createElement("div");
//     newDiv.className = "cell";
//     newDiv.dataset.index = i;
//     newDiv.innerHTML = `${matrix[i]}`;
//     newDiv.addEventListener("click", () => {
//       if (matrix[i] === "") {
//         matrix[i] = currentPlayer;
//         newDiv.innerHTML = `${matrix[i]}`;
//         togglePlayer();
//       }
//     });
//     boardDiv.appendChild(newDiv);
//   }
// }

// function togglePlayer() {
//   if (currentPlayer === "X") {
//     currentPlayer = "O";
//   } else {
//     currentPlayer = "X";
//   }
//   document.querySelector(
//     "#current-user"
//   ).innerHTML = `Current User: ${currentPlayer}`;
// }

// createBoard();

// document.querySelector("#restart-game").addEventListener("click", createBoard);

function Game() {
  return {
    matrix: Array(9).fill(""),
    currentPlayer: "X",

    createBoard() {
      const boardDiv = document.querySelector("#board");
      this.matrix = Array(9).fill("");
      // boardDiv.innerHTML = "";
      for (let i = 0; i < 9; i++) {
        let newDiv = document.createElement("div");
        newDiv.className = "cell";
        newDiv.dataset.index = i;
        newDiv.innerHTML = `${this.matrix[i]}`;
        newDiv.addEventListener("click", () => {
          if (this.matrix[i] === "") {
            this.matrix[i] = this.currentPlayer;
            newDiv.innerHTML = `${this.matrix[i]}`;
            this.togglePlayer();
          }
        });
        boardDiv.appendChild(newDiv);
      }
    },

    togglePlayer() {
      if (this.currentPlayer === "X") {
        this.currentPlayer = "O";
      } else {
        this.currentPlayer = "X";
      }
      document.querySelector(
        "#current-user"
      ).innerHTML = `Current User: ${this.currentPlayer}`;
    },
  };
}

// const game = Game()
Game().createBoard();

// document.querySelector("#restart-game").addEventListener("click", () => {
//   game = Game();
//   game.createBoard();
// });
