import Piece from "./Piece";

export default class Position {
    private x!: number;
    private y!: number;
    heldPiece!: Piece | null;
    isHighlighted = false;

    constructor(x: number, y: number, heldPiece: Piece | null) {
        this.x = x;
        this.y = y;
        this.heldPiece = heldPiece;
    }

    getCoords(): [number, number] {
        return [this.x, this.y]
    }

    getPosition(): string {
        return Position.coordsToPosition([this.x, this.y]);
    }

    static coordsToPosition(coords: [number, number]): string {
        return String.fromCharCode(97 + coords[0]) + (coords[1] + 1).toString()
    }

    static positionToCoords(position: string): [number, number] {
        return [position.charCodeAt(0) - 97, parseInt(position[1]) - 1]
    }

}