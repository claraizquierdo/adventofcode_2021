import { BOARDS, NUMBERS } from "./data.js";

const initializeBoards = (boards) => {
    boards.forEach(board => {    
        board.forEach(row => {
            row.forEach((number,index) => { row[index] = {number, checked: false}})
        });
    });
}

const checkBoards = (boards, number) => {
    boards.forEach(board => {    
        board.forEach(row => {
            row.forEach(element => { 
                if (element.number === number) {
                    element.checked = true;
                }
            });
        });
    });
}

const isWinnerRow = (row) => {
    return row.every(element => element.checked == true);
}

const winnerRow = (board) => {
    let winner = null;

    for (let index = 0; index < board.length; index++) {
        if (isWinnerRow(board[index])) {
            winner = board[index];
            break;
        }
        
    }
    return winner;
}

const winnerColumn = (board) => {
    let winner = null;
    for (let index = 0; index < board[0].length; index++) {
        const reducer = (previous, current) => {
            previous.push(current[index]);
            return previous;
        }
        
        let column = board.reduce(reducer, []);

        if (isWinnerRow(column)) {
            winner = column;
            break;
        }
    }
    return winner;
}

const getWinner = (boards) => {
    let winner = null;
    let winnerRowOrColumn = null;

    for (let index = 0; index < boards.length; index++) {
        winnerRowOrColumn = winnerRow(boards[index]);

        if (winnerRowOrColumn) {
            winner = boards[index];
            break;
        } else {
            winnerRowOrColumn = winnerColumn(boards[index]);

            if (winnerRowOrColumn) {
                winner = boards[index];
                break;
            }
        }
    }

    return winner;
}

const sumRow = (row) => {
    return row.reduce((acc, current) => {
        if (!current.checked) {
            return acc + current.number;
        }
        return acc;
    }, 0);
}

const sumUnmarkedNumbers = (board) => {
    return board.reduce((acc, current) => acc + sumRow(current), 0);
}


let winnerBoard = null;
initializeBoards(BOARDS);
for (let index = 0; index < NUMBERS.length; index++) {
    checkBoards(BOARDS, NUMBERS[index]);
    winnerBoard = getWinner(BOARDS);

    if (winnerBoard) {
        document.getElementById("score").innerText = sumUnmarkedNumbers(winnerBoard)*NUMBERS[index];
        break;
    }
}
