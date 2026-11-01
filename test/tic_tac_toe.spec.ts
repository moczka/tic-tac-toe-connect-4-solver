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

describe("Checks for any winning players vertically on the board.", () => {
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
describe("Checks for any player winning by completing horizontally on the board.", () => {
    const activeGame = new TicTacToe();

    it("should find player X winning row 1 (indices 0, 1, 2, 3).", () => {
        const board = [
            'X','X','X','X',
            'O','O','O',' ',
            ' ',' ',' ',' ',
            ' ',' ',' ',' '
        ];
        assert.strictEqual(activeGame.checkWinner(board), 'X');
    });

    it("should find player X winning row 2 (indices 4, 5, 6, 7).", () => {
        const board = [
            'O','O','O',' ',
            'X','X','X','X',
            ' ',' ',' ',' ',
            ' ',' ',' ',' '
        ];
        assert.strictEqual(activeGame.checkWinner(board), 'X');
    });

    it("should find player X winning row 3 (indices 8, 9, 10, 11).", () => {
        const board = [
            ' ',' ',' ',' ',
            ' ',' ',' ',' ',
            'X','X','X','X',
            'O','O','O',' '
        ];
        assert.strictEqual(activeGame.checkWinner(board), 'X');
    });

    it("should find player X winning row 4 (indices 12, 13, 14, 15).", () => {
        const board = [
            ' ',' ',' ',' ',
            ' ',' ',' ',' ',
            'O','O','O',' ',
            'X','X','X','X'
        ];
        assert.strictEqual(activeGame.checkWinner(board), 'X');
    });

    // ---- O horizontal wins (X: 4 moves, O: 4 moves) ----

    it("should find player O winning row 1 (indices 0, 1, 2, 3).", () => {
        const board = [
            'O','O','O','O',
            'X','X','X',' ',
            'X',' ',' ',' ',
            ' ',' ',' ',' '
        ];
        assert.strictEqual(activeGame.checkWinner(board), 'O');
    });

    it("should find player O winning row 2 (indices 4, 5, 6, 7).", () => {
        const board = [
            'X','X','X',' ',
            'O','O','O','O',
            'X',' ',' ',' ',
            ' ',' ',' ',' '
        ];
        assert.strictEqual(activeGame.checkWinner(board), 'O');
    });

    it("should find player O winning row 3 (indices 8, 9, 10, 11).", () => {
        const board = [
            ' ',' ',' ',' ',
            'X',' ',' ',' ',
            'O','O','O','O',
            'X','X','X',' '
        ];
        assert.strictEqual(activeGame.checkWinner(board), 'O');
    });

    it("should find player O winning row 4 (indices 12, 13, 14, 15).", () => {
        const board = [
            ' ',' ',' ',' ',
            'X',' ',' ',' ',
            'X','X','X',' ',
            'O','O','O','O'
        ];
        assert.strictEqual(activeGame.checkWinner(board), 'O');
    });
});

describe("Checks for any winning players vertically on the board.", () => {
    const activeGame = new TicTacToe();
    // ---- X diagonal wins (X: 4 moves, O: 3 moves) ----
    it("should find player X winning the main diagonal (indices 0, 5, 10, 15).", () => {
        const board = [
            'X','O','O','O',
            ' ','X',' ',' ',
            ' ',' ','X',' ',
            ' ',' ',' ','X'
        ];
        assert.strictEqual(activeGame.checkWinner(board), 'X');
    });
    it("should find player X winning the anti-diagonal (indices 3, 6, 9, 12).", () => {
        const board = [
            'O','O','O','X',
            ' ',' ','X',' ',
            ' ','X',' ',' ',
            'X',' ',' ',' '
        ];
        assert.strictEqual(activeGame.checkWinner(board), 'X');
    });
    // ---- O diagonal wins (X: 4 moves, O: 4 moves) ----
    it("should find player O winning the main diagonal (indices 0, 5, 10, 15).", () => {
        const board = [
            'O','X','X','X',
            'X','O',' ',' ',
            ' ',' ','O',' ',
            ' ',' ',' ','O'
        ];
        assert.strictEqual(activeGame.checkWinner(board), 'O');
    });
    it("should find player O winning the anti-diagonal (indices 3, 6, 9, 12).", () => {
        const board = [
            'X','X','X','O',
            'X',' ','O',' ',
            ' ','O',' ',' ',
            'O',' ',' ',' '
        ];
        assert.strictEqual(activeGame.checkWinner(board), 'O');
    });
});
