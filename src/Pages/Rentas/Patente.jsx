import React from 'react';
import { Button } from 'react-bootstrap';
import { IIBBContainer } from '../../Containers/Rentas/IIBB/IIBBContainer';
import { FAQContainer } from '../../Containers/Rentas/IIBB/FAQContainer';

const PatenteAutomotriz = () => {
    return (
        <div className="container text-center justify-content-center align-items-center h-100">
            <h1>Patente automotriz</h1>
            <h2>Categorias Ingresos Brutos 2023</h2>
            <IIBBContainer />
            <h2>Ayuda sobre Ingresos Brutos</h2>
            <FAQContainer />
            <div className="container text-center justify-content-center align-items-center h-100">
                <Button href="http://www.dgrchubut.gov.ar/" target="_blank" >Rentas Chubut</Button>
                <Button href="https://www.afip.gob.ar/monotributo/categorias.asp" target="_blank" >Categorias Monotributo</Button>
                <Button href="https://www.argentina.gob.ar/ingresosbrutos" target="_blank" >Ingresos Brutos</Button>
            </div>
        </div>
    );
}

export { PatenteAutomotriz };