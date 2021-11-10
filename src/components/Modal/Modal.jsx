import { Modal, ModalBody, ModalHeader, ModalFooter, Button } from "reactstrap"
import { useState } from "react"
import ejemplo from './imagen/ejemplo.png'
import React from "react";
export default function Play() {

    const [modal , setModal] = useState(false);

    const toggle = () =>setModal(!modal)

    const img  = {
        width: '300px'
    }
    const margen = {
        margin : '20px'
    }

    return (
       <div>
  <Button
    color="warning"
    onClick={toggle}
    style={margen}
  >
    ¿Como jugar?
  </Button>
  <Modal isOpen={modal} toggle={toggle}>
    <ModalHeader >
      ¿Como jugar?
    </ModalHeader>
    <ModalBody>
        <span><b>Numero de jugadores:</b> 2 <br /><br /> <b>Objetivo:</b> Marcar un Ti-Ta-Tó antes que el oponente <br/><br />
        <b>Introducción:</b> En este juego, ambos jugadores deberán competir por hacen un Ti-Ta-Tó. ¿Que es un Ti-ta-tó? Pues, un "Tres en raya"
        (Si, como el clásico Ta-Te-Ti), pero con la excepción de que este deberá cruzar tres tableros en lugar de uno solo.
        <br /><br />
        <b>Movimientos:</b> Uno por turno y según donde selecciones tu marca, es donde enviarás a jugar al oponente en el casillero correspondiente del Ti-Ta-Tó, si el casillero al que envias a tu oponente ya esta logrado, podrá seleccionar libremente donde jugar
        <br /><br />
        <b>Puntuación:</b> Ganar un casillero suma 1 punto, lograr el Ti-Ta-Tó suma 3 puntos
        <br /><br /><b>Ejemplo de Ti-Ta-Tó logrado:</b> 
        
        
        <img src={ejemplo} alt="Titató" style={img}/>
        </span>
    </ModalBody>
    <ModalFooter>
      <Button
        color="primary"
        onClick={toggle}
      >
        Ok
      </Button>
    </ModalFooter>
  </Modal>
</div>
    )
}