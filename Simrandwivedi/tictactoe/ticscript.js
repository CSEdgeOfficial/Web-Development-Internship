document.addEventListener('DOMContentLoaded', () => {
    const board = document.getElementById('board');
    const message = document.getElementById('message');
    const resetBtn = document.getElementById('resetBtn');
    const areas = Array.from(document.querySelectorAll('.area'));
    let currentPlayer = 'X';
    let gameActive = true;

    const winningCombinations = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
        [0, 4, 8], [2, 4, 6]             // diagonals
    ];

    const checkWin = () => {
        for (let combination of winningCombinations) {
            const [a, b, c] = combination;
            if (areas[a].innerText !== '' && areas[a].innerText === areas[b].innerText && areas[a].innerText === areas[c].innerText) {
                return areas[a].innerText;
            }
        }
        return null;
    };

    const handleareaClick = (e) => {
        const areaIndex = e.target.dataset.index;
        if (areas[areaIndex].innerText === '' && gameActive) {
            areas[areaIndex].innerText = currentPlayer;
            const winner = checkWin();
            if (winner) {
                message.innerText = `Player ${winner} wins!`;
                gameActive = false;
            } else if (!areas.some(area => area.innerText === '')) {
                message.innerText = "It's a draw!";
                gameActive = false;
            } else {
                currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
                message.innerText = `Player ${currentPlayer}'s turn`;
            }
        }
    };

    const resetGame = () => {
        areas.forEach(area => area.innerText = '');
        message.innerText = "Player X's turn";
        currentPlayer = 'X';
        gameActive = true;
    };

    areas.forEach(area => area.addEventListener('click', handleareaClick));
    resetBtn.addEventListener('click', resetGame);
});
