import React from 'react';
import { HospedajesContainer } from '../../Containers/Turismo/Hospedajes/Hospedajes';
import { HeaderAreaContainer } from '../../Containers/CentroArtesanal/HeaderArea'
import { RelacionadosExternos, RelacionadosInternos } from '../../Containers/CentroArtesanal/RelacionadosContainer';

const CentroArtesanal = () => {
    return (
        <div className="container text-center justify-content-center align-items-center h-100">
            <HeaderAreaContainer />
            <h1>Centro Artesanal</h1>
        <HospedajesContainer />
        <RelacionadosInternos />
        <RelacionadosExternos />
        </div>
    );
}

export { CentroArtesanal };