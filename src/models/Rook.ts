import Piece from "./Piece";
import Position from "./Position";

export default class Rook implements Piece {
    id: number;
    coords: [number, number];
    isWhite: boolean;
    pathToImage: string;

    constructor(coords: [number, number], id: number, isWhite: boolean) {
        this.id = id;
        this.coords = coords;
        this.isWhite = isWhite;
        this.pathToImage = './src/assets/rook_' + (isWhite ? 'w' : 'b') + '.png'
    }

    /**
     * 
     * @returns An array of chess position strings
     */
    getValidMoves(board: Position[][]): [number, number][] {
        let validMoves = [] as [number, number][];
        // up
        for (let y = this.coords[1] + 1; y < 8; y++) {
            let curPiece = board[this.coords[0]][y].heldPiece;
            if (curPiece === null) {
                validMoves.push([this.coords[0], y]);
            }
            else if (this.isWhite != curPiece.isWhite) {
                validMoves.push([this.coords[0], y]);
                break;
            }
            else break;
        }

        // down
        for (let y = this.coords[1] - 1; y >= 0; y--) {
            let curPiece = board[this.coords[0]][y].heldPiece;
            if (curPiece === null) {
                validMoves.push([this.coords[0], y]);
            }
            else if (this.isWhite != curPiece.isWhite) {
                validMoves.push([this.coords[0], y]);
                break;
            }
            else break;
        }

        // right
        for (let x = this.coords[1] + 1; x < 8; x++) {
            let curPiece = board[x][this.coords[1]].heldPiece;
            if (curPiece === null) {
                validMoves.push([x, this.coords[1]]);
            }
            else if (this.isWhite != curPiece.isWhite) {
                validMoves.push([x, this.coords[1]]);
                break;
            }
            else break;
        }

        // left
        for (let x = this.coords[1] - 1; x >= 0; x--) {
            let curPiece = board[x][this.coords[1]].heldPiece;
            if (curPiece === null) {
                validMoves.push([x, this.coords[1]]);
            }
            else if (this.isWhite != curPiece.isWhite) {
                validMoves.push([x, this.coords[1]]);
                break;
            }
            else break;
        }
        console.log(validMoves)
        return validMoves;
    }

}