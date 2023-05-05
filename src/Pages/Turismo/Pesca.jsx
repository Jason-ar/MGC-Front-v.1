 import React from 'react';
import { FAQPescaContainer } from '../../Containers/Turismo/Pesca/FAQPescaContainer';
import { PermisosContainer } from '../../Containers/Turismo/Pesca/PermisosContainer';
import { RelacionadosExternos, RelacionadosInternos } from '../../Containers/Turismo/Pesca/Relacionados';
//import { HospedajesContainer } from '../../Containers/Turismo/Hospedajes';

const Pesca = () => {
    return (
        <div className="container text-center justify-content-center align-items-center h-100">
            <h1>Temporada de Pesca</h1>
            <p>Tola la informacion necesaria para disfrutar al aximo esta nueva temporada de pesca en la región.</p>
            <h2>Permisos de Pesca</h2>
            <p>La direccion de pesca de la provincia es el ente encargado de otorgar los permisos de pesca cada año, las oficinas de turismo de cada localidad solo se encargan de entregarlas a los interesados.</p>
            <PermisosContainer />
            <br></br>
            <h2>Preguntas Frecuentes</h2>
            <FAQPescaContainer />
            <br></br>
            <h3>Relacionado</h3>
            <RelacionadosInternos />
            <RelacionadosExternos />
        </div>
    );
}

export { Pesca };