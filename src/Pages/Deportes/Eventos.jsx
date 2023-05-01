import React from 'react';
import { EventosDeportivosContainer } from '../../Containers/Deportes/Eventos';

const EventosDeportivos = () => {
    return (
        <div className="container text-center justify-content-center align-items-center h-100">
            <h2>Eventos Deportivos</h2>
           <EventosDeportivosContainer /> 
        </div >
    );
}

export { EventosDeportivos };