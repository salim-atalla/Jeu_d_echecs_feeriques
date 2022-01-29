"use strict";
/**
 * NE PAS MODIFIER CE FICHIER
 */
exports.__esModule = true;
/**
 * Creates a new Posistion from two numbers, representing
 * the new position's file and rank.
 *
 * @param rank this position rank, from 0..7
 * @param file this position file, from 0..7
 */
function position(file, rank) {
    var position = { rank: rank, file: file };
    return position;
}
exports.position = position;
function bottom(pos) {
    var bottomPosition = { file: pos.file, rank: pos.rank - 1 };
    return bottomPosition;
}
exports.bottom = bottom;
function top(pos) {
    var topPosition = { file: pos.file, rank: pos.rank + 1 };
    return topPosition;
}
exports.top = top;
function left(pos) {
    var leftPosition = { file: pos.file - 1, rank: pos.rank };
    return leftPosition;
}
exports.left = left;
function right(pos) {
    var rightPosition = { file: pos.file + 1, rank: pos.rank };
    return rightPosition;
}
exports.right = right;
function equals(one, other) {
    //console.log("Equals: " + JSON.stringify(one) + ", " + JSON.stringify(other));
    return one.rank === other.rank && one.file === other.file;
}
exports.equals = equals;
