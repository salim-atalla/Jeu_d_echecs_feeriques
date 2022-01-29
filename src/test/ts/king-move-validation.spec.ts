import { Expect, Test, Setup} from "alsatian";
import { Chessboard, createEmptyChessboard, putPiece } from '../../main/ts/chessboard';
import { blackKing, blackPawn, whitePawn, blackQueen, whiteQueen } from '../../main/ts/piece';
import { position, Position } from '../../main/ts/position';
import { parseMoveString, Move, move } from '../../main/ts/movements';
import * as isPossible from '../../main/ts/move-validation';

let chessboard : Chessboard;

const positionA4 : Position = position(0, 3) // A4
const positionA5 : Position = position(0, 4) // A5
const positionA6 : Position = position(0, 5) // A6
const positionA7 : Position = position(0, 6) // A7
const positionA8 : Position = position(0, 7) // A8

const positionB1 : Position = position(1, 0) // B1
const positionB2 : Position = position(1, 1) // B2
const positionB3 : Position = position(1, 2) // B3
const positionB5 : Position = position(1, 4) // B5
const positionB6 : Position = position(1, 5) // B6

const positionC2 : Position = position(2, 1) // C2
const positionC3 : Position = position(2, 2) // C3
const positionC4 : Position = position(2, 3) // C4
const positionC5 : Position = position(2, 4) // C5
const positionC6 : Position = position(2, 5) // C6
const positionC7 : Position = position(2, 6) // C7

const positionD1 : Position = position(3, 0) // D1
const positionD2 : Position = position(3, 1) // D2
const positionD3 : Position = position(3, 2) // D3
const positionD4 : Position = position(3, 3) // D4
const positionD5 : Position = position(3, 4) // D5
const positionD6 : Position = position(3, 5) // D6
const positionD7 : Position = position(3, 6) // D7


const positionE1 : Position = position(4, 0) // E1
const positionE2 : Position = position(4, 1) // E2 
const positionE3 : Position = position(4, 2) // E3
const positionE4 : Position = position(4, 3) // E4
const positionE5 : Position = position(4, 4) // E5 
const positionE6 : Position = position(4, 5) // E6 
const positionE8 : Position = position(4, 7) // E8

const positionF1 : Position = position(5, 0) // F1
const positionF2 : Position = position(5, 1) // F2
const positionF3 : Position = position(5, 2) // F3 
const positionF4 : Position = position(5, 3) // F4 
const positionF5 : Position = position(5, 4) // F5
const positionF6 : Position = position(5, 5) // F6
const positionF7 : Position = position(5, 6) // F7

const positionG2 : Position = position(6, 1) // G2
const positionG3 : Position = position(6, 2) // G3
const positionG4 : Position = position(6, 3) // G4
const positionG5 : Position = position(6, 4) // G5
const positionG6 : Position = position(6, 5) // G6

const positionH1 : Position = position(7, 0) // H1
const positionH3 : Position = position(7, 2) // H3
const positionH4 : Position = position(7, 3) // H4
const positionH5 : Position = position(7, 4) // H5
const positionH7 : Position = position(7, 6) // H7

export class TestKingMoves {

    @Setup
    beforeEach() {
        // TODO:
        // Initialize an empty chessboard
        chessboard = createEmptyChessboard();
        // Place a black King on E4
        putPiece(chessboard, positionE4, blackKing);
    }

    @Test("A King can move 1 square in all directions")
    testCanMoveOneSquare() {
        // TODO:
        // Check it can move to squares D3, D4, D5, E3, E5, F3, F4, and F5
        Expect(isPossible.kingMove(chessboard, move(positionE4, positionD3))).toBeTruthy();
        Expect(isPossible.kingMove(chessboard, move(positionE4, positionD4))).toBeTruthy();
        Expect(isPossible.kingMove(chessboard, move(positionE4, positionD5))).toBeTruthy();
        Expect(isPossible.kingMove(chessboard, move(positionE4, positionE3))).toBeTruthy();
        Expect(isPossible.kingMove(chessboard, move(positionE4, positionE5))).toBeTruthy();
        Expect(isPossible.kingMove(chessboard, move(positionE4, positionF3))).toBeTruthy();
        Expect(isPossible.kingMove(chessboard, move(positionE4, positionF4))).toBeTruthy();
        Expect(isPossible.kingMove(chessboard, move(positionE4, positionF5))).toBeTruthy();
    }

    @Test("A King cannot move more than 1 square")
    testCannotMoveMoreThanOneSquare() {
        // TODO:
        // Check it cannot move to squares C2, C3, C4, C6, E2, E6, G2, G4, and G6
        Expect(isPossible.kingMove(chessboard, move(positionE4, positionC2))).not.toBeTruthy();
        Expect(isPossible.kingMove(chessboard, move(positionE4, positionC3))).not.toBeTruthy();
        Expect(isPossible.kingMove(chessboard, move(positionE4, positionC4))).not.toBeTruthy();
        Expect(isPossible.kingMove(chessboard, move(positionE4, positionC6))).not.toBeTruthy();
        Expect(isPossible.kingMove(chessboard, move(positionE4, positionE2))).not.toBeTruthy();
        Expect(isPossible.kingMove(chessboard, move(positionE4, positionE6))).not.toBeTruthy();
        Expect(isPossible.kingMove(chessboard, move(positionE4, positionG2))).not.toBeTruthy();
        Expect(isPossible.kingMove(chessboard, move(positionE4, positionG4))).not.toBeTruthy();
        Expect(isPossible.kingMove(chessboard, move(positionE4, positionG6))).not.toBeTruthy();
 
    }

    @Test("A King cannot capure pieces from the same color")
    testCannotCaptureSameColor() {
        // TODO:
        // Place a black Pawn on E5
        putPiece(chessboard, positionE5, blackPawn);
        // Check the King cannot move to E5.
        Expect(isPossible.kingMove(chessboard, move(positionE4, positionE5))).not.toBeTruthy(); 
    }

    @Test("A King can capure pieces from a different color")
    testCanCaptureSameColor() {
        // TODO:
        // Place a white Pawn on E5
        putPiece(chessboard, positionE5, whitePawn);
        // Check the King can move to E5.
        Expect(isPossible.kingMove(chessboard, move(positionE4, positionE5))).toBeTruthy(); 
    }
}