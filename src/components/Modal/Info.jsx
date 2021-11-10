import { Modal, ModalBody, ModalHeader, ModalFooter, Button } from "reactstrap"
import { useState } from "react";
import React from 'react'

export default function Info() {

    const [modal , setModal] = useState(false);

    const toggle = () =>setModal(!modal)

    const margen = {
        margin : '20px'
    }

    return (
       <div>
  <Button
    color="info"
    onClick={toggle}
    style={margen}
  >
    Información
  </Button>
  <Modal isOpen={modal} toggle={toggle}>
    <ModalHeader >
      Información
    </ModalHeader>
    <ModalBody>
        <span>El juego aún se encuentra en desarrollo para aplicar las actualizaciones correspondientes al juego original. El juego original fue 
            creado por Ciro Junker y además de lo que ahora se encuentra desarrollado incluye un sistema de cartas para los movimientos, donde el azar y estrategia 
            del jugador hacen a este juego algo innovador y divertido.

            <br /><br />
            Desarrollador : <b>Rodrigo Navarro</b> 
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