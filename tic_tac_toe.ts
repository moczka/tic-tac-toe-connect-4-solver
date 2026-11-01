type Board = string[];
type GridPosition = {
    col: number,
    row: number
};
const PLAYER_TYPES = ['X', 'O'];
const CORNER_INDEXES = [0, 3, 12, 15];
// Define the number of columns and rows in the board.
const NUM_COL = 4;
const NUM_ROW = 4;

class TicTacToe {
    #gridPosToArrayPos(position: GridPosition): number {
        return (position.row * NUM_ROW) + position.col;
    }
    #checkForVertical(board: Board, playerType: string): boolean {

        // Traverse all columns to check for any complete configuration
        for (let col = 0; col < NUM_COL; col++) {
            // Assume column is complete
            let hasCompleteColumn = true;
            for (let row = 0; row < NUM_ROW; row++) {
                const playerInCell = board[this.#gridPosToArrayPos({ col, row })];
                // Player is not winning in active column.
                if (playerInCell !== playerType) {
                    hasCompleteColumn = false;
                    // No sense continuing to check in current column.
                    break;
                }
            }
            // Player wins since active column is complete.
            if (hasCompleteColumn) {
                return true;
            }
        }
        return false;
    }
    #checkForHorizontal(board: Board, playerType: string): boolean {

        // Traverse all rows to check for any complete configuration
        for (let row = 0; row < NUM_ROW; row++) {
            // Assume row is complete
            let hasCompleteRow = true;
            for (let col = 0; col < NUM_COL; col++) {
                const playerInCell = board[this.#gridPosToArrayPos({ col, row })];
                // Player is not winning in active column.
                if (playerInCell !== playerType) {
                    hasCompleteRow = false;
                    // No sense continuing to check current row.
                    break;
                }
            }
            // Player wins since active row is complete.
            if (hasCompleteRow) {
                return true;
            }
        }
        return false;
    }
    #checkForDiagonal(board: Board, playerType: string): boolean {

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
    #checkForCorners(board: Board, playerType: string): boolean {
        // Player type must match at all four corners
        return CORNER_INDEXES.every(index => {
            const playerAtCorner = board[index];
            return playerType === playerAtCorner;
        });
    }
    #checkForBox(board: Board, playerType: string): boolean {

        // Traverse game board looking for 2x2 boxes
        for (let col = 0; col < (NUM_COL -1); col++) {

            for (let row = 0; row < (NUM_ROW-1); row++) {
                // Retrieve player types from adjacent cells on the board
                const nextCell = board[this.#gridPosToArrayPos({ col: col + 1, row})];
                const bottomCell = board[this.#gridPosToArrayPos({ col: col, row: row + 1})];
                const bottomRightCell = board[this.#gridPosToArrayPos({ col: col + 1, row: row + 1 })];

                // (2x2) Box found!
                if (playerType === nextCell && playerType === bottomCell && playerType === bottomRightCell) {
                    return true;
                }
            }
        }
        // No 2x2 box were found on the board.
        return false;
    }
    checkWinner(board: Board): string {
        
        const winner: string | undefined = PLAYER_TYPES.find(playerType => {
            if (this.#checkForVertical(board, playerType)) {
                return true;
            } else if (this.#checkForHorizontal(board, playerType)) {
                return true;
            } else if (this.#checkForDiagonal(board, playerType)) {
                return true;
            } else if (this.#checkForCorners(board, playerType)) {
                return true;
            } else if (this.#checkForBox(board, playerType)) {
                return true;
            }
            // Player doesn't meet any of the winning configurations.
            return false;
        });


        return winner || '';
    };
    anyMovesLeft(board: Board) {
        // Traverse entire board looking for empty cells
        // NOTE: As long as there is an empty cell, there is at least one move left.
        return board.some(playerInCell => {
            return playerInCell === ' ';
        });
    }
    isGameOver(board: Board) {
        // Considered to be over when there is a winner 
        // Or when there is no current winner and there are no moves left.
        const winner = this.checkWinner(board);

        return winner !== '' || !this.anyMovesLeft(board);

    }
}

export default TicTacToe;