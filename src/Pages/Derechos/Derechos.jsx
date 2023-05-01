import React from 'react';
import { ServiciosSPDDContainer } from '../../Containers/Derechos/ServiciosSPDD';
import { HeaderAreaContainer } from '../../Containers/Derechos/HeaderArea';
import { RelacionadosExternos, RelacionadosInternos } from '../../Containers/Derechos/RelacionadosContainer';

const Derechos = () => {
    return (
        <div className="container text-center justify-content-center align-items-center h-100">
            <HeaderAreaContainer />
            <ServiciosSPDDContainer />

        </div>
    );
}

export { Derechos };