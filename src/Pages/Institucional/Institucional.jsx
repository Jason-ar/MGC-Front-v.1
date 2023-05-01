import React from 'react';
import { AreasYDependenciasContainer } from '../../Containers/Institucional/AreasYDependencias';

const Institucional = () => {
    return (
        <div className="container text-center justify-content-center align-items-center h-100">
            <h1>Institucional</h1>
            <p>Informacion sobre el municipio, su organizacion y funcionamiento.</p>
            <AreasYDependenciasContainer />
        </div>
    );
}

export { Institucional };