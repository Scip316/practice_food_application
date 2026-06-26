import { useState } from 'react';

export default function Board() {
  const [X_isNext,setX_isNext] = useState(true);
  const [squares, setSquares] = useState(Array(0).fill(null));

  function handleClick(i){
    if (squares[i] || calculateWinner(squares)) {
      return;
    }
    const nextSquares = squares.slice()

    if (X_isNext){
      nextSquares[i] = "X"
    } else {
      nextSquares[i] = "O"
    }

    setSquares(nextSquares)
    setX_isNext(!X_isNext)
    console.log("clicked " + squares);
  }

  return (
  <>
  <div className="board-row">
    <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
    <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
    <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
  </div>
    <div className="board-row">
    <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
    <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
    <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
  </div>
  <div className="board-row">
    <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
    <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
    <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
  </div>
  </>
  );
    return null
}

function Square({value, onSquareClick}) {
  // const [value, setValue] = useState(null)
  function handleClick(){
    console.log("clicked");
    console.log({value});
    // setValue("X")
  }
  return <button className="square" onClick={onSquareClick}>{value}</button>;

}

