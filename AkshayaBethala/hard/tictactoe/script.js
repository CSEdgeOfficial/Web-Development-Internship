let currentPlayer = 'X';
let cells = document.querySelectorAll('.cell');
let gameOver = false;

function placeMarker(row, col) {
    if (!gameOver && !cells[row * 3 + col].textContent) {
        cells[row * 3 + col].textContent = currentPlayer;
        if (checkWin(row, col)) {
            alert(currentPlayer + ' wins!');
            gameOver = true;
        } else if (checkDraw()) {
            alert('It\'s a draw!');
            gameOver = true;
        } else {
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        }
    }
}

function checkWin(row, col) {
    return (checkRow(row) || checkCol(col) || checkDiagonals());
}

function checkRow(row) {
    return (cells[row * 3].textContent === currentPlayer &&
            cells[row * 3 + 1].textContent === currentPlayer &&
            cells[row * 3 + 2].textContent === currentPlayer);
}

function checkCol(col) {
    return (cells[col].textContent === currentPlayer &&
            cells[col + 3].textContent === currentPlayer &&
            cells[col + 6].textContent === currentPlayer);
}

function checkDiagonals() {
    return ((cells[0].textContent === currentPlayer &&
             cells[4].textContent === currentPlayer &&
             cells[8].textContent === currentPlayer) ||
            (cells[2].textContent === currentPlayer &&
             cells[4].textContent === currentPlayer &&
             cells[6].textContent === currentPlayer));
}

function checkDraw() {
    for (let cell of cells) {
        if (!cell.textContent) {
            return false;
        }
    }
    return true;
}

function resetGame() {
    for (let cell of cells) {
        cell.textContent = '';
    }
    currentPlayer = 'X';
    gameOver = false;
}
