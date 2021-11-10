import "../styles/Square.css"
import classnames from "classnames";
import React from "react";

const Square = ({ value, onClick, turn, winner, position, rango, casillero }) => {


    const handleClick = () => {
        (turn !== null && value === null && position === null && (casillero === rango || casillero === '')) && onClick();
    }


    let squareClass = classnames({
        square: true,
        [`square--${value}`]: value !== null,
        [`winner--${winner}`]: position !== null,
        [`activo`]: casillero === rango || casillero === '',
        [`inactivo`]: (casillero !== rango && casillero !== '') || position !== null,
    })

    return (
        <div className={squareClass} onClick={() => handleClick()}>
        </div>
    )
}
export default Square;