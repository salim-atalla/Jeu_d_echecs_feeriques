"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var alsatian_1 = require("alsatian");
var isPossible = require("../../main/ts/move-validation");
var pieces = require("../../main/ts/piece");
var chessboard_1 = require("../../main/ts/chessboard");
var position_1 = require("../../main/ts/position");
var movements_1 = require("../../main/ts/movements");
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
var positionE4 = position_1.position(4, 3); // E4
var positionE8 = position_1.position(4, 7); // E8
var positionF1 = position_1.position(5, 0); // F1
var positionF2 = position_1.position(5, 1); // F2
var positionF6 = position_1.position(5, 5); // F6
var positionF7 = position_1.position(5, 6); // F7
var positionG3 = position_1.position(6, 2); // G3
var positionG5 = position_1.position(6, 4); // G5
var positionH1 = position_1.position(7, 0); // H1
var positionH3 = position_1.position(7, 2); // H3
var positionH4 = position_1.position(7, 3); // H4
var positionH5 = position_1.position(7, 4); // H5
var positionH7 = position_1.position(7, 6); // H7
// Horizontal moves
var moveE4_H4 = movements_1.move(positionE4, positionH4);
var moveE4_A4 = movements_1.move(positionE4, positionA4);
// Vertical moves
var moveE4_E1 = movements_1.move(positionE4, positionE1);
var moveE4_E8 = movements_1.move(positionE4, positionE8);
// Diagonal moves
var moveE4_A8 = movements_1.move(positionE4, positionA8);
var moveE4_B1 = movements_1.move(positionE4, positionB1);
var moveE4_H7 = movements_1.move(positionE4, positionH7);
var moveE4_H1 = movements_1.move(positionE4, positionH1);
// Camel moves
var moveE4_F7 = movements_1.move(positionE4, positionF7);
var moveE4_H5 = movements_1.move(positionE4, positionH5);
var moveE4_F1 = movements_1.move(positionE4, positionF1);
var moveE4_H3 = movements_1.move(positionE4, positionH3);
var moveE4_D1 = movements_1.move(positionE4, positionD1);
var moveE4_B3 = movements_1.move(positionE4, positionB3);
var moveE4_B5 = movements_1.move(positionE4, positionB5);
var moveE4_D7 = movements_1.move(positionE4, positionD7);
// Impossible moves
var moveE4_C7 = movements_1.move(positionE4, positionC7);
var moveE4_B2 = movements_1.move(positionE4, positionB2);
var TestBlackPawnMoves = /** @class */ (function () {
    function TestBlackPawnMoves() {
    }
    TestBlackPawnMoves.prototype.beforeEach = function () {
        chessboard = chessboard_1.createEmptyChessboard();
    };
    TestBlackPawnMoves.prototype.testPawnCanMoveForward = function () {
        chessboard_1.putPiece(chessboard, positionA7, pieces.blackPawn);
        var singleForward = { from: positionA7, to: positionA6, isValid: true };
        alsatian_1.Expect(isPossible.blackPawnMove(chessboard, singleForward)).toBeTruthy();
    };
    TestBlackPawnMoves.prototype.testPawnCannotMoveBackward = function () {
        chessboard_1.putPiece(chessboard, positionA7, pieces.blackPawn);
        var singleForward = { from: positionA7, to: positionA8, isValid: true };
        alsatian_1.Expect(isPossible.blackPawnMove(chessboard, singleForward)).not.toBeTruthy();
    };
    TestBlackPawnMoves.prototype.testPawnInitialMove = function () {
        chessboard_1.putPiece(chessboard, positionA7, pieces.blackPawn);
        var doubleForward = { from: positionA7, to: positionA5, isValid: true };
        alsatian_1.Expect(isPossible.blackPawnMove(chessboard, doubleForward)).toBeTruthy();
    };
    TestBlackPawnMoves.prototype.testCannotMoveTwoSquaresIfAlreadyMoved = function () {
        chessboard_1.putPiece(chessboard, positionC6, pieces.blackPawn);
        var doubleForward = { from: positionC6, to: positionC4, isValid: true };
        alsatian_1.Expect(isPossible.blackPawnMove(chessboard, doubleForward)).not.toBeTruthy();
    };
    TestBlackPawnMoves.prototype.testCannotMoveThreeSquares = function () {
        chessboard_1.putPiece(chessboard, positionC6, pieces.blackPawn);
        var tripleForward = { from: positionA7, to: positionA4, isValid: true };
        alsatian_1.Expect(isPossible.blackPawnMove(chessboard, tripleForward)).not.toBeTruthy();
    };
    TestBlackPawnMoves.prototype.testPawnCannotMoveForwardToFullSquare = function () {
        chessboard_1.putPiece(chessboard, positionA6, pieces.whitePawn);
        chessboard_1.putPiece(chessboard, positionA7, pieces.blackPawn);
        var singleForward = { from: positionA7, to: positionA6, isValid: true };
        alsatian_1.Expect(isPossible.blackPawnMove(chessboard, singleForward)).not.toBeTruthy();
    };
    TestBlackPawnMoves.prototype.testPawnCannotCaptureEmptySquare = function () {
        chessboard_1.putPiece(chessboard, positionA7, pieces.blackPawn);
        var diagonalCapture = { from: positionA7, to: positionB6, isValid: true };
        alsatian_1.Expect(isPossible.blackPawnMove(chessboard, diagonalCapture)).not.toBeTruthy();
    };
    TestBlackPawnMoves.prototype.testPawnCannotCaptureSameColor = function () {
        chessboard_1.putPiece(chessboard, positionA7, pieces.blackPawn);
        chessboard_1.putPiece(chessboard, positionB6, pieces.blackKing);
        var diagonalCapture = { from: positionA7, to: positionB6, isValid: true };
        alsatian_1.Expect(isPossible.blackPawnMove(chessboard, diagonalCapture)).not.toBeTruthy();
    };
    TestBlackPawnMoves.prototype.testPawnCanCaptureDifferentColorPieces = function () {
        chessboard_1.putPiece(chessboard, positionA7, pieces.blackPawn);
        chessboard_1.putPiece(chessboard, positionB6, pieces.whiteQueen);
        var diagonalCapture = { from: positionA7, to: positionB6, isValid: true };
        alsatian_1.Expect(isPossible.blackPawnMove(chessboard, diagonalCapture)).toBeTruthy();
    };
    __decorate([
        alsatian_1.Setup
    ], TestBlackPawnMoves.prototype, "beforeEach");
    __decorate([
        alsatian_1.Test("Pawns can move forward")
    ], TestBlackPawnMoves.prototype, "testPawnCanMoveForward");
    __decorate([
        alsatian_1.Test("Pawns cannot move backward")
    ], TestBlackPawnMoves.prototype, "testPawnCannotMoveBackward");
    __decorate([
        alsatian_1.Test("When in the initial position, paws can move 2 squares forward")
    ], TestBlackPawnMoves.prototype, "testPawnInitialMove");
    __decorate([
        alsatian_1.Test("When a paws has already moved, it cannot move 2 squares forward")
    ], TestBlackPawnMoves.prototype, "testCannotMoveTwoSquaresIfAlreadyMoved");
    __decorate([
        alsatian_1.Test("When in the initial position, pawns cannot move 3 squares forward")
    ], TestBlackPawnMoves.prototype, "testCannotMoveThreeSquares");
    __decorate([
        alsatian_1.Test("When in face of another piece, pawns cannot move foreward")
    ], TestBlackPawnMoves.prototype, "testPawnCannotMoveForwardToFullSquare");
    __decorate([
        alsatian_1.Test("Pawns cannot capture an empty square ")
    ], TestBlackPawnMoves.prototype, "testPawnCannotCaptureEmptySquare");
    __decorate([
        alsatian_1.Test("Pawns cannot capture pieces of the same color")
    ], TestBlackPawnMoves.prototype, "testPawnCannotCaptureSameColor");
    __decorate([
        alsatian_1.Test("Pawns can capture pieces of a different color")
    ], TestBlackPawnMoves.prototype, "testPawnCanCaptureDifferentColorPieces");
    return TestBlackPawnMoves;
}());
exports.TestBlackPawnMoves = TestBlackPawnMoves;
