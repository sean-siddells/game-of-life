const nextCellState = require('./nextCellState')
const countAliveNeighbours = require('./countAliveNeighbours')
const createBoard = require('./createBoard')
const getNeighbours = require('./getNeighbours')

const board = createBoard (5)

function nextBoard (currentBoard) {
  let newBoard = [...currentBoard]
  console.log('this is currentBoard: ', currentBoard)
  currentBoard.map((row, rowIndex) =>
    row.map((cell, cellIndex) => {
      const aliveNeighbours = countAliveNeighbours(cellIndex, rowIndex, currentBoard)
      newBoard[rowIndex][cellIndex] = nextCellState(cell, aliveNeighbours)
    })
  )
  console.log('this is newBoard: ', newBoard)
  console.log('this is currentBoard: ', currentBoard)
  return newBoard
}

nextBoard(board)

module.exports = nextBoard
