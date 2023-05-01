import React from 'react';
import { PlantaDeFaenaContainer } from '../../Containers/PlantaDeFaena/PlantaDeFaenaContainer'
import { HeaderAreaContainer } from '../../Containers/PlantaDeFaena/HeaderArea';
import { RelacionadosExternos, RelacionadosInternos } from '../../Containers/PlantaDeFaena/RelacionadosContainer';

const PlantaDeFaena = () => {
    return (
        <div className="container text-center justify-content-center align-items-center h-100">
            <HeaderAreaContainer />
            <h1>Planta de Faena</h1>
            <PlantaDeFaenaContainer />
        </div>
    );
}

export { PlantaDeFaena };