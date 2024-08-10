import { useState } from 'react'
import './App.css'
import { Square } from './components/Square.jsx'
import { Winner } from './components/Winner.jsx'
import { TURNS } from './constants.js'
import { resetGame, updateBoard } from './utils/board.js'

export const App = () => {
  const [board, setBoard] = useState(() => {
    const savedBoard = window.localStorage.getItem('board')
    return savedBoard ? JSON.parse(savedBoard) : Array(9).fill(null)
  })

  const [turn, setTurn] = useState(() => {
    const savedTurn = window.localStorage.getItem('turn')
    return savedTurn ?? TURNS.X
  })

  const [winner, setWinner] = useState(null)

  return (
    <main className='board'>
      <h1>Tic Tac Toe</h1>
      <button onClick={() => resetGame(setBoard, setTurn, setWinner)}>Reset Game</button>
      <section className='game'>
        {
          board.map((square, index) => {
            return (
              <Square
                key={index}
                updateBoard={() => updateBoard(index, board, turn, winner, setBoard, setTurn, setWinner)}
              >
                {square}
              </Square>
            )
          })
        }
      </section>
      <section className='turn'>
        <Square isSelected={turn === TURNS.X}>{TURNS.X}</Square>
        <Square isSelected={turn === TURNS.O} >{TURNS.O}</Square>
      </section>
      <Winner resetGame={() => resetGame(setBoard, setTurn, setWinner)} winner={winner} />
    </main>
  )
}
