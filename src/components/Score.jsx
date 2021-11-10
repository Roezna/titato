import '../styles/Score.css';
import React from 'react';

const Score = ({scoreX, scoreO}) => (
    
    <div className='score'>
        <div>{scoreX}</div>
        <div>{scoreO}</div>
    </div>
    
)
export default Score;