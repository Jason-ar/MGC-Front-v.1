import React from 'react';
import { HeaderAreaContainer } from '../../Containers/Museo/HeaderArea';
import { RelacionadosExternos, RelacionadosInternos } from '../../Containers/Museo/RelacionadosContainer';

const Museo = () => {
    return (
        <div className="container text-center justify-content-center align-items-center h-100">
            <HeaderAreaContainer />
            <h1>Museo Regional Valentin Saihueque</h1>
            
        </div>
    );
}

export { Museo };