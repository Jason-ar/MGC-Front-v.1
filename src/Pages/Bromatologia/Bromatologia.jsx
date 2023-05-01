import React from 'react';
import { HeaderAreaContainer } from '../../Containers/Bromatologia/HeaderArea';
import { ServiciosBromatologiaContainer } from '../../Containers/Bromatologia/ServiciosBromatologia';
//import { PlantaDeFaenaContainer } from '../../Containers/PlantaDeFaena/PlantaDeFaenaContainer'
import { RelacionadosExternos, RelacionadosInternos } from '../../Containers/Bromatologia/RelacionadosContainer';

const Bromatologia = () => {
    return (
        <div className="container text-center justify-content-center align-items-center h-100">
            <HeaderAreaContainer />
            <div className="container text-center justify-content-center align-items-center h-100">
                <h2>Servicios de Bromatologia</h2>
                <ServiciosBromatologiaContainer />
                <RelacionadosInternos />
                <RelacionadosExternos />
            </div>
        </div>
    );
}

export { Bromatologia };