import '../styles/TurnCoinWinner.css';
import React from 'react';

const Winner = ({winner}) => {

    return(
        <div className='winner'>
                {winner === 'Empate' && <span className='result'>EMPATE</span>}
                {winner !== 'Empate' && <div className='win'><span className='result'>GANADOR</span><span className={winner}>{winner}</span></div>}
        </div>
    )
}
export default Winner;