"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var alsatian_1 = require("alsatian");
var chessboard_1 = require("../../main/ts/chessboard");
var piece_1 = require("../../main/ts/piece");
var position_1 = require("../../main/ts/position");
var movements_1 = require("../../main/ts/movements");
var isPossible = require("../../main/ts/move-validation");
var chessboard;
var positionA4 = position_1.position(0, 3); // A4
var positionA5 = position_1.position(0, 4); // A5
var positionA6 = position_1.position(0, 5); // A6
var positionA7 = position_1.position(0, 6); // A7
var positionA8 = position_1.position(0, 7); // A8
var positionB1 = position_1.position(1, 0); // B1
var positionB2 = position_1.position(1, 1); // B2
var positionB3 = position_1.position(1, 2); // B3
var positionB5 = position_1.position(1, 4); // B5
var positionB6 = position_1.position(1, 5); // B6
var positionC2 = position_1.position(2, 1); // C2
var positionC3 = position_1.position(2, 2); // C3
var positionC4 = position_1.position(2, 3); // C4
var positionC5 = position_1.position(2, 4); // C5
var positionC6 = position_1.position(2, 5); // C6
var positionC7 = position_1.position(2, 6); // C7
var positionD1 = position_1.position(3, 0); // D1
var positionD2 = position_1.position(3, 1); // D2
var positionD3 = position_1.position(3, 2); // D3
var positionD4 = position_1.position(3, 3); // D4
var positionD5 = position_1.position(3, 4); // D5
var positionD6 = position_1.position(3, 5); // D6
var positionD7 = position_1.position(3, 6); // D7
var positionE1 = position_1.position(4, 0); // E1
var positionE2 = position_1.position(4, 1); // E2 
var positionE3 = position_1.position(4, 2); // E3
var positionE4 = position_1.position(4, 3); // E4
var positionE5 = position_1.position(4, 4); // E5 
var positionE6 = position_1.position(4, 5); // E6 
var positionE8 = position_1.position(4, 7); // E8
var positionF1 = position_1.position(5, 0); // F1
var positionF2 = position_1.position(5, 1); // F2
var positionF3 = position_1.position(5, 2); // F3 
var positionF4 = position_1.position(5, 3); // F4 
var positionF5 = position_1.position(5, 4); // F5
var positionF6 = position_1.position(5, 5); // F6
var positionF7 = position_1.position(5, 6); // F7
var positionG2 = position_1.position(6, 1); // G2
var positionG3 = position_1.position(6, 2); // G3
var positionG4 = position_1.position(6, 3); // G4
var positionG5 = position_1.position(6, 4); // G5
var positionG6 = position_1.position(6, 5); // G6
var positionH1 = position_1.position(7, 0); // H1
var positionH3 = position_1.position(7, 2); // H3
var positionH4 = position_1.position(7, 3); // H4
var positionH5 = position_1.position(7, 4); // H5
var positionH7 = position_1.position(7, 6); // H7
var TestPrincessMoves = /** @class */ (function () {
    function TestPrincessMoves() {
    }
    TestPrincessMoves.prototype.beforeEach = function () {
        // TODO:
        // Initialize an empty chessboard
        chessboard = chessboard_1.createEmptyChessboard();
        // Place a black Princess on E4
        chessboard_1.putPiece(chessboard, positionE4, piece_1.blackPrincess);
    };
    TestPrincessMoves.prototype.testCanMoveDiagonally = function () {
        // TODO:
        // Check the following moves are possible: 
        // moveE4_A8, moveE4_B1, moveE4_H7, moveE4_H1
        alsatian_1.Expect(isPossible.princessMove(chessboard, movements_1.move(positionE4, positionA8))).toBeTruthy();
        alsatian_1.Expect(isPossible.princessMove(chessboard, movements_1.move(positionE4, positionB1))).toBeTruthy();
        alsatian_1.Expect(isPossible.princessMove(chessboard, movements_1.move(positionE4, positionH7))).toBeTruthy();
        alsatian_1.Expect(isPossible.princessMove(chessboard, movements_1.move(positionE4, positionH1))).toBeTruthy();
    };
    TestPrincessMoves.prototype.testCanMoveTwoHorizontalAndOneVertical = function () {
        // TODO
        alsatian_1.Expect(isPossible.princessMove(chessboard, movements_1.move(positionE4, positionG3))).toBeTruthy();
        alsatian_1.Expect(isPossible.princessMove(chessboard, movements_1.move(positionE4, positionG5))).toBeTruthy();
        alsatian_1.Expect(isPossible.princessMove(chessboard, movements_1.move(positionE4, positionC3))).toBeTruthy();
        alsatian_1.Expect(isPossible.princessMove(chessboard, movements_1.move(positionE4, positionC5))).toBeTruthy();
    };
    TestPrincessMoves.prototype.testCanMoveTwoVerticalAndOneHorizontal = function () {
        // TODO
        alsatian_1.Expect(isPossible.princessMove(chessboard, movements_1.move(positionE4, positionD6))).toBeTruthy();
        alsatian_1.Expect(isPossible.princessMove(chessboard, movements_1.move(positionE4, positionF6))).toBeTruthy();
        alsatian_1.Expect(isPossible.princessMove(chessboard, movements_1.move(positionE4, positionD2))).toBeTruthy();
        alsatian_1.Expect(isPossible.princessMove(chessboard, movements_1.move(positionE4, positionF2))).toBeTruthy();
    };
    TestPrincessMoves.prototype.testCannotMoveHorizontally = function () {
        // TODO:
        // Check the following moves are impossible: moveE4_H4, moveE4_A4  
        alsatian_1.Expect(isPossible.princessMove(chessboard, movements_1.move(positionE4, positionH4))).not.toBeTruthy();
        alsatian_1.Expect(isPossible.princessMove(chessboard, movements_1.move(positionE4, positionA4))).not.toBeTruthy();
    };
    TestPrincessMoves.prototype.testCannotMoveVertically = function () {
        // TODO:
        // Check the following moves are impossible: moveE4_E1, moveE4_E8 
        alsatian_1.Expect(isPossible.princessMove(chessboard, movements_1.move(positionE4, positionE1))).not.toBeTruthy();
        alsatian_1.Expect(isPossible.princessMove(chessboard, movements_1.move(positionE4, positionE8))).not.toBeTruthy();
    };
    TestPrincessMoves.prototype.testCanCaptureDifferentColor = function () {
        // TODO:
        // Place a white Pawn on A8
        chessboard_1.putPiece(chessboard, positionA8, piece_1.whitePawn);
        // Check the move moveE4_A8 is possible  
        alsatian_1.Expect(isPossible.princessMove(chessboard, movements_1.move(positionE4, positionA8))).toBeTruthy();
    };
    TestPrincessMoves.prototype.testCannotCaptureSameColor = function () {
        // TODO:
        // Place a black Pawn on A8
        chessboard_1.putPiece(chessboard, positionA8, piece_1.blackPawn);
        // Check the move moveE4_A8 is impossible 
        alsatian_1.Expect(isPossible.princessMove(chessboard, movements_1.move(positionE4, positionA8))).not.toBeTruthy();
    };
    TestPrincessMoves.prototype.testCannotLeapDiagonally = function () {
        // TODO:
        // Place a white Pawn on C6
        chessboard_1.putPiece(chessboard, positionC6, piece_1.whitePawn);
        // Check the move moveE4_A8 is impossible 
        alsatian_1.Expect(isPossible.princessMove(chessboard, movements_1.move(positionE4, positionA8))).not.toBeTruthy();
    };
    TestPrincessMoves.prototype.testCanLeapOtherPiecesWhenMovingInL = function () {
        // TODO:
        chessboard_1.putPiece(chessboard, positionE3, piece_1.blackPawn);
        alsatian_1.Expect(isPossible.camelMove(chessboard, movements_1.move(positionE4, positionD1))).toBeTruthy();
    };
    __decorate([
        alsatian_1.Setup
    ], TestPrincessMoves.prototype, "beforeEach");
    __decorate([
        alsatian_1.Test("A Princess can move diagonally")
    ], TestPrincessMoves.prototype, "testCanMoveDiagonally");
    __decorate([
        alsatian_1.Test("A Princess can move two squares horizontally and one square vertically")
    ], TestPrincessMoves.prototype, "testCanMoveTwoHorizontalAndOneVertical");
    __decorate([
        alsatian_1.Test("A Princess can move two squares vertically  and one square horizontally")
    ], TestPrincessMoves.prototype, "testCanMoveTwoVerticalAndOneHorizontal");
    __decorate([
        alsatian_1.Test("A Princess cannot move horizontally")
    ], TestPrincessMoves.prototype, "testCannotMoveHorizontally");
    __decorate([
        alsatian_1.Test("A Princess cannot move vertically")
    ], TestPrincessMoves.prototype, "testCannotMoveVertically");
    __decorate([
        alsatian_1.Test("A Princess can capture a piece from another color")
    ], TestPrincessMoves.prototype, "testCanCaptureDifferentColor");
    __decorate([
        alsatian_1.Test("A Princess cannot capture a piece from the same color")
    ], TestPrincessMoves.prototype, "testCannotCaptureSameColor");
    __decorate([
        alsatian_1.Test("A Princess cannot leap other pieces")
    ], TestPrincessMoves.prototype, "testCannotLeapDiagonally");
    __decorate([
        alsatian_1.Test("A Princess can leap other pieces when moving in L ")
    ], TestPrincessMoves.prototype, "testCanLeapOtherPiecesWhenMovingInL");
    return TestPrincessMoves;
}());
exports.TestPrincessMoves = TestPrincessMoves;
