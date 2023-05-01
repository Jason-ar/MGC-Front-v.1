import React from 'react';
import { HeaderAreaContainer } from '../../Containers/Bromatologia/HeaderArea';
import { ServiciosBromatologiaContainer } from '../../Containers/Bromatologia/ServiciosBromatologia';
//import { PlantaDeFaenaContainer } from '../../Containers/PlantaDeFaena/PlantaDeFaenaContainer'

const Castraciones = () => {
    return (
        <div className="container text-center justify-content-center align-items-center h-100">
            <HeaderAreaContainer />
            <div className="container text-center justify-content-center align-items-center h-100">
                <h2>Castraciones de Perros y Gatos</h2>
                <ServiciosBromatologiaContainer />
            </div>
        </div>
    );
}

export { Castraciones };