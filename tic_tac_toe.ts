type Board = string[];
type GridPosition = {
    col: number,
    row: number
};
const CORNER_INDEXES = [0, 3, 12, 15];
// Define the number of columns and rows in the board.
const NUM_COL = 4;
const NUM_ROW = 4;

class TicTacToe {
    #gridPosToArrayPos(position: GridPosition): number {
        return (position.row * NUM_ROW) + position.col;
    }
    #arrayPosToGridPos(arrayIndex: number): GridPosition {
        return {
            col: arrayIndex % NUM_COL,
            row: Math.trunc(arrayIndex / NUM_ROW)
        };
    }
    #checkForVertical(board: Board, playerPos: number): boolean {
        // Determine player type: 'O', 'X' o Empty
        const playerType = board[playerPos];
        // Empty cell
        if (playerType === ' ')
            return false;
        // Retrieve player column position in logical grid.
        const {col}: GridPosition = this.#arrayPosToGridPos(playerPos);
        // Traverse entire column to check for completion.
        for (let i=0; i<NUM_ROW; i++) {

            const playerInCell = board[this.#gridPosToArrayPos({col, row: i})];
            // Player is not winning in active column.
            if (playerInCell !== playerType) {
                return false;
            }
        }
        // Player wins, has completed the full column.
        return true;
    }
    #checkForHorizontal(board: Board, playerPos: number): boolean {
        // Determine player type: 'O', 'X' o Empty
        const playerType = board[playerPos];
        // Empty cell
        if (playerType === ' ')
            return false;
        // Retrieve player row position in logical grid.
        const {row}: GridPosition = this.#arrayPosToGridPos(playerPos);
        // Traverse entire column to check for completion.
        for (let i=0; i<NUM_COL; i++) {

            const playerInCell = board[this.#gridPosToArrayPos({col: i, row})];
            // Player is not winning in active row.
            if (playerInCell !== playerType) {
                return false;
            }
        }
        // Player wins, has completed the full row.
        return true;
    }
    #checkForDiagonal(board: Board, playerPos: number): boolean {
        // Determine player type: 'O', 'X' o Empty
        const playerType = board[playerPos];
        // Empty cell
        if (playerType === ' ') {
            return false;
        }
        let completeTopLeftDiagonal = true;
        // Check across starting from top-left most position.
        for (let i=0; i<NUM_COL; i++) {
            const playerInCell = board[this.#gridPosToArrayPos({col: i, row: i})];
            // Player is not winning in active diagonal.
            if (playerInCell !== playerType) {
                completeTopLeftDiagonal = false;
                break;
            }
        }
        let completeTopRightDiagonal = true;
        // Check across starting from top-right most position
        for (let i=NUM_COL-1; i>=0; i--) {
            const playerInCell = board[this.#gridPosToArrayPos({col: i, row: (NUM_ROW - 1) - i})];
            // Player is not winning in active diagonal.
            if (playerInCell !== playerType) {
                completeTopRightDiagonal = false;
                break;
            }
        }
        return (completeTopLeftDiagonal || completeTopRightDiagonal);
    }
    #checkForCorners(board: Board, playerPos: number): boolean {
        // Determine player type: 'O', 'X' o Empty
        const playerType = board[playerPos];
        // Empty cell
        if (playerType === ' ') {
            return false;
        }
        // Player type must match at all four corners
        return CORNER_INDEXES.every(index => {
            const playerAtCorner = board[index];
            return playerType === playerAtCorner;
        });
    }
    #checkForBox(board: Board, playerPos: number): boolean {
        return false;
    }
    checkWinner(board: Board): string {
        // Traverse entire board looking for winner.
        for (let i=0; i<(NUM_COL * NUM_ROW); i++) {
    
            const activePlayer = board[i];
            // Check for winning combinations for active player.
            if (this.#checkForVertical(board, i)) {
                return activePlayer;
            } else if (this.#checkForHorizontal(board, i)) {
                return activePlayer;
            } else if (this.#checkForDiagonal(board, i)) {
                return activePlayer;
            }
        }
        // No winner was found.
        return '';
    };
    anyMovesLeft(board: Board) { 
        return false;   
    }
    isGameOver(board: Board) {
        return false;
    }
}

export default TicTacToe;