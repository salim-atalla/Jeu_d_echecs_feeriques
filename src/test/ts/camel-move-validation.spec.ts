import { Expect, Test, Setup} from "alsatian";
import { Chessboard, createEmptyChessboard, putPiece } from '../../main/ts/chessboard';
import { whiteCamel, whitePawn, blackPawn, Piece } from '../../main/ts/piece';
import { position, Position, equals } from '../../main/ts/position';
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

export class TestCamelMoves {

    @Setup
    beforeEach() {
        // TODO:
        // Initialize an empty chessboard
        chessboard = createEmptyChessboard();
        // Place a white Camel on E4
        putPiece(chessboard, positionE4, whiteCamel);
    }

    @Test("A Camel can move three squares horizontally and one square vertically")
    testCanMoveThreeHorizontalAndOneVertical() {
        // TODO:
        // Check the following moves are possible:

        // - moveE4_H3
        Expect(isPossible.camelMove(chessboard, move(positionE4, positionH3))).toBeTruthy(); 
        // - moveE4_H5
        Expect(isPossible.camelMove(chessboard, move(positionE4, positionH5))).toBeTruthy();
        // - moveE4_B3
        Expect(isPossible.camelMove(chessboard, move(positionE4, positionB3))).toBeTruthy();
        // - moveE4_B5
        Expect(isPossible.camelMove(chessboard, move(positionE4, positionB5))).toBeTruthy();
    }

    @Test("A Camel can move three squares vertically and one square horizontally")
    testCanMoveThreeVerticalAndOneHorizontal() {
        // TODO:
        // Check the following moves are possible:

        // - moveE4_F1
        Expect(isPossible.camelMove(chessboard, move(positionE4, positionF1))).toBeTruthy();
        // - moveE4_F7
        Expect(isPossible.camelMove(chessboard, move(positionE4, positionF7))).toBeTruthy();
        // - moveE4_D1
        Expect(isPossible.camelMove(chessboard, move(positionE4, positionD1))).toBeTruthy();
        // - moveE4_D7
        Expect(isPossible.camelMove(chessboard, move(positionE4, positionD7))).toBeTruthy();
    }

    @Test("A Camel can leap other pieces")
    testCanLeapOtherPieces() {
        // TODO:
        putPiece(chessboard, positionE3, blackPawn);
        Expect(isPossible.camelMove(chessboard, move(positionE4, positionD1))).toBeTruthy(); 
    }

    @Test("A Camel cannot move diagonally")
    testCannotMoveDiagonally() {
        // TODO:
        Expect(isPossible.camelMove(chessboard, move(positionE4, positionA8))).not.toBeTruthy();
        Expect(isPossible.camelMove(chessboard, move(positionE4, positionB1))).not.toBeTruthy();
        Expect(isPossible.camelMove(chessboard, move(positionE4, positionH7))).not.toBeTruthy();
        Expect(isPossible.camelMove(chessboard, move(positionE4, positionH1))).not.toBeTruthy();
    }

    @Test("A Camel cannot move horizontally")
    testCannotMoveHorizontally() {
        // TODO:
        Expect(isPossible.camelMove(chessboard, move(positionE4, positionA4))).not.toBeTruthy();
        Expect(isPossible.camelMove(chessboard, move(positionE4, positionH4))).not.toBeTruthy();
    }

    @Test("A Camel cannot move vertically")
    testCannotMoveVertically() {
        // TODO:
        Expect(isPossible.camelMove(chessboard, move(positionE4, positionE1))).not.toBeTruthy();
        Expect(isPossible.camelMove(chessboard, move(positionE4, positionE8))).not.toBeTruthy();
    }

    @Test("A Camel can capture a piece from another color")
    testCanCaptureAnotherColor() {
        // TODO:
        putPiece(chessboard, positionD6, blackPawn);
        Expect(isPossible.camelMove(chessboard, move(positionE4, positionD7))).toBeTruthy(); 
    }

    @Test("A Camel cannot capture a piece from the same color")
    testCannotCaptureSameColor() {
        // TODO:
        putPiece(chessboard, positionD6, whitePawn);
        Expect(isPossible.camelMove(chessboard, move(positionE4, positionD6))).not.toBeTruthy();
    }
}
