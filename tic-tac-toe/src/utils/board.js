import confetti from 'canvas-confetti'
import { TURNS, WINNING_COMBINATIONS } from '../constants'

export const checkWinner = (boardToCheck) => {
  for (const combination of WINNING_COMBINATIONS) {
    const [a, b, c] = combination
    if (
      boardToCheck[a] &&
      boardToCheck[a] === boardToCheck[b] &&
      boardToCheck[a] === boardToCheck[c]
    ) {
      return boardToCheck[a]
    }
  }
  return null
}

export const checkEndGame = (boardToCheck) => {
  return boardToCheck.every((square) => square !== null)
}

export const resetGame = (setBoard, setTurn, setWinner) => {
  setBoard(Array(9).fill(null))
  setTurn(TURNS.X)
  setWinner(null)
  window.localStorage.removeItem('board')
  window.localStorage.removeItem('turn')
}

export const updateBoard = (index, board, turn, winner, setBoard, setTurn, setWinner) => {
  if (board[index] || winner) return
  const newBoard = [...board]
  newBoard[index] = turn
  setBoard(newBoard)
  const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
  setTurn(newTurn)
  window.localStorage.setItem('board', JSON.stringify(newBoard))
  window.localStorage.setItem('turn', newTurn)
  const verifyWinner = checkWinner(newBoard)
  if (verifyWinner) {
    confetti()
    setWinner(verifyWinner)
  } else if (checkEndGame(newBoard)) {
    setWinner(false)
  }
}
