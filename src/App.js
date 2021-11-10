import './styles/App.css';
import { useEffect, useState } from 'react';
import Score from './components/Score';
import Turn from './components/Turn';
import Start from './components/Start'
import Winner from './components/winner';
import Board from './components/Board'
import Play from './components/Modal/Modal';
import Info from './components/Modal/Info';
import React from 'react';

function App() {


  const [winningPositions, setWinningPositions] = useState({
    uno: null,
    dos: null,
    tres: null,
    cuatro: null,
    cinco: null,
    seis: null,
    siete: null,
    ocho: null,
    nueve: null,
  });

  const winningPositionsSquares = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]]

  const [turn, setTurn] = useState(null);
  const [squares, setSquares] = useState({
    uno: Array(9).fill(null),
    dos: Array(9).fill(null),
    tres: Array(9).fill(null),
    cuatro: Array(9).fill(null),
    cinco: Array(9).fill(null),
    seis: Array(9).fill(null),
    siete: Array(9).fill(null),
    ocho: Array(9).fill(null),
    nueve: Array(9).fill(null),

  });
  const [score, setScore] = useState({
    X: 0,
    O: 0
  })


  const [winner, setWinner] = useState(null);

  const [casillero, setCasillero] = useState(null);


  const casilleros = ['uno', 'dos', 'tres', 'cuatro', 'cinco', 'seis', 'siete', 'ocho', 'nueve']

    useEffect(() =>{

      let bigWin = [['uno', 'dos', 'tres'], ['cuatro', 'cinco', 'seis']
    , ['siete', 'ocho', 'nueve'], ['uno', 'cuatro', 'siete'],
  ['dos', 'cinco', 'ocho'], ['tres', 'seis', 'nueve'],
  ['uno', 'cinco', 'nueve'], ['tres', 'cinco', 'siete']]

  const reset = () => {

    setScore({
      ...score,
      [winner]: score[winner] + 3
    })

    setWinningPositions({
      uno: null,
      dos: null,
      tres: null,
      cuatro: null,
      cinco: null,
      seis: null,
      siete: null,
      ocho: null,
      nueve: null,
    })
    setWinner(null)
    setSquares({
      uno: Array(9).fill(null),
      dos: Array(9).fill(null),
      tres: Array(9).fill(null),
      cuatro: Array(9).fill(null),
      cinco: Array(9).fill(null),
      seis: Array(9).fill(null),
      siete: Array(9).fill(null),
      ocho: Array(9).fill(null),
      nueve: Array(9).fill(null),
    })
  }

  function endGame() {
    setTimeout(reset, 2000);
  }

      for (let j = 0; j < bigWin.length; j++) {

      const [a, b, c] = bigWin[j];
      if (winningPositions[a] && winningPositions[a] === winningPositions[b] && winningPositions[a] === winningPositions[c]) {
        ganador(winningPositions[a]);
        setCasillero('')
        endGame()
        return
      }


    }

    let consulta = true;

    let valores = Object.values(squares);

    for (let i = 0; i < valores.length; i++) {

      if (valores[i].includes(null)) {
        consulta = false;
        break;
      }

    }

    if (consulta) {
      endGame()
      ganador(null)
      setCasillero('')
    }

    if (winningPositions[casillero] !== null) {
      setCasillero('')
    }

  }, [squares,winningPositions,casillero,score,winner])



  const checkForWinner = (newSquares, position) => {

    setTurn(turn === 'X' ? 'O' : 'X');

    for (let i = 0; i < winningPositionsSquares.length; i++) {
      const [a, b, c] = winningPositionsSquares[i];

      if (newSquares[a] && newSquares[a] === newSquares[b] && newSquares[a] === newSquares[c]) {
        setWinningPositions({
          ...winningPositions,
          [position]: newSquares[a]
        })
        setSquares({
          ...squares,
          [position]: Array(9).fill(newSquares[a])
        })
        setScore({
          ...score,
          [newSquares[a]]: score[newSquares[a]] + 1,
        })
        return

      }

    }
    if (!squares[position].includes(null)) {
      setWinningPositions({
        ...winningPositions,
        [position]: position
      })
      setSquares({
        ...squares,
        [position]: Array(9).fill('tie')

      })
    }

  }



  const handleClick = (square, position, rango) => {
    let newSquares = squares;

    newSquares[position].splice(square, 1, turn);

    setSquares({
      ...squares
    });

    setCasillero(casilleros[rango])

    checkForWinner(newSquares[position], position)

  }


  const caraOcruz = () => {
    const azar = 'XO';
    const azarCasillero = ['uno', 'dos', 'tres', 'cuatro', 'cinco', 'seis', 'siete', 'ocho', 'nueve']
    setTurn(azar.charAt(Math.floor(Math.random() *
      azar.length)));
    setCasillero(azarCasillero[Math.floor(Math.random() *
      azarCasillero.length)])

  }

  const ganador = (win) => {
    if (win !== null) {
      setWinner(win);
    }
    else {
      setWinner('Empate');
    }
  }


  return (
    <div className='contenido'>
      <div className='encabezado'> 
      <span className='titulo'>Ti-Ta-Tó</span>  
     <div className='botones'>  
        <Play />
        <Info />
      </div> 
      </div>
    <div className="container">
      
      <Board squares={squares} onClick={handleClick} turn={turn} winningPositions={winningPositions} casillero={casillero} />
      <div className='orden'>
        <div className='turnWinner'>
          {turn === null ? <Turn click={caraOcruz} /> : null}
          {turn !== null && winner === null ? <Start turn={turn} /> : null}
          {winner !== null ? <Winner winner={winner} /> : null}
        </div>
        <Score scoreX={score.X} scoreO={score.O} />
      </div>
    </div>
    </div>
  );
}

export default App;
