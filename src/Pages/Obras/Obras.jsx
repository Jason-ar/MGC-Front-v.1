import React from 'react';
import { ObrasActualesContainer } from '../../Containers/Obras/ObrasActuales';
import { ObrasTerminadasContainer } from '../../Containers/Obras/ObrasTerminadasContainer';
import { HeaderAreaContainer } from '../../Containers/Obras/HeaderArea';
import { RelacionadosExternos, RelacionadosInternos } from '../../Containers/Obras/RelacionadosContainer';

const Obras = () => {
    return (
        <div className="container text-center justify-content-center align-items-center h-100">
            <HeaderAreaContainer />
            <h1>Obras Públicas.</h1>
            <h2>Obras en desarrollo</h2>
            <ObrasActualesContainer />,
            <h2>Obras Finalizadas</h2>
            <ObrasTerminadasContainer />,
        </div>
    );
}

export { Obras };