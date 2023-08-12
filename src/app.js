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

createGameBoard();
