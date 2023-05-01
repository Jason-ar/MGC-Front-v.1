import React from 'react';
import { Button } from 'react-bootstrap';

const PublicidadViaPublica = () => {
    return (
        <div className="container text-center justify-content-center align-items-center h-100">
            <h1>Carteleri y publicidad en la via publica</h1>
            <h2>Carteleria fija</h2>
          
            <h2>Pancartas y carteleria temporal</h2>

            <div className="container text-center justify-content-center align-items-center h-100">
                <Button href="http://www.dgrchubut.gov.ar/" target="_blank" >Rentas Chubut</Button>
                <Button href="https://www.afip.gob.ar/monotributo/categorias.asp" target="_blank" >Categorias Monotributo</Button>
                <Button href="https://www.argentina.gob.ar/ingresosbrutos" target="_blank" >Ingresos Brutos</Button>
            </div>
        </div>
    );
}

export { PublicidadViaPublica };