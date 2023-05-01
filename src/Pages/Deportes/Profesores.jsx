import React from 'react';
import { ProfesoresContainer } from '../../Containers/Deportes/Profesores';

const Profesores = () => {
    return (
        <div className="container text-center justify-content-center align-items-center h-100">
            <h2>Profesores Escuelas Deportivas</h2>
           <ProfesoresContainer /> 
        </div >
    );
}

export { Profesores };