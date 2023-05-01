import React from 'react';
import { Button } from 'react-bootstrap';
import { AmbulantesFAQContainer } from '../../Containers/Rentas/Ambulantes/AmbulantesFAQContainer';
import { BotonesExternos } from '../../Containers/Rentas/Ambulantes/Botones';
import { ComercioInteriorContainer } from '../../Containers/Rentas/Ambulantes/ComercioInteriorContainer';
import { HeaderAreaContainer } from '../../Containers/Rentas/HeaderArea';

const VendedoresAmbulantes = () => {
    return (
        <div className="container text-center justify-content-center align-items-center h-100">
            <HeaderAreaContainer />
            <h1>Vendedores Ambulantes</h1>
            <AmbulantesFAQContainer />
            <br></br>
            <h2>Dirección de Comercio Interior</h2>
            <ComercioInteriorContainer />
            <BotonesExternos />
        </div>
    );
}

export { VendedoresAmbulantes };