import React from 'react';
import { HeaderAreaContainer } from '../../Containers/Social/HeaderArea';
import { RelacionadosExternos, RelacionadosInternos } from '../../Containers/Social/RelacionadosContainer';


const Social = () => {
    return (
        <div className="container text-center justify-content-center align-items-center h-100">
            <HeaderAreaContainer />
            <h1>Acción Social</h1>
        </div>
    );
}

export { Social };