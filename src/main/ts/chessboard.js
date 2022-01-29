"use strict";
exports.__esModule = true;
/**
 * NE PAS MODIFIER CE FICHIER
 */
var pieces = require("./piece");
function isEmpty(chessboard, position) {
    var square = squareAtPosition(chessboard, position);
    return square.isEmpty;
}
exports.isEmpty = isEmpty;
function emptyfile(chessboard, move) {
    var start;
    var end;
    var file = move.from.file;
    if (file !== move.to.file) {
        //should not happen
        return false;
    }
    if (move.from.rank > move.to.rank) {
        start = move.to.rank;
        end = move.from.rank;
    }
    else {
        end = move.to.rank;
        start = move.from.rank;
    }
    var i = start;
    while (i <= end && chessboard.board[file][i].isEmpty) {
        i++;
    }
    return i === end;
}
exports.emptyfile = emptyfile;
function squareAtPosition(chessboard, position) {
    var square = chessboard.board[position.file][position.rank];
    return square;
}
exports.squareAtPosition = squareAtPosition;
function pieceAtPosition(chessboard, position) {
    var square = squareAtPosition(chessboard, position);
    return square.piece;
}
exports.pieceAtPosition = pieceAtPosition;
/** Retourne un échiquier initialisé en début de partie **/
function createInitialChessboard() {
    var chessboard = createChessboard();
    // ranks 2 - 6 are empty
    for (var rank = 2; rank < 6; rank++) {
        for (var col = 0; col < 8; col++) {
            var position_1 = { rank: rank, file: col };
            var square_1 = { position: position_1, isEmpty: true };
            chessboard.board[col][rank] = square_1;
        }
    }
    // Pawns in ranks 2 and 6
    var position;
    var square;
    for (var col = 0; col < 8; col++) {
        putPieceAtCoordinate(chessboard, col, 1, pieces.whitePawn);
        putPieceAtCoordinate(chessboard, col, 6, pieces.blackPawn);
    }
    // Kings and Queens
    putPieceAtCoordinate(chessboard, 4, 0, pieces.whiteKing);
    putPieceAtCoordinate(chessboard, 4, 7, pieces.blackKing);
    putPieceAtCoordinate(chessboard, 3, 0, pieces.whiteQueen);
    putPieceAtCoordinate(chessboard, 3, 7, pieces.blackQueen);
    // Princesss
    putPieceAtCoordinate(chessboard, 2, 0, pieces.whitePrincess);
    putPieceAtCoordinate(chessboard, 2, 7, pieces.blackPrincess);
    putPieceAtCoordinate(chessboard, 5, 0, pieces.whitePrincess);
    putPieceAtCoordinate(chessboard, 5, 7, pieces.blackPrincess);
    // Camels
    putPieceAtCoordinate(chessboard, 1, 0, pieces.whiteCamel);
    putPieceAtCoordinate(chessboard, 1, 7, pieces.blackCamel);
    putPieceAtCoordinate(chessboard, 6, 0, pieces.whiteCamel);
    putPieceAtCoordinate(chessboard, 6, 7, pieces.blackCamel);
    // Empresss
    putPieceAtCoordinate(chessboard, 0, 0, pieces.whiteEmpress);
    putPieceAtCoordinate(chessboard, 0, 7, pieces.blackEmpress);
    putPieceAtCoordinate(chessboard, 7, 0, pieces.whiteEmpress);
    putPieceAtCoordinate(chessboard, 7, 7, pieces.blackEmpress);
    return chessboard;
}
exports.createInitialChessboard = createInitialChessboard;
function createEmptyChessboard() {
    var newChessboard = createChessboard();
    for (var rank = 0; rank < 8; rank++) {
        for (var col = 0; col < 8; col++) {
            var position = { rank: rank, file: col };
            var square = { position: position, isEmpty: true };
            newChessboard.board[col][rank] = square;
        }
    }
    return newChessboard;
}
exports.createEmptyChessboard = createEmptyChessboard;
function createChessboard() {
    var board = [];
    for (var i = 0; i < 8; i++) {
        board[i] = [];
    }
    var newChessboard = {
        nbCoups: 0,
        board: board,
        historique: []
    };
    return newChessboard;
}
function putPieceAtCoordinate(chessboard, file, rank, piece) {
    var position = { rank: rank, file: file };
    return putPiece(chessboard, position, piece);
}
function putPiece(chessboard, position, piece) {
    var board = chessboard.board;
    var square = { position: position, isEmpty: false, piece: piece };
    board[position.file][position.rank] = square;
}
exports.putPiece = putPiece;
