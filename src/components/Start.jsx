import '../styles/TurnCoinWinner.css'
import classnames from 'classnames';
import React from 'react';

const Start = ({turn}) =>{

    let estilo = classnames({
        turno : true,
        [`turno--${turn}`] : true
    })

    return(
        <div className='divTurno'>
        <p className='text'>Turno de:</p>
        <div className={estilo}>{turn}</div>
        </div>
    )

}
export default Start;