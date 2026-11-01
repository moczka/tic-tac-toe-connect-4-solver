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
        assert.strictEqual(activeGame.checkWinner(STALE_BOARD), false)
    });
});
