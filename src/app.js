const gameBoard = document.querySelector(".game-board");

const guessBoard = [
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
];

function createCell(rowIndex, guessIndex) {
    const cell = document.createElement("div");
    cell.setAttribute("id", `row-${rowIndex}-cell-${guessIndex}`);
    cell.classList.add("cell");
    return cell;
}

function createRow(rowIndex) {
    const rowElement = document.createElement("div");
    rowElement.setAttribute("id", `row-${rowIndex}`);
    rowElement.classList.add("row");

    guessBoard[rowIndex].forEach((guess, guessIndex) => {
        const cell = createCell(rowIndex, guessIndex);
        rowElement.appendChild(cell);
    });

    return rowElement;
}

function createGameBoard() {
    guessBoard.forEach((row, rowIndex) => {
        const rowElement = createRow(rowIndex);
        gameBoard.appendChild(rowElement);
    });
}

let currentRow = 0;
let currentCell = 0;

function addLetter(letter) {
    // TODO: allow only normal letters
    if (
        currentCell >= guessBoard[0].length ||
        currentRow >= guessBoard.length
    ) {
        return;
    }
    const cell = document.getElementById(
        `row-${currentRow}-cell-${currentCell}`
    );
    cell.textContent = letter;
    guessBoard[currentRow][currentCell] = letter;
    currentCell++;
}

addEventListener("keypress", (event) => {
    if (event.code === "Enter") {
        if (currentCell !== guessBoard[0].length) return; // Return if row not filled
        currentRow++;
        currentCell = 0;
    } else {
        addLetter(event.key.toUpperCase());
    }
});

addEventListener("keydown", (event) => {
    if (event.code === "Backspace") {
        if (currentCell === 0) return;
        currentCell--;
        addLetter("");
        currentCell--;
    }
});

createGameBoard();
