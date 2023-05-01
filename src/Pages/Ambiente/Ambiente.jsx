import React from 'react';
import { HeaderAreaContainer } from '../../Containers/Ambiente/HeaderArea'
import { ServiciosAmbienteContainer } from '../../Containers/Ambiente/ServiciosAmbiente';
import { RecoleccionResiduosContainer } from '../../Containers/Ambiente/RecoleccionResiduos';
import { RelacionadosExternos, RelacionadosInternos } from '../../Containers/Ambiente/RelacionadosContainer';

const Ambiente = () => {
    return (
        <div className="container text-center justify-content-center align-items-center h-100">
            <HeaderAreaContainer />
            <h2>Ambiente</h2>
            <ServiciosAmbienteContainer />
            <RecoleccionResiduosContainer />
            <div className="container text-center justify-content-center align-items-center h-100">
                <p>Para recoleccion de escombros o basura en la via publica</p>
                <p>1234 567890</p>
            </div>
            
            <h2>Recolección de residuos, dias y horarios</h2>
            <p>dias y horarios de recoleccion</p>

            <h3>Relacionado</h3>
            <RelacionadosInternos />
            <RelacionadosExternos />
            
        </div>
    );
}

export { Ambiente };