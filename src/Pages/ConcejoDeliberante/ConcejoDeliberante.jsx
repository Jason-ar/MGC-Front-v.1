import React from 'react';
import { ConcejalesContainer } from '../../Containers/HCD/Concejales';
import { HeaderAreaContainer } from '../../Containers/HCD/HeaderArea';
import { RelacionadosExternos, RelacionadosInternos } from '../../Containers/Ambiente/RelacionadosContainer';


const ConcejoDeliberante = () => {
    return (
        <div className="container text-center justify-content-center align-items-center h-100">
            <HeaderAreaContainer />
            <h1>Honoroble Concejo Deliberante</h1>
            <p>Ordenes del dia seccion.</p>
            <ConcejalesContainer />
        </div>
    );
}

export { ConcejoDeliberante };