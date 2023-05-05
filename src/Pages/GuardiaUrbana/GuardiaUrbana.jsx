import React from 'react';
import { GuardiaUrbanaContainer } from '../../Containers/GuardiaUrbana/GuardiaUrbanaContainer';
import { HeaderAreaContainer } from '../../Containers/GuardiaUrbana/HeaderArea';
import { RelacionadosExternos, RelacionadosInternos } from '../../Containers/GuardiaUrbana/RelacionadosContainer';

const GuardiaUrbana = () => {
    return (
        <div className="container text-center justify-content-center align-items-center h-100">
            <HeaderAreaContainer />
            <h1>Guardia Urbana.</h1>
            <GuardiaUrbanaContainer />
            <p>https://web.facebook.com/guardia.urbana.904</p>
            <br></br>
            <h3>Relacionado</h3>
            <RelacionadosInternos />
            <RelacionadosExternos />
        </div>
    );
}

export { GuardiaUrbana };