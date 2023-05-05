import React from 'react';
import { DescuentosContainer } from '../../Containers/Rentas/Rentas/DescuentosContainer';
import { HeaderAreaContainer } from '../../Containers/Rentas/Rentas/HeaderArea';
import { ServiciosRentasContainer } from '../../Containers/Rentas/Rentas/ServiciosRentas';

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