import React from 'react';
import { TalleresContainer } from '../../Containers/Cultura/Talleres';
import { EventosCulturalesContainer } from '../../Containers/Cultura/Eventos';
import { HeaderAreaContainer } from '../../Containers/Cultura/HeaderArea';


const Cultura = () => {
    return (
        <div className="container text-center justify-content-center align-items-center h-100">
            <HeaderAreaContainer />
            <h1>Dirección de Cultura</h1>
            <TalleresContainer />
            <h2>Próximos Eventos</h2>
            <EventosCulturalesContainer />
        
        </div>
    );
}

export { Cultura };