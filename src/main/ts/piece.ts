/**
 * NE PAS MODIFIER CE FICHIER
 */

export interface Piece {
    symbol    : string,  
    isWhite   : boolean,
    name      : string,
}

export const whitePawn     : Piece = {symbol : "♙", name: "White Pawn",    isWhite : true};
export const whiteKing     : Piece = {symbol : "♔", name: "White King",    isWhite : true};
export const whiteQueen    : Piece = {symbol : "♕", name: "White Queen",   isWhite : true};
export const whiteEmpress  : Piece = {symbol : "♖", name: "White Empress", isWhite : true};
export const whiteCamel    : Piece = {symbol : "♘", name: "White Camel",   isWhite : true};
export const whitePrincess : Piece = {symbol : "♗", name: "White Princess",isWhite : true};

export const blackPawn     : Piece = {symbol : "♟", name: "Black Pawn",    isWhite : false};
export const blackKing     : Piece = {symbol : "♚", name: "Black King",    isWhite : false};
export const blackQueen    : Piece = {symbol : "♛", name: "Black Queen",   isWhite : false};
export const blackEmpress  : Piece = {symbol : "♜", name: "Black Empress", isWhite : false};
export const blackCamel    : Piece = {symbol : "♞", name: "Black Camel",   isWhite : false};
export const blackPrincess : Piece = {symbol : "♝", name: "Black Princess",isWhite : false};