import { Chessboard, isEmpty, Square, squareAtPosition } from "./chessboard";
import { Move } from "./movements";
import { equals, left, right, top, bottom, Position } from "./position";
import { Piece, whiteKing, whiteCamel, whiteEmpress, whitePrincess, blackKing } from './piece';

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
export function blackPawnMove(board: Chessboard, move: Move): boolean {

    if (equals(move.to!, bottom(move.from!))) {
        //console.log("Single forward");
        return isEmpty(board, move.to!);
    }

    if (move.from!.rank === 6 && equals(move.to!, bottom(bottom(move.from!)))) {
        //console.log("Double forward");
        return isEmpty(board, bottom(move.from!)) && isEmpty(board, move.to!);
    }

    if (equals(move.to!, left(bottom(move.from!))) || equals(move.to!, right(bottom(move.from!)))) {
        let destination: Square = squareAtPosition(board, move.to!);
        
        return !(destination.isEmpty || !destination.piece!.isWhite)
    }

    return false;
}

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
export function whitePawnMove(board: Chessboard, move: Move): boolean {

    if (equals(move.to!, top(move.from!))) {
        return isEmpty(board, move.to!);
    }

    if (move.from!.rank === 1 && equals(move.to!, top(top(move.from!)))) {
        return isEmpty(board, top(move.from!)) && isEmpty(board, move.to!);
    }

    if (equals(move.to!, left(top(move.from!))) || equals(move.to!, right(top(move.from!)))) {
        let destination: Square = squareAtPosition(board, move.to!);

        return !(destination.isEmpty || destination.piece!.isWhite)
    }

    return false;
}

/**
 * Checks whether a King can perform a given move.
 * The king moves one square in any direction. 
 * 
 * @param board The chessboard of the current game
 * @param move 
 */
export function kingMove(board: Chessboard, move: Move): boolean {
    // #TODO: Implement this function
    
    if (
        equals(move.to!, top(move.from!))           ||
        equals(move.to!, bottom(move.from!))        ||
        equals(move.to!, left(move.from!))          ||
        equals(move.to!, right(move.from!))         ||
        equals(move.to!, right(top(move.from!)))    ||
        equals(move.to!, right(bottom(move.from!))) ||
        equals(move.to!, left(top(move.from!)))     ||
        equals(move.to!, left(bottom(move.from!)))
    ){
        let destination: Square = squareAtPosition(board, move.to!);
        let source: Square = squareAtPosition(board, move.from!);

        return source.piece!.isWhite ? 
        isEmpty(board, move.to!) || !(destination.piece!.isWhite) : 
        isEmpty(board, move.to!) || (destination.piece!.isWhite) ;
    }
    return false;
}

/**
 * Checks whether a Queen can perform a given move.
 * The queen combines the power of a rook and bishop and can move any 
 * number of squares along a rank, file, or diagonal, but cannot leap over other pieces.
 * 
 * @param board The chessboard of the current game
 * @param move 
 */
export function queenMove(board: Chessboard, move: Move): boolean {
    // #TODO: Implement this function
    if(empressMove(board,move) || princessMove(board,move)){
        if (
            equals(move.to!, top(top(right(move.from!))))       ||
            equals(move.to!, bottom(bottom(right(move.from!)))) ||
            equals(move.to!, left(left(bottom(move.from!))))    ||
            equals(move.to!, right(right(bottom(move.from!))))  ||
            equals(move.to!, right(right(top(move.from!))))     ||
            equals(move.to!, bottom(bottom(left(move.from!))))  ||
            equals(move.to!, top(top(left(move.from!))))        ||
            equals(move.to!, left(left(top(move.from!))))
        ){
            return false;
        }else{
            return true ;
        }
    }
    return false;
}

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
export function empressMove(board: Chessboard, move: Move): boolean {
    // #TODO: Implement this function
    if (
        equals(move.to!, top(top(right(move.from!))))       ||
        equals(move.to!, bottom(bottom(right(move.from!)))) ||
        equals(move.to!, left(left(bottom(move.from!))))    ||
        equals(move.to!, right(right(bottom(move.from!))))  ||
        equals(move.to!, right(right(top(move.from!))))     ||
        equals(move.to!, bottom(bottom(left(move.from!))))  ||
        equals(move.to!, top(top(left(move.from!))))        ||
        equals(move.to!, left(left(top(move.from!))))
    ){
        let destination: Square = squareAtPosition(board, move.to!);
        let source: Square = squareAtPosition(board, move.from!);

        return source.piece!.isWhite ? 
        isEmpty(board, move.to!) || !(destination.piece!.isWhite) : 
        isEmpty(board, move.to!) || (destination.piece!.isWhite) ;
    }else{
        let test : Position = {rank : move.from!.rank , file : move.from!.file };
        let brk : boolean = false ; 

        while(test.rank > 0 && brk == false){ //vers le bas

            if(equals(move.to!, bottom(test))){

                let destination: Square = squareAtPosition(board, move.to!);
                let source: Square = squareAtPosition(board, move.from!);

                return source.piece!.isWhite ? 
                isEmpty(board, move.to!) || !(destination.piece!.isWhite) :
                isEmpty(board, move.to!) || (destination.piece!.isWhite) ;
            }else{

                if(isEmpty(board,bottom(test))){
                    test = bottom(test);
                }else{
                    brk = true ;
                }
            } 
        }

        brk = false ;
        test = {file : move.from!.file , rank : move.from!.rank };

        while(test.rank < 7 && brk == false){ // vers le haut

            if(equals(move.to!, top(test))){

                let destination: Square = squareAtPosition(board, move.to!);
                let source: Square = squareAtPosition(board, move.from!);

                return source.piece!.isWhite ? 
                isEmpty(board, move.to!) || !(destination.piece!.isWhite) : 
                isEmpty(board, move.to!) || (destination.piece!.isWhite) ;
            }else{

                if(isEmpty(board,top(test))){
                    test = top(test);
                }
                else{
                    brk = true ;
                }
            }
        }
        brk = false ;
        test = {file : move.from!.file , rank : move.from!.rank };

        while(test.file > 0 && brk == false){

            if(equals(move.to!, left(test))){

                let destination: Square = squareAtPosition(board, move.to!);
                let source: Square = squareAtPosition(board, move.from!);
                
                return source.piece!.isWhite ?  
                isEmpty(board, move.to!) || !(destination.piece!.isWhite) : 
                isEmpty(board, move.to!) || (destination.piece!.isWhite) ;
            }else{

                if(isEmpty(board,left(test))){
                    test = left(test);
                }
                else{
                    brk = true ;
                }
            }
        }
        brk = false ;
        test = {file : move.from!.file , rank : move.from!.rank };

        while(test.file < 7 && brk == false){

            if(equals(move.to!, right(test))){

                let destination: Square = squareAtPosition(board, move.to!);
                let source: Square = squareAtPosition(board, move.from!);
                
                return source.piece!.isWhite ?  
                isEmpty(board, move.to!) || !(destination.piece!.isWhite) : 
                isEmpty(board, move.to!) || (destination.piece!.isWhite) ;
            }else{

                if(isEmpty(board,right(test))){
                    test = right(test);
                }
                else{
                    brk = true ;
                }
            }
        }
    }
    return false;
}

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
export function princessMove(board: Chessboard, move: Move): boolean {
    // #TODO: Implement this function
    if (
        equals(move.to!, top(top(right(move.from!))))       ||
        equals(move.to!, bottom(bottom(right(move.from!)))) ||
        equals(move.to!, left(left(bottom(move.from!))))    ||
        equals(move.to!, right(right(bottom(move.from!))))  ||
        equals(move.to!, right(right(top(move.from!))))     ||
        equals(move.to!, bottom(bottom(left(move.from!))))  ||
        equals(move.to!, top(top(left(move.from!))))        ||
        equals(move.to!, left(left(top(move.from!))))
    ){
        let destination: Square = squareAtPosition(board, move.to!);
        let source: Square = squareAtPosition(board, move.from!);
                
        return source.piece!.isWhite ?  
        isEmpty(board, move.to!) || !(destination.piece!.isWhite) : 
        isEmpty(board, move.to!) || (destination.piece!.isWhite) ;       
    }else{

        let test : Position = {file : move.from!.file, rank : move.from!.rank};
        let brk : boolean = false ;
    
        //vers haut droit
        while(test.file < 7 && test.rank < 7 && brk == false){

            if(equals(move.to!, top(right(test)))){

                let destination: Square = squareAtPosition(board, move.to!);
                let source: Square = squareAtPosition(board, move.from!);
                
                return source.piece!.isWhite ? 
                isEmpty(board, move.to!) || !(destination.piece!.isWhite) : 
                isEmpty(board, move.to!) || (destination.piece!.isWhite) ;
            }else{

                if(isEmpty(board,top(right(test)))){
                    test = top(right(test));
                }
                else{
                    brk = true ;
                }
            }
        }
    
        brk = false ;
        test = {file : move.from!.file , rank : move.from!.rank };
    
        //vers bas droit
        while(test.file < 7 && test.rank > 0 && brk == false){

            if(equals(move.to!, bottom(right(test)))){

                let destination: Square = squareAtPosition(board, move.to!);
                let source: Square = squareAtPosition(board, move.from!);
                
                return source.piece!.isWhite ?  
                isEmpty(board, move.to!) || !(destination.piece!.isWhite) : 
                isEmpty(board, move.to!) || (destination.piece!.isWhite) ;
            }else{

                if(isEmpty(board,bottom(right(test)))){
                    test = bottom(right(test));
                }
                else{
                    brk = true ;
                }
            }
        }
    
        brk = false ;
        test = {file : move.from!.file , rank : move.from!.rank };
    
        //vers haut gauche
        while(test.file > 0 && test.rank < 7 && brk == false){
            if(equals(move.to!, top(left(test)))){
                let destination: Square = squareAtPosition(board, move.to!);
                let source: Square = squareAtPosition(board, move.from!);
                
                return source.piece!.isWhite ?  
                isEmpty(board, move.to!) || !(destination.piece!.isWhite) : 
                isEmpty(board, move.to!) || (destination.piece!.isWhite) ;
            }else{

                if(isEmpty(board,top(left(test)))){
                    test = top(left(test));
                }
                else{
                    brk = true ;
                }
            }
        }
    
        brk = false ;
        test = {file : move.from!.file , rank : move.from!.rank };
    
        //vers bas gauche
        while(test.file > 0 && test.rank > 0 && brk == false){

            if(equals(move.to!, bottom(left(test)))){

                let destination: Square = squareAtPosition(board, move.to!);
                let source: Square = squareAtPosition(board, move.from!);
                
                return source.piece!.isWhite ? 
                isEmpty(board, move.to!) || !(destination.piece!.isWhite) : 
                isEmpty(board, move.to!) || (destination.piece!.isWhite) ;
            }else{

                if(isEmpty(board,bottom(left(test)))){
                    test = bottom(left(test));
                }
                else{
                    brk = true ;
                }
            }
        }
    }
    return false;
}

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
export function camelMove(board: Chessboard, move: Move): boolean {
    // #TODO: Implement this function
    if (
        equals(move.to!, top(top(top(right(move.from!)))))          ||
        equals(move.to!, bottom(bottom(bottom(right(move.from!))))) ||
        equals(move.to!, left(left(left(bottom(move.from!)))))      ||
        equals(move.to!, right(right(right(bottom(move.from!)))))   ||
        equals(move.to!, right(right(right(top(move.from!)))))      ||
        equals(move.to!, bottom(bottom(bottom(left(move.from!)))))  ||
        equals(move.to!, top(top(top(left(move.from!)))))           ||
        equals(move.to!, left(left(left(top(move.from!)))))
    ){
        let destination: Square = squareAtPosition(board, move.to!);
        let source: Square = squareAtPosition(board, move.from!);
                
        return source.piece!.isWhite ? 
        isEmpty(board, move.to!) || !(destination.piece!.isWhite) :
        isEmpty(board, move.to!) || (destination.piece!.isWhite) ;
    } 
    return false ;
} 