import React from 'react';
import { ServiciosCampingContainer } from '../../Containers/Turismo/Camping/CampingContainer';
//import { HospedajesContainer } from '../../Containers/Turismo/Hospedajes';

const Camping = () => {
    return (
        <div className="container text-center justify-content-center align-items-center h-100">
            <h1>Camping Municipal</h1>
            <p>Dormí bajo las estrellas en el valle del Genoa.</p>
            <ServiciosCampingContainer />
            <h2>Valores del Camping</h2>
            <p></p>
        </div>
    );
}

export { Camping };