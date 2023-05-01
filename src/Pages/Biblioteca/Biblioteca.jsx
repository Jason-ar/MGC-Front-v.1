import React from 'react';
import { HeaderAreaContainer } from '../../Containers/Biblioteca/HeaderArea'
import { RelacionadosExternos, RelacionadosInternos } from '../../Containers/Biblioteca/RelacionadosContainer';

const Biblioteca = () => {
    return (
        <div className="container text-center justify-content-center align-items-center h-100">
            <HeaderAreaContainer />
            <h1>Biblioteca Popular Juan Martín de Pueyrredón.</h1>
            <h3>Relacionado</h3>
            <RelacionadosInternos />
            <RelacionadosExternos />
        </div>
    );
}

export { Biblioteca };