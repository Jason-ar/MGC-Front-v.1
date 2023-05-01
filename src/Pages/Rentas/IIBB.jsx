import React from 'react';
import { Button } from 'react-bootstrap';
import { IIBBContainer } from '../../Containers/Rentas/IIBB/IIBBContainer';
import { FAQContainer } from '../../Containers/Rentas/IIBB/FAQContainer';
import { RelacionadosExternos, RelacionadosInternos } from '../../Containers/Rentas/IIBB/RelacionadosContainer';

const IngresosBrutos = () => {
    return (
        <div className="container text-center justify-content-center align-items-center h-100">
            <h1>Ingresos Brutos</h1>
            <h2 className='m-1 p-2'>Categorias</h2>
            <IIBBContainer />
            <h2 className='m-1 p-2'>Ayuda</h2>
            <FAQContainer />
            <h3>Relacionado</h3>
            <RelacionadosInternos />
            <RelacionadosExternos />
           
        </div>
    );
}

export { IngresosBrutos };