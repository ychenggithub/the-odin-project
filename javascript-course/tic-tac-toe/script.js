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
    gameWinner: "",
    gameCompleted: false,
    playCount: 0,

    createBoard() {
      const boardDiv = document.querySelector("#board");
      this.matrix = Array(9).fill("");
      this.currentPlayer = "X";
      this.gameWinner = "";
      this.gameCompleted = false;
      this.playCount = 0;

      // boardDiv.innerHTML = "";
      for (let i = 0; i < 9; i++) {
        let newDiv = document.createElement("div");
        newDiv.className = "cell";
        newDiv.dataset.index = i;
        newDiv.innerHTML = `${this.matrix[i]}`;
        newDiv.addEventListener("click", () => {
          if (this.matrix[i] === "" && !this.gameCompleted) {
            this.matrix[i] = this.currentPlayer;
            newDiv.innerHTML = `${this.matrix[i]}`;
            this.checkWin(i);
            this.playCount++;
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

    checkWin() {
      const winConditions = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
      ];

      winConditions.forEach((item) => {
        if (
          this.matrix[item[0]] === this.matrix[item[1]] &&
          this.matrix[item[1]] === this.matrix[item[2]] &&
          this.matrix[item[0]] !== ""
        ) {
          this.gameWinner = this.matrix[item[0]];
          this.gameCompleted = true;
          document.querySelector(
            "#game-result"
          ).textContent = `Game Result: ${this.gameWinner} wins!`;
          return;
        }
      });

      if (this.gameWinner === "" && this.playCount === 8) {
        this.gameWinner = "draw";
        document.querySelector(
          "#game-result"
        ).textContent = `Game Result: ${this.gameWinner}`;
      }
    },
  };
}

const game = Game();
game.createBoard();

document.querySelector("#restart-game").addEventListener("click", () => {
  const boardDiv = document.querySelector("#board");
  boardDiv.innerHTML = "";
  game.createBoard();
});
