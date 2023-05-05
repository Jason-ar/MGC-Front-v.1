import React from 'react';
import { Button } from 'react-bootstrap';
import { RelacionadosExternos, RelacionadosInternos } from '../../Containers/Rentas/Publicidad/RelacionadosContainer';

const PublicidadViaPublica = () => {
    return (
        <div className="container text-center justify-content-center align-items-center h-100">
            <h1>Carteleri y publicidad en la via publica</h1>
            <h2>Carteleria fija</h2>
          
            <h2>Pancartas y carteleria temporal</h2>

            <br></br>
            <RelacionadosInternos />
            <RelacionadosExternos />

        </div>
    );
}

export { PublicidadViaPublica };