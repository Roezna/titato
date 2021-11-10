import Square from "./square"
import "../styles/Board.css";
import React from "react";

const Board = ({ squares, onClick, turn, winningPositions, casillero }) => {

    const createSquares = (values, position) => (
        values.map((value) => (
            <Square
                winner={winningPositions[position]}
                turn={turn}
                onClick={() => onClick(value, position, value)}
                key={`square_${value}`}
                value={squares[position][value]}
                position={winningPositions[position]}
                rango={position}
                casillero={casillero}
            />
        ))
    );

    return (
        <div className='board'>

            <div className='rower'>
                {createSquares([0, 1], 'uno')}
                <div className='column'>
                    {createSquares([2], 'uno')}
                </div>
                {createSquares([0, 1], 'dos')}
                <div className='column'>
                    {createSquares([2], 'dos')}
                </div>
                {createSquares([0, 1], 'tres')}
                <div className='column'>
                    {createSquares([2], 'tres')}
                </div>
            </div>
            <div className='rower'>
                {createSquares([3, 4], 'uno')}
                <div className='column'>
                    {createSquares([5], 'uno')}
                </div>
                {createSquares([3, 4], 'dos')}
                <div className='column'>
                    {createSquares([5], 'dos')}
                </div>
                {createSquares([3, 4], 'tres')}
                <div className='column'>
                    {createSquares([5], 'tres')}
                </div>
            </div>
            <div className='rower abajo'>
                {createSquares([6, 7], 'uno')}
                <div className='column'>
                    {createSquares([8], 'uno')}
                </div>
                {createSquares([6, 7], 'dos')}
                <div className='column'>
                    {createSquares([8], 'dos')}
                </div>
                {createSquares([6, 7], 'tres')}
                <div className='column'>
                    {createSquares([8], 'tres')}
                </div>
            </div>
            <div className='rower'>
                {createSquares([0, 1], 'cuatro')}
                <div className='column'>
                    {createSquares([2], 'cuatro')}
                </div>
                {createSquares([0, 1], 'cinco')}
                <div className='column'>
                    {createSquares([2], 'cinco')}
                </div>
                {createSquares([0, 1], 'seis')}
                <div className='column'>
                    {createSquares([2], 'seis')}
                </div>
            </div>
            <div className='rower'>
                {createSquares([3, 4], 'cuatro')}
                <div className='column'>
                    {createSquares([5], 'cuatro')}
                </div>
                {createSquares([3, 4], 'cinco')}
                <div className='column'>
                    {createSquares([5], 'cinco')}
                </div>
                {createSquares([3, 4], 'seis')}
                <div className='column'>
                    {createSquares([5], 'seis')}
                </div>
            </div>
            <div className='rower abajo'>
                {createSquares([6, 7], 'cuatro')}
                <div className='column'>
                    {createSquares([8], 'cuatro')}
                </div>
                {createSquares([6, 7], 'cinco')}
                <div className='column'>
                    {createSquares([8], 'cinco')}
                </div>
                {createSquares([6, 7], 'seis')}
                <div className='column'>
                    {createSquares([8], 'seis')}
                </div>
            </div>
            <div className='rower'>
                {createSquares([0, 1], 'siete')}
                <div className='column'>
                    {createSquares([2], 'siete')}
                </div>
                {createSquares([0, 1], 'ocho')}
                <div className='column'>
                    {createSquares([2], 'ocho')}
                </div>
                {createSquares([0, 1], 'nueve')}
                <div className='column'>
                    {createSquares([2], 'nueve')}
                </div>
            </div>
            <div className='rower'>
                {createSquares([3, 4], 'siete')}
                <div className='column'>
                    {createSquares([5], 'siete')}
                </div>
                {createSquares([3, 4], 'ocho')}
                <div className='column'>
                    {createSquares([5], 'ocho')}
                </div>
                {createSquares([3, 4], 'nueve')}
                <div className='column'>
                    {createSquares([5], 'nueve')}
                </div>
            </div>
            <div className='rower'>
                {createSquares([6, 7], 'siete')}
                <div className='column'>
                    {createSquares([8], 'siete')}
                </div>
                {createSquares([6, 7], 'ocho')}
                <div className='column'>
                    {createSquares([8], 'ocho')}
                </div>
                {createSquares([6, 7], 'nueve')}
                <div className='column'>
                    {createSquares([8], 'nueve')}
                </div>
            </div>
        </div>
    )


}
export default Board;