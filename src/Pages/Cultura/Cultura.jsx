import React from 'react';
import { TalleresContainer } from '../../Containers/Cultura/Talleres';
import { EventosContainer } from '../../Containers/Cultura/Eventos';


const Cultura = () => {
    return (
        <div>
            <h1>The CULTURE page.</h1>
            <TalleresContainer />
            <EventosContainer />
        
        </div>
    );
}

export { Cultura };