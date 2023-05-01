import React from 'react';
import { HeaderAreaContainer } from '../../Containers/Inspeccion/HeaderArea';
import { InspeccionContainer } from '../../Containers/Inspeccion/InspeccionContainer';

const Inspeccion = () => {
    return (
        <div className="container text-center justify-content-center align-items-center h-100">
            <HeaderAreaContainer />
            <h1>Inspección Municipal</h1>
            <InspeccionContainer />
        </div>
    );
}

export { Inspeccion };