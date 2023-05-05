import React from 'react';
import { Button } from 'react-bootstrap';
import { ServiciosAtmosfericoContainer } from '../../Containers/Rentas/Atmosferico/AtmosfericoContainer';
import { RelacionadosExternos, RelacionadosInternos } from '../../Containers/Rentas/Atmosferico/RelacionadosContainer';
import { FAQContainer } from '../../Containers/Rentas/Atmosferico/FAQContainer';

const Atmosferico = () => {
    return (
        <div className="container text-center justify-content-center align-items-center h-100">
            <h1>Camión Atmosférico</h1>
            <p>Desagote de pozos ciegos y camaras septicas en domicilios de la localidad.</p>
            <ServiciosAtmosfericoContainer />
            <br></br>
            <h2>Preguntas FRecuentes</h2>
            <FAQContainer />
            <br></br>
            <h3>Relacionado</h3>
            <RelacionadosInternos />
            <RelacionadosExternos />
        </div>
    );
}

export { Atmosferico };