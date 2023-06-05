import Board from './Board.ts'

export default abstract class Piece {
    id!: number;
    x!: number;
    y!: number;
    isWhite!: boolean;

    constructor(id: number, x: number, y: number, isWhite: boolean) {
        this.id = id
        this.x = x
        this.y = y
        this.isWhite = isWhite
    }

    move(newX: number, newY: number): void {
        if (!this.getValidMoves().indexOf([newX, newY]))
            throw new Error("That is not a valid MOVEEEEE");

        const board = Board.getInstance();
        // remove piece from current position
        board.updatePosition(this.x, this.y, null)
        board.updatePosition(newX, newY, this)
    }

    abstract getValidMoves(): [number, number][]

}