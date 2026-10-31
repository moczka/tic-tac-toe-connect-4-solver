type Board = string[];
type GridPosition = {
    col: number,
    row: number
};
// Define the number of columns and rows in the board.
const NUM_COL = 4;
const NUM_ROW = 4;

class TicTacToe {
    #gridToArrayPos(position: GridPosition): number {
        return (position.row * NUM_ROW) + position.col;
    }
    #arrayPosToGrid(arrayIndex: number): GridPosition {
        return {
            col: arrayIndex % NUM_COL,
            row: Math.trunc(arrayIndex / NUM_ROW)
        };
    }
    #checkForVertical(board: Board, arrayPos: number): boolean {
        return false;
    }
    #checkForHorizontal(board: Board, arrayPos: number): boolean {
        return false;
    }
    #checkForDiagonal(board: Board, arrayPos: number): boolean {
        return false;
    }
    #checkForCorners(board: Board, arrayPos: number): boolean {
        return false;
    }
    #checkForBox(board: Board, arrayPos: number): boolean {
        return false;
    }
    checkWinner(board: Board): boolean {
        return false;
    };
    anyMovesLeft(board: Board) { 
        return false;   
    }
    isGameOver(board: Board) {
        return false;
    }
}

export default TicTacToe;