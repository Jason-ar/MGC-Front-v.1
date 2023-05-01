import React from 'react';
import { HeaderAreaContainer } from '../../Containers/Cine/HeaderArea';
import { CartelerasContainer } from '../../Containers/Cine/CarteleraContainer';
import { RelacionadosExternos, RelacionadosInternos } from '../../Containers/Cine/RelacionadosContainer';

const CineMunicipal = () => {
    return (
        <div className="container text-center justify-content-center align-items-center h-100">
            <HeaderAreaContainer />
            <h1>Cine Municipal</h1>
            <CartelerasContainer />
            <p>Sección con las funciones y carteleras de la semana.</p>
            <RelacionadosInternos />
            <RelacionadosExternos />
        </div>
    );
}

export { CineMunicipal };