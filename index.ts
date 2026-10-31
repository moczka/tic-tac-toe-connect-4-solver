import TicTacToe from "./tic_tac_toe.ts"
const myTac = new TicTacToe();
const sampleBoard = [
    'X', ' ', 'X', 'X',
    'X', ' ', 'O', 'O',
    'X', ' ', 'O', 'O',
    'X', ' ', 'O', 'O',
];
console.log(`Vertical winner: ${myTac.checkWinner(sampleBoard)}`);