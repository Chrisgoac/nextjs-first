'use client';

import { useState } from "react";

export default function Home() {

    const [squares, setSquares] = useState(Array(9).fill("·"))

    const handleClick = (i: number) => {
        const nextSquares = squares.slice()
        nextSquares[i] = "X"
        setSquares(nextSquares)
    }

  return (
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

    return <div onClick={onSquareClick} className="col p-3 text-lg font-bold text-center bg-yellow-300">{value}</div>  
}
