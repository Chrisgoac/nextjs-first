'use client';

import { useState } from "react";

export default function Home() {

    const [xIsNext, setXIsNext] = useState(true)
    const [squares, setSquares] = useState(Array(9).fill("·"))

    const winner = calculateWinner(squares);
    let status;
    if (winner) {
      status = "Ganador: " + winner;
    } else {
      status = "Siguiente jugador: " + (xIsNext ? "X" : "O");
    }

    const handleClick = (i: number) => {
        const nextSquares = squares.slice()
        
        if(squares[i] != "·" || calculateWinner(squares)) return

        if(xIsNext){
            nextSquares[i] = 'X'
        }else{
            nextSquares[i] = "O"
        }
        setSquares(nextSquares)
        setXIsNext(!xIsNext)
    }

  return (
    <>
    <div className="status">{status}</div>
    <div className="grid grid-rows-3 grid-flow-col gap-1">
        <Square value={squares[0]} onSquareClick={() => handleClick(0)}/>
        <Square value={squares[1]} onSquareClick={() => handleClick(1)}/>
        <Square value={squares[2]} onSquareClick={() => handleClick(2)}/>
        <Square value={squares[3]} onSquareClick={() => handleClick(3)}/>
        <Square value={squares[4]} onSquareClick={() => handleClick(4)}/>
        <Square value={squares[5]} onSquareClick={() => handleClick(5)}/>
        <Square value={squares[6]} onSquareClick={() => handleClick(6)}/>
        <Square value={squares[7]} onSquareClick={() => handleClick(7)}/>
        <Square value={squares[8]} onSquareClick={() => handleClick(8)}/>
    </div>
    </>
  )
}

interface SquareProps{
    value: string, 
    onSquareClick: any
}

function Square({value, onSquareClick}: SquareProps){

    // const handleClick = () => {
    //     setValue("X")
    // }

    return <div onClick={onSquareClick} className="col p-3 text-lg font-bold text-center bg-yellow-300 cursor-pointer">{value}</div>  
}

function calculateWinner(squares: string[]) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if(squares[a] != "·"){
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
          }
      }
      
    }
    return null;
  }