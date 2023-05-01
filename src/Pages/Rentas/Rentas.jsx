import React from 'react';
import { DescuentosContainer } from '../../Containers/Rentas/DescuentosContainer';
import { IIBBContainer } from '../../Containers/Rentas/IIBB/IIBBContainer';
import { HeaderAreaContainer } from '../../Containers/Rentas/HeaderArea';
import { ServiciosRentasContainer } from '../../Containers/Rentas/ServiciosRentas';

const Rentas = () => {
    return (
        <div className="container text-center justify-content-center align-items-center h-100">
            <HeaderAreaContainer />
            <ServiciosRentasContainer />
            <DescuentosContainer />
        </div>
    );
}

export { Rentas };