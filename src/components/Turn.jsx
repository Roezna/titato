import '../styles/TurnCoinWinner.css'
import React from 'react';

function Turn ({click}){


    const azar = () => {
        
        document.getElementById('monedaBoton').className = 'giro';

        setTimeout(click, 2000)

    }  
    
    

    return (
        <div className='moneda'>
            <p>¡Sortea el comienzo!</p>
            <img src="https://i.pinimg.com/originals/7b/67/1c/7b671c2c37b40376d0c0e778fca67bdf.png" alt="" id='monedaBoton' onClick={azar}/>
        </div>
    )

}
export default Turn;