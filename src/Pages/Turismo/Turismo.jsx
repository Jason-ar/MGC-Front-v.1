import React from 'react';
import { RelacionadosExternos, RelacionadosInternos } from '../../Containers/Turismo/Turismo/RelacionadosContainer';
import { ServiciosTurismoContainer } from '../../Containers/Turismo/Turismo/TurismoContainer';

const Turismo = () => {
    return (
        <div className="container text-center justify-content-center align-items-center h-100">
            <h1>Dirección de Turismo</h1>
            <br></br>
             <ServiciosTurismoContainer />
             <br></br>
            <h3>Relacionado</h3>
            <RelacionadosInternos />
            <RelacionadosExternos />
           
        </div>
    );
};

export { Turismo };