import React from 'react';
import { HeaderAreaContainer } from '../../Containers/GuardiaUrbana/HeaderArea';
import { RelacionadosExternos, RelacionadosInternos } from '../../Containers/GuardiaUrbana/RelacionadosContainer';

const GuardiaUrbana = () => {
    return (
        <div className="container text-center justify-content-center align-items-center h-100">
            <HeaderAreaContainer />
            <h1>Guardia Urbana.</h1>
            
            <p>https://web.facebook.com/guardia.urbana.904</p>
        </div>
    );
}

export { GuardiaUrbana };