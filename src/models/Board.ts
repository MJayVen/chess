import Piece from './Piece.ts'
import Rook from './Rook.ts';

export type BoardPosition = Piece | null

export default class Board {
    private static instance: Board;
    private boardState: BoardPosition[][]

    private constructor() {
        // Initialize the state of the board
        this.boardState = [
            [null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null],
            [null, null, null, new Rook(1, 3, 5, true), null, null, null, null],
            [null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null],
        ];
    }

    static getInstance(): Board {
        if (!Board.instance) {
            Board.instance = new Board();
        }
        return Board.instance;
    }

    getBoardState(): BoardPosition[][] {
        return this.boardState;
    }

    updatePosition(newX: number, newY: number, newPiece: BoardPosition): void {
        this.boardState[newY][newX] = newPiece;
    }

    pieceAtPosition(x: number, y: number): BoardPosition {
        return this.boardState[y][x]
    }
}
