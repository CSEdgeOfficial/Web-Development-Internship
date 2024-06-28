let gameBoard = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = "X";
let scoreX = 0;
let scoreO = 0;

document.querySelectorAll(".square").forEach((square, index) => {
    square.addEventListener("click", () => handleSquareClick(index));
});

function handleSquareClick(index) {
    if (gameBoard[index] === "") {
        gameBoard[index] = currentPlayer;
        document.querySelector(`[data-index='${index}']`).classList.add(currentPlayer.toLowerCase());
        document.querySelector(`[data-index='${index}']`).textContent = currentPlayer;
        if (checkWin()) {
            setTimeout(() => {
                alert(`Player ${currentPlayer} wins!`);
                updateScore();
                resetGameBoard();
            }, 100);
        } else if (gameBoard.every(square => square !== "")) {
            setTimeout(() => {
                alert("It's a draw!");
                resetGameBoard();
            }, 100);
        } else {
            switchPlayer();
        }
    }
}

function checkWin() {
    const winConditions = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
    return winConditions.some(condition => 
        condition.every(index => gameBoard[index] === currentPlayer)
    );
}

function switchPlayer() {
    currentPlayer = currentPlayer === "X" ? "O" : "X";
    document.getElementById("current-player").textContent = `Current Player: ${currentPlayer}`;
}

function updateScore() {
    if (currentPlayer === "X") {
        scoreX++;
        document.getElementById("x-score").textContent = scoreX;
    } else {
        scoreO++;
        document.getElementById("o-score").textContent = scoreO;
    }
}

function resetGameBoard() {
    gameBoard = ["", "", "", "", "", "", "", "", ""];
    document.querySelectorAll(".square").forEach(square => {
        square.classList.remove("x", "o");
        square.textContent = "";
    });
    currentPlayer = "X";
    document.getElementById("current-player").textContent = `Current Player: ${currentPlayer}`;
}
