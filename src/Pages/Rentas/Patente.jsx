import React from 'react';
import { FAQContainer } from '../../Containers/Rentas/Automotor/FAQContainer';
import { PatenteContainer } from '../../Containers/Rentas/Automotor/PatenteContainer';
import { RelacionadosExternos, RelacionadosInternos } from '../../Containers/Rentas/Automotor/RelacionadosContainer';


const PatenteAutomotriz = () => {
    return (
        <div className="container text-center justify-content-center align-items-center h-100">
            <h1>Patente automotriz</h1>
            <h2>Valores patentes 2023</h2>
            <PatenteContainer />
            <br></br>
            <h2>Ayuda</h2>
            <FAQContainer />
            <br></br>
            <h3>Relacionado</h3>
            <RelacionadosInternos />
            <RelacionadosExternos />
        </div>
    );
}

export { PatenteAutomotriz };