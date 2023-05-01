import React from 'react';
import { Button } from 'react-bootstrap';

const InmobiliarioRural = () => {
    return (
        <div className="container text-center justify-content-center align-items-center h-100">
            <h1>Inmobiliario Rural</h1>
            <h2>Detalles</h2>
            
            <h2>Preguntas Frecuentes</h2>
          
            <h3>Relacionado</h3>
            <div className="container text-center justify-content-center align-items-center h-100">
                <Button href="http://www.dgrchubut.gov.ar/" target="_blank" >Rentas Chubut</Button>
                <Button href="https://www.afip.gob.ar/monotributo/categorias.asp" target="_blank" >Categorias Monotributo</Button>
                <Button href="https://www.argentina.gob.ar/ingresosbrutos" target="_blank" >Ingresos Brutos</Button>
            </div>
        </div>
    );
}

export { InmobiliarioRural };