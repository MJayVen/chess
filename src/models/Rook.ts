import Board from "./Board";
import Piece from "./Piece";


export default class Rook extends Piece {
    getValidMoves(): [number, number][] {
        const board = Board.getInstance();
        let validMoves = [] as [number, number][];

        // up
        for (let i = this.y; i < 8; i++) {
            let pieceAtPosition = board.pieceAtPosition(this.x, i)
            if (pieceAtPosition === null) {
                validMoves.push([this.x, i]);
            }
            else if (this.isWhite != pieceAtPosition.isWhite) {
                validMoves.push([this.x, i]);
                break;
            }
            else break;
        }

        // down
        for (let i = this.y; i >= 0; i--) {
            let pieceAtPosition = board.pieceAtPosition(this.x, i)
            if (pieceAtPosition === null) {
                validMoves.push([this.x, i]);
            }
            else if (this.isWhite != pieceAtPosition.isWhite) {
                validMoves.push([this.x, i]);
                break;
            }
            else break;
        }

        // right
        for (let i = this.x; i < 8; i++) {
            let pieceAtPosition = board.pieceAtPosition(i, this.y)
            if (pieceAtPosition === null) {
                validMoves.push([i, this.y]);
            }
            else if (this.isWhite != pieceAtPosition.isWhite) {
                validMoves.push([i, this.y]);
                break;
            }
            else break;
        }

        // left
        for (let i = this.x; i >= 0; i--) {
            let pieceAtPosition = board.pieceAtPosition(i, this.y)
            if (pieceAtPosition === null) {
                validMoves.push([i, this.y]);
            }
            else if (this.isWhite != pieceAtPosition.isWhite) {
                validMoves.push([i, this.y]);
                break;
            }
            else break;
        }

        return validMoves;
    }

}