import TicTacToe from "../tic_tac_toe.ts";
import {strict as assert} from "node:assert";

// Used to test the edge cases
const EMPTY_BOARD = [
    ' ', ' ', ' ', ' ',
    ' ', ' ', ' ', ' ',
    ' ', ' ', ' ', ' ',
    ' ', ' ', ' ', ' ',
];
const STALE_BOARD = [
    'X','X','O','O',
    'O','O','X','X',
    'X','X','O','O',
    'O','O','X','X'
];

describe("Checks for any winning players on the board.", () => {
    const activeGame = new TicTacToe();
    it("should not find any completed columns in a stalemate endgame.", () => {
        assert.strictEqual(activeGame.checkWinner(STALE_BOARD), '')
    });
    it("should find player X winning column 1 (indices 0, 4, 8, 12).", () => {
        const board = [
            'X','O',' ',' ',
            'X','O',' ',' ',
            'X','O',' ',' ',
            'X',' ',' ',' '
        ];
        assert.strictEqual(activeGame.checkWinner(board), 'X');
    });
    it("should find player X winning column 2 (indices 1, 5, 9, 13).", () => {
        const board = [
            'O','X',' ',' ',
            'O','X',' ',' ',
            'O','X',' ',' ',
            ' ','X',' ',' '
        ];
        assert.strictEqual(activeGame.checkWinner(board), 'X');
    });
    it("should find player X winning column 3 (indices 2, 6, 10, 14).", () => {
        const board = [
            ' ',' ','X','O',
            ' ',' ','X','O',
            ' ',' ','X','O',
            ' ',' ','X',' '
        ];
        assert.strictEqual(activeGame.checkWinner(board), 'X');
    });

    it("should find player X winning column 4 (indices 3, 7, 11, 15).", () => {
        const board = [
            ' ',' ','O','X',
            ' ',' ','O','X',
            ' ',' ','O','X',
            ' ',' ',' ','X'
        ];
        assert.strictEqual(activeGame.checkWinner(board), 'X');
    });
    it("should find player O winning column 1 (indices 0, 4, 8, 12).", () => {
        const board = [
            'O','X','X',' ',
            'O','X',' ',' ',
            'O','X',' ',' ',
            'O',' ',' ',' '
        ];
        assert.strictEqual(activeGame.checkWinner(board), 'O');
    });

    it("should find player O winning column 2 (indices 1, 5, 9, 13).", () => {
        const board = [
            'X','O','X',' ',
            'X','O',' ',' ',
            'X','O',' ',' ',
            ' ','O',' ',' '
        ];
        assert.strictEqual(activeGame.checkWinner(board), 'O');
    });
    it("should find player O winning column 3 (indices 2, 6, 10, 14).", () => {
        const board = [
            ' ','X','O','X',
            ' ',' ','O','X',
            ' ',' ','O','X',
            ' ',' ','O',' '
        ];
        assert.strictEqual(activeGame.checkWinner(board), 'O');
    });
    it("should find player O winning column 4 (indices 3, 7, 11, 15).", () => {
        const board = [
            'X',' ','X','O',
            ' ',' ','X','O',
            ' ',' ','X','O',
            ' ',' ',' ','O'
        ];
        assert.strictEqual(activeGame.checkWinner(board), 'O');
    });
});
