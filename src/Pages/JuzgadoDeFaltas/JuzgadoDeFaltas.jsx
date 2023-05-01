import React from 'react';
import { HeaderAreaContainer } from '../../Containers/JuzgadoDeFaltas/HeaderArea';
import { JuzgadoServiciosContainer } from '../../Containers/JuzgadoDeFaltas/JuzgadoContainer';

const JuzgadoDeFaltas = () => {
    return (
        <div className="container text-center justify-content-center align-items-center h-100">
            <HeaderAreaContainer />
            <h1>Juzgado de Faltas</h1>
            <JuzgadoServiciosContainer />
            
        </div>
    );
}

export { JuzgadoDeFaltas };