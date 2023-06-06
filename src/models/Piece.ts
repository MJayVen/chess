import Position from "./Position";

export default interface Piece {
    coords: [number, number];
    id: number;
    isWhite: boolean;
    pathToImage: string;

    getValidMoves(board: Position[][]): [number, number][]
}