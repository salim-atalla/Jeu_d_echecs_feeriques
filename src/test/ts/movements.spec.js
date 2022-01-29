"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var alsatian_1 = require("alsatian");
var movements_1 = require("../../main/ts/movements");
var position_1 = require("../../main/ts/position");
var ParseMoveStringTest = /** @class */ (function () {
    function ParseMoveStringTest() {
    }
    ParseMoveStringTest.prototype.testParseA2_A4 = function () {
        var move = movements_1.parseMoveString("A2-A4");
        var expectedFrom = { file: 0, rank: 1 };
        var expectedTo = { file: 0, rank: 3 };
        alsatian_1.Expect(move.isValid).toBeTruthy();
        alsatian_1.Expect(position_1.equals(expectedFrom, move.from)).toBeTruthy();
        alsatian_1.Expect(position_1.equals(expectedTo, move.to)).toBeTruthy();
    };
    ParseMoveStringTest.prototype.testParseB8_B3 = function () {
        var move = movements_1.parseMoveString("B8-B3");
        var expectedFrom = { file: 1, rank: 7 };
        var expectedTo = { file: 1, rank: 2 };
        alsatian_1.Expect(move.isValid).toBeTruthy();
        alsatian_1.Expect(position_1.equals(expectedFrom, move.from)).toBeTruthy();
        alsatian_1.Expect(position_1.equals(expectedTo, move.to)).toBeTruthy();
    };
    ParseMoveStringTest.prototype.testParseH8_H3 = function () {
        var move = movements_1.parseMoveString("H8-H3");
        var expectedFrom = { file: 7, rank: 7 };
        var expectedTo = { file: 7, rank: 2 };
        alsatian_1.Expect(move.isValid).toBeTruthy();
        alsatian_1.Expect(position_1.equals(expectedFrom, move.from)).toBeTruthy();
        alsatian_1.Expect(position_1.equals(expectedTo, move.to)).toBeTruthy();
    };
    ParseMoveStringTest.prototype.testParseLowerCase = function () {
        var lowercaseMove = movements_1.parseMoveString("a1-h8");
        var uppercaseMove = movements_1.parseMoveString("A1-H8");
        alsatian_1.Expect(lowercaseMove.isValid).toBeTruthy();
        alsatian_1.Expect(uppercaseMove.isValid).toBeTruthy();
        alsatian_1.Expect(position_1.equals(lowercaseMove.from, uppercaseMove.from)).toBeTruthy();
        alsatian_1.Expect(position_1.equals(lowercaseMove.to, uppercaseMove.to)).toBeTruthy();
    };
    __decorate([
        alsatian_1.Test("A2-A4")
    ], ParseMoveStringTest.prototype, "testParseA2_A4");
    __decorate([
        alsatian_1.Test("B8-B3")
    ], ParseMoveStringTest.prototype, "testParseB8_B3");
    __decorate([
        alsatian_1.Test("H8-H3")
    ], ParseMoveStringTest.prototype, "testParseH8_H3");
    __decorate([
        alsatian_1.Test("a1-h8 == A1-H8")
    ], ParseMoveStringTest.prototype, "testParseLowerCase");
    return ParseMoveStringTest;
}());
exports.ParseMoveStringTest = ParseMoveStringTest;
