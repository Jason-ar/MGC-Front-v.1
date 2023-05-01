import React from 'react';
import { Button } from 'react-bootstrap';
import { IIBBContainer } from '../../Containers/Rentas/IIBB/IIBBContainer';
import { FAQContainer } from '../../Containers/Rentas/IIBB/FAQContainer';

const Alquileres = () => {
    return (
        <div className="container text-center justify-content-center align-items-center h-100">
            <h1>Alquiler de Espacios municipales</h1>
            <h2>Espacios cerrados</h2>
            <p>Los espacios se alquilan para la realizacion de eventos privados.</p>
            <p>No tiene costo para eventos publicos de organizaciones sociles</p>
            <IIBBContainer />
            <h2>Espacios publicos de uso libre</h2>
            <FAQContainer />
            <div className="container text-center justify-content-center align-items-center h-100">
                <Button href="http://www.dgrchubut.gov.ar/" target="_blank" >Rentas Chubut</Button>
            </div>
        </div>
    );
}

export { Alquileres };