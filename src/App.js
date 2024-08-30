import { useState } from 'react'

const Square = ({value, onSquareClick}) => {

  return <button className='square' onClick={onSquareClick}>{value}</button>
}

export const Board = ({xIsNext, squares, onPlay}) => {

  const handleClick = (i) => {
    if (calculateWinner(squares) || squares[i]) {
      return
    }
    const nextSquares = squares.slice()
    xIsNext ? nextSquares[i] = 'X' : nextSquares[i] = 'O'
    onPlay(nextSquares)
  }

  const winner = calculateWinner(squares)
  let status
  winner ? status =`Winner: ${winner}` : status = `Next player: ${xIsNext ? 'X' : 'O'}`

  return (
    <>
      <div className='status'>{status}</div>
      <div className='board-row'>
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
      </div>
      <div className='board-row'>
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
      </div>
      <div className='board-row'>
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>
    </>
  )
}

export default function Game() {
  const [history, setHistory] = useState([Array(9).fill(null)])
  const [currentMove, setCurrentMove] = useState(0)
  const xIsNext = currentMove % 2 === 0
  const currentSquares = history[currentMove]

  const handlePlay = (nextSquares) => {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares]
    setHistory(nextHistory)
    setCurrentMove(nextHistory.length - 1)
  }

  const jumpTo = (nextMove) => {
    setCurrentMove(nextMove)
  }

  const moves = history.map((squares, move) => {
    let description
    move > 0 ? description = `Go to move #${move}` : description = `Go to game start`

    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{description}</button>
      </li>
    )
  })

  return (
    <div className='game'>
      <div className='game-board'>
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
      </div>
      <div className='game-info'>
        <ol>{moves}</ol>
      </div>
    </div>
  )

}

const calculateWinner = (squares) => {
  const lines = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
  ]

  for (let i = 0; i < lines.length; i++) {
    const [a,b,c] = lines[i]
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a]
    }
  }
  return null

}


_.chunk([1,2,3,4], 2)

// => [[1,2], [3,4]]

_.chunk([1,2,3,4], 3)

// => [[1,2,3], [4]]

_.chunk([1,2,3,4], 1)
// => 

  const numbers = [2,40,3000]

  const sortedNumbers  = [...numbers].sort()

  const moreSortedNumbers = numbers.slice().sort()

  const superSortedNumbers = numbers.sort()

  console.log(numbers)
  // => [2,40,3000]

  console.log(sortedNumbers)
  // => [2,3000,40]

  console.log(moreSortedNumbers)
  // => [2,3000,40]

  console.log(superSortedNumbers)
  // => [2,3000,40]


  let numbers = [3,200,1,4]
  let sortedNumbers = []

  while (numbers.length > 0) {
    let min = numbers[0]
    let minIndex = 0

    for (let i = 1; i < numbers.length; i++) {
      if (numbers[i] < min) {
        min = numbers[1]
        nimIndex = i
      }
    }

    sortedNumbers.push(min)
    numbers.splice(minIndex, 1)
  }

  console.log(sortedNumbers)
  // => [1,3,4,200]
