type Board = string[];

class TicTacToe {
    
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