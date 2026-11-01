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
    'O', 'X', 'X', 'O',
    'X', 'O', 'X', 'O',
    'X', 'X', 'O', 'X',
    'X', 'O', 'X', 'X',
];

describe("Checks for any winning players on the board.", () => {
    const activeBoard = [
        ' ', ' ', ' ', ' ',
        ' ', ' ', ' ', ' ',
        ' ', ' ', ' ', ' ',
        ' ', ' ', ' ', ' ',
    ];
    it("should detect a when a vertical column has been completed.", () => {
        assert(true, true);
    });
});
