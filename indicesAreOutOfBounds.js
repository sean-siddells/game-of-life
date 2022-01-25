const isOutOfBounds = require('./isOutOfBounds')
const createBoard = require('./createBoard')

function indicesAreOutOfBounds (rowIndex, columnIndex, board) {
 if (rowIndex < 0 ||
 rowIndex > board[0].length - 1 ||
 columnIndex < 0 ||
 columnIndex > board.length - 1) {
   return true
 } else {
   return false
 }
}

module.exports = indicesAreOutOfBounds
