"use strict";
exports.__esModule = true;
var chessboard_1 = require("./chessboard");
var position_1 = require("./position");
/**
 * Checks whether a Black Pawn can perform a given move.
 * A pawn can move forward to the unoccupied square immediately in front of
 * it on the same file, or on its first move it can advance two squares along
 * the same file, provided both squares are unoccupied (black dots in the
 * diagram); or the pawn can capture an opponent's piece on a square diagonally
 * in front of it on an adjacent file, by moving to that square (black "x"s).
 *
 *
 * @param board The chessboard of the current game
 * @param move
 */
function blackPawnMove(board, move) {
    if (position_1.equals(move.to, position_1.bottom(move.from))) {
        //console.log("Single forward");
        return chessboard_1.isEmpty(board, move.to);
    }
    if (move.from.rank === 6 && position_1.equals(move.to, position_1.bottom(position_1.bottom(move.from)))) {
        //console.log("Double forward");
        return chessboard_1.isEmpty(board, position_1.bottom(move.from)) && chessboard_1.isEmpty(board, move.to);
    }
    if (position_1.equals(move.to, position_1.left(position_1.bottom(move.from))) || position_1.equals(move.to, position_1.right(position_1.bottom(move.from)))) {
        var destination = chessboard_1.squareAtPosition(board, move.to);
        return !(destination.isEmpty || !destination.piece.isWhite);
    }
    return false;
}
exports.blackPawnMove = blackPawnMove;
/**
 * A pawn can move forward to the unoccupied square immediately in front of
 * it on the same file, or on its first move it can advance two squares along
 * the same file, provided both squares are unoccupied (black dots in
 * the diagram); or the pawn can capture an opponent's piece on a square diagonally
 * in front of it on an adjacent file, by moving to that square (black "x"s).
 *
 *
 * @param board The chessboard of the current game
 * @param move
 */
function whitePawnMove(board, move) {
    if (position_1.equals(move.to, position_1.top(move.from))) {
        return chessboard_1.isEmpty(board, move.to);
    }
    if (move.from.rank === 1 && position_1.equals(move.to, position_1.top(position_1.top(move.from)))) {
        return chessboard_1.isEmpty(board, position_1.top(move.from)) && chessboard_1.isEmpty(board, move.to);
    }
    if (position_1.equals(move.to, position_1.left(position_1.top(move.from))) || position_1.equals(move.to, position_1.right(position_1.top(move.from)))) {
        var destination = chessboard_1.squareAtPosition(board, move.to);
        return !(destination.isEmpty || destination.piece.isWhite);
    }
    return false;
}
exports.whitePawnMove = whitePawnMove;
/**
 * Checks whether a King can perform a given move.
 * The king moves one square in any direction.
 *
 * @param board The chessboard of the current game
 * @param move
 */
function kingMove(board, move) {
    // #TODO: Implement this function
    if (position_1.equals(move.to, position_1.top(move.from)) ||
        position_1.equals(move.to, position_1.bottom(move.from)) ||
        position_1.equals(move.to, position_1.left(move.from)) ||
        position_1.equals(move.to, position_1.right(move.from)) ||
        position_1.equals(move.to, position_1.right(position_1.top(move.from))) ||
        position_1.equals(move.to, position_1.right(position_1.bottom(move.from))) ||
        position_1.equals(move.to, position_1.left(position_1.top(move.from))) ||
        position_1.equals(move.to, position_1.left(position_1.bottom(move.from)))) {
        var destination = chessboard_1.squareAtPosition(board, move.to);
        var source = chessboard_1.squareAtPosition(board, move.from);
        return source.piece.isWhite ?
            chessboard_1.isEmpty(board, move.to) || !(destination.piece.isWhite) :
            chessboard_1.isEmpty(board, move.to) || (destination.piece.isWhite);
    }
    return false;
}
exports.kingMove = kingMove;
/**
 * Checks whether a Queen can perform a given move.
 * The queen combines the power of a rook and bishop and can move any
 * number of squares along a rank, file, or diagonal, but cannot leap over other pieces.
 *
 * @param board The chessboard of the current game
 * @param move
 */
function queenMove(board, move) {
    // #TODO: Implement this function
    if (empressMove(board, move) || princessMove(board, move)) {
        if (position_1.equals(move.to, position_1.top(position_1.top(position_1.right(move.from)))) ||
            position_1.equals(move.to, position_1.bottom(position_1.bottom(position_1.right(move.from)))) ||
            position_1.equals(move.to, position_1.left(position_1.left(position_1.bottom(move.from)))) ||
            position_1.equals(move.to, position_1.right(position_1.right(position_1.bottom(move.from)))) ||
            position_1.equals(move.to, position_1.right(position_1.right(position_1.top(move.from)))) ||
            position_1.equals(move.to, position_1.bottom(position_1.bottom(position_1.left(move.from)))) ||
            position_1.equals(move.to, position_1.top(position_1.top(position_1.left(move.from)))) ||
            position_1.equals(move.to, position_1.left(position_1.left(position_1.top(move.from))))) {
            return false;
        }
        else {
            return true;
        }
    }
    return false;
}
exports.queenMove = queenMove;
/**
 * Checks whether a Empress can perform a given move.
 * An Empress can move any number of squares along a rank or file,
 * but cannot leap over other pieces.
 * An Empress can also move to any of the closest squares that are not on the
 * same rank, file, or diagonal. (Thus the move forms an "L"-shape:
 * two squares vertically and one square horizontally, or two
 * squares horizontally and one square vertically.)
 *
 * @param board The chessboard of the current game
 * @param move
 */
function empressMove(board, move) {
    // #TODO: Implement this function
    if (position_1.equals(move.to, position_1.top(position_1.top(position_1.right(move.from)))) ||
        position_1.equals(move.to, position_1.bottom(position_1.bottom(position_1.right(move.from)))) ||
        position_1.equals(move.to, position_1.left(position_1.left(position_1.bottom(move.from)))) ||
        position_1.equals(move.to, position_1.right(position_1.right(position_1.bottom(move.from)))) ||
        position_1.equals(move.to, position_1.right(position_1.right(position_1.top(move.from)))) ||
        position_1.equals(move.to, position_1.bottom(position_1.bottom(position_1.left(move.from)))) ||
        position_1.equals(move.to, position_1.top(position_1.top(position_1.left(move.from)))) ||
        position_1.equals(move.to, position_1.left(position_1.left(position_1.top(move.from))))) {
        var destination = chessboard_1.squareAtPosition(board, move.to);
        var source = chessboard_1.squareAtPosition(board, move.from);
        return source.piece.isWhite ?
            chessboard_1.isEmpty(board, move.to) || !(destination.piece.isWhite) :
            chessboard_1.isEmpty(board, move.to) || (destination.piece.isWhite);
    }
    else {
        var test = { rank: move.from.rank, file: move.from.file };
        var brk = false;
        while (test.rank > 0 && brk == false) { //vers le bas
            if (position_1.equals(move.to, position_1.bottom(test))) {
                var destination = chessboard_1.squareAtPosition(board, move.to);
                var source = chessboard_1.squareAtPosition(board, move.from);
                return source.piece.isWhite ?
                    chessboard_1.isEmpty(board, move.to) || !(destination.piece.isWhite) :
                    chessboard_1.isEmpty(board, move.to) || (destination.piece.isWhite);
            }
            else {
                if (chessboard_1.isEmpty(board, position_1.bottom(test))) {
                    test = position_1.bottom(test);
                }
                else {
                    brk = true;
                }
            }
        }
        brk = false;
        test = { file: move.from.file, rank: move.from.rank };
        while (test.rank < 7 && brk == false) { // vers le haut
            if (position_1.equals(move.to, position_1.top(test))) {
                var destination = chessboard_1.squareAtPosition(board, move.to);
                var source = chessboard_1.squareAtPosition(board, move.from);
                return source.piece.isWhite ?
                    chessboard_1.isEmpty(board, move.to) || !(destination.piece.isWhite) :
                    chessboard_1.isEmpty(board, move.to) || (destination.piece.isWhite);
            }
            else {
                if (chessboard_1.isEmpty(board, position_1.top(test))) {
                    test = position_1.top(test);
                }
                else {
                    brk = true;
                }
            }
        }
        brk = false;
        test = { file: move.from.file, rank: move.from.rank };
        while (test.file > 0 && brk == false) {
            if (position_1.equals(move.to, position_1.left(test))) {
                var destination = chessboard_1.squareAtPosition(board, move.to);
                var source = chessboard_1.squareAtPosition(board, move.from);
                return source.piece.isWhite ?
                    chessboard_1.isEmpty(board, move.to) || !(destination.piece.isWhite) :
                    chessboard_1.isEmpty(board, move.to) || (destination.piece.isWhite);
            }
            else {
                if (chessboard_1.isEmpty(board, position_1.left(test))) {
                    test = position_1.left(test);
                }
                else {
                    brk = true;
                }
            }
        }
        brk = false;
        test = { file: move.from.file, rank: move.from.rank };
        while (test.file < 7 && brk == false) {
            if (position_1.equals(move.to, position_1.right(test))) {
                var destination = chessboard_1.squareAtPosition(board, move.to);
                var source = chessboard_1.squareAtPosition(board, move.from);
                return source.piece.isWhite ?
                    chessboard_1.isEmpty(board, move.to) || !(destination.piece.isWhite) :
                    chessboard_1.isEmpty(board, move.to) || (destination.piece.isWhite);
            }
            else {
                if (chessboard_1.isEmpty(board, position_1.right(test))) {
                    test = position_1.right(test);
                }
                else {
                    brk = true;
                }
            }
        }
    }
    return false;
}
exports.empressMove = empressMove;
/**
 * Checks whether a Princess can perform a given move.
 * A princess can move any number of squares diagonally,
 * but cannot leap over other pieces.
 * A princess can also move to any of the closest squares that are not on the
 * same rank, file, or diagonal. (Thus the move forms an "L"-shape:
 * two squares vertically and one square horizontally, or two
 * squares horizontally and one square vertically.)
 *
 * @param board The chessboard of the current game
 * @param move
 */
function princessMove(board, move) {
    // #TODO: Implement this function
    if (position_1.equals(move.to, position_1.top(position_1.top(position_1.right(move.from)))) ||
        position_1.equals(move.to, position_1.bottom(position_1.bottom(position_1.right(move.from)))) ||
        position_1.equals(move.to, position_1.left(position_1.left(position_1.bottom(move.from)))) ||
        position_1.equals(move.to, position_1.right(position_1.right(position_1.bottom(move.from)))) ||
        position_1.equals(move.to, position_1.right(position_1.right(position_1.top(move.from)))) ||
        position_1.equals(move.to, position_1.bottom(position_1.bottom(position_1.left(move.from)))) ||
        position_1.equals(move.to, position_1.top(position_1.top(position_1.left(move.from)))) ||
        position_1.equals(move.to, position_1.left(position_1.left(position_1.top(move.from))))) {
        var destination = chessboard_1.squareAtPosition(board, move.to);
        var source = chessboard_1.squareAtPosition(board, move.from);
        return source.piece.isWhite ?
            chessboard_1.isEmpty(board, move.to) || !(destination.piece.isWhite) :
            chessboard_1.isEmpty(board, move.to) || (destination.piece.isWhite);
    }
    else {
        var test = { file: move.from.file, rank: move.from.rank };
        var brk = false;
        //vers haut droit
        while (test.file < 7 && test.rank < 7 && brk == false) {
            if (position_1.equals(move.to, position_1.top(position_1.right(test)))) {
                var destination = chessboard_1.squareAtPosition(board, move.to);
                var source = chessboard_1.squareAtPosition(board, move.from);
                return source.piece.isWhite ?
                    chessboard_1.isEmpty(board, move.to) || !(destination.piece.isWhite) :
                    chessboard_1.isEmpty(board, move.to) || (destination.piece.isWhite);
            }
            else {
                if (chessboard_1.isEmpty(board, position_1.top(position_1.right(test)))) {
                    test = position_1.top(position_1.right(test));
                }
                else {
                    brk = true;
                }
            }
        }
        brk = false;
        test = { file: move.from.file, rank: move.from.rank };
        //vers bas droit
        while (test.file < 7 && test.rank > 0 && brk == false) {
            if (position_1.equals(move.to, position_1.bottom(position_1.right(test)))) {
                var destination = chessboard_1.squareAtPosition(board, move.to);
                var source = chessboard_1.squareAtPosition(board, move.from);
                return source.piece.isWhite ?
                    chessboard_1.isEmpty(board, move.to) || !(destination.piece.isWhite) :
                    chessboard_1.isEmpty(board, move.to) || (destination.piece.isWhite);
            }
            else {
                if (chessboard_1.isEmpty(board, position_1.bottom(position_1.right(test)))) {
                    test = position_1.bottom(position_1.right(test));
                }
                else {
                    brk = true;
                }
            }
        }
        brk = false;
        test = { file: move.from.file, rank: move.from.rank };
        //vers haut gauche
        while (test.file > 0 && test.rank < 7 && brk == false) {
            if (position_1.equals(move.to, position_1.top(position_1.left(test)))) {
                var destination = chessboard_1.squareAtPosition(board, move.to);
                var source = chessboard_1.squareAtPosition(board, move.from);
                return source.piece.isWhite ?
                    chessboard_1.isEmpty(board, move.to) || !(destination.piece.isWhite) :
                    chessboard_1.isEmpty(board, move.to) || (destination.piece.isWhite);
            }
            else {
                if (chessboard_1.isEmpty(board, position_1.top(position_1.left(test)))) {
                    test = position_1.top(position_1.left(test));
                }
                else {
                    brk = true;
                }
            }
        }
        brk = false;
        test = { file: move.from.file, rank: move.from.rank };
        //vers bas gauche
        while (test.file > 0 && test.rank > 0 && brk == false) {
            if (position_1.equals(move.to, position_1.bottom(position_1.left(test)))) {
                var destination = chessboard_1.squareAtPosition(board, move.to);
                var source = chessboard_1.squareAtPosition(board, move.from);
                return source.piece.isWhite ?
                    chessboard_1.isEmpty(board, move.to) || !(destination.piece.isWhite) :
                    chessboard_1.isEmpty(board, move.to) || (destination.piece.isWhite);
            }
            else {
                if (chessboard_1.isEmpty(board, position_1.bottom(position_1.left(test)))) {
                    test = position_1.bottom(position_1.left(test));
                }
                else {
                    brk = true;
                }
            }
        }
    }
    return false;
}
exports.princessMove = princessMove;
/**
 * Checks whether a Camel can perform a given move.
 * The Camel move forms an "L"-shape:
 * three squares vertically and one square horizontally, or three
 * squares horizontally and one square vertically.)
 *
 * The camel can leap over other pieces.
 *
 * @param board The chessboard of the current game
 * @param move
 */
function camelMove(board, move) {
    // #TODO: Implement this function
    if (position_1.equals(move.to, position_1.top(position_1.top(position_1.top(position_1.right(move.from))))) ||
        position_1.equals(move.to, position_1.bottom(position_1.bottom(position_1.bottom(position_1.right(move.from))))) ||
        position_1.equals(move.to, position_1.left(position_1.left(position_1.left(position_1.bottom(move.from))))) ||
        position_1.equals(move.to, position_1.right(position_1.right(position_1.right(position_1.bottom(move.from))))) ||
        position_1.equals(move.to, position_1.right(position_1.right(position_1.right(position_1.top(move.from))))) ||
        position_1.equals(move.to, position_1.bottom(position_1.bottom(position_1.bottom(position_1.left(move.from))))) ||
        position_1.equals(move.to, position_1.top(position_1.top(position_1.top(position_1.left(move.from))))) ||
        position_1.equals(move.to, position_1.left(position_1.left(position_1.left(position_1.top(move.from)))))) {
        var destination = chessboard_1.squareAtPosition(board, move.to);
        var source = chessboard_1.squareAtPosition(board, move.from);
        return source.piece.isWhite ?
            chessboard_1.isEmpty(board, move.to) || !(destination.piece.isWhite) :
            chessboard_1.isEmpty(board, move.to) || (destination.piece.isWhite);
    }
    return false;
}
exports.camelMove = camelMove;
