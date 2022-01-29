"use strict";
/**
 * NE PAS MODIFIER CE FICHIER
 */
exports.__esModule = true;
var chessboard_1 = require("./chessboard");
var pieces = require("./piece");
var isPossible = require("./move-validation");
var VALID_MOVE_STRING = new RegExp('([a-h]|[A-H])([1-8])-([A-H]|[a-h])([1-8])');
/**
 * Creates a new Move from two Positions, representing
 * the Move's initial and final position.
 *
 * @param from The initial position
 * @param to The final position
 */
function move(from, to) {
    var move = { from: from, to: to, isValid: true };
    return move;
}
exports.move = move;
/**
 * Processes a move received from a client browser.
 * If the move is valid and possible, the move is performed and this function
 * returns true. Otherwise, it returns false
 *
 * @param chessboard The chessboard for the current game
 * @param moveString The string received from the client containing a move
 * @returns true, if the move is valid and possible
 */
function processMove(chessboard, moveString) {
    var move = parseMoveString(moveString);
    if (move.isValid && isMovePossible(chessboard, move)) {
        performMove(chessboard, move);
    }
    else {
        console.log("Invalid movement !");
        return false;
    }
    return true;
}
exports.processMove = processMove;
/**
 * Parses a string in the format "A1-F8" and returns a Move.
 * If the format is not valid, returns a Move with isValid === false.
 *
 * @param movementString A 5 characters string containing a move
 */
function parseMoveString(movementString) {
    var newMove;
    if (movementString.length != 5 || !movementString.match(VALID_MOVE_STRING)) {
        var invalidMove = { isValid: false };
        newMove = invalidMove;
    }
    else {
        var fromFile = movementString.charCodeAt(0);
        var fromRank = parseInt(movementString[1]);
        var toFile = movementString.charCodeAt(3);
        var toRank = parseInt(movementString[4]);
        // In Unicode, charCode('A') == 65, charCode('a') == 97
        // Remember that Arrays start from [0][0] == position 'A1'
        var from = { rank: fromRank - 1, file: fromFile > 90 ? fromFile - 97 : fromFile - 65 };
        var to = { rank: toRank - 1, file: toFile > 90 ? toFile - 97 : toFile - 65 };
        newMove = { isValid: true, from: from, to: to };
    }
    return newMove;
}
exports.parseMoveString = parseMoveString;
/**
 * Checks whether a move is possible in the given chessboard
 * @param chessboard
 * @param move
 */
function isMovePossible(chessboard, move) {
    var square = chessboard_1.squareAtPosition(chessboard, move.from);
    if (square.isEmpty) {
        return false;
    }
    var piece = square.piece;
    switch (piece) {
        case pieces.whitePawn: return isPossible.whitePawnMove(chessboard, move);
        case pieces.blackPawn: return isPossible.blackPawnMove(chessboard, move);
        case pieces.whiteKing: return isPossible.kingMove(chessboard, move);
        case pieces.whiteQueen: return isPossible.queenMove(chessboard, move);
        case pieces.whitePrincess: return isPossible.princessMove(chessboard, move);
        case pieces.whiteCamel: return isPossible.camelMove(chessboard, move);
        case pieces.whiteEmpress: return isPossible.empressMove(chessboard, move);
        case pieces.blackKing: return isPossible.kingMove(chessboard, move);
        case pieces.blackQueen: return isPossible.queenMove(chessboard, move);
        case pieces.blackPrincess: return isPossible.princessMove(chessboard, move);
        case pieces.blackCamel: return isPossible.camelMove(chessboard, move);
        case pieces.blackEmpress: return isPossible.empressMove(chessboard, move);
    }
    return false;
}
function performMove(board, move) {
    var source = chessboard_1.squareAtPosition(board, move.from);
    var destination = chessboard_1.squareAtPosition(board, move.to);
    destination.piece = source.piece;
    destination.isEmpty = false;
    source.isEmpty = true;
}
