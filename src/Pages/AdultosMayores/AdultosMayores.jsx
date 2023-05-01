import React from 'react';
import { ServiciosAdultosContainer } from '../../Containers/Adultos/ServiciosAdultos'
import { RelacionadosExternos, RelacionadosInternos } from '../../Containers/Adultos/RelacionadosContainer';

const AdultosMayores = () => {
    return (
        <div className="container text-center justify-content-center align-items-center h-100">
            <h1>Club de día de Adultos Mayores.</h1>
            <h2>Servicios del club de día</h2>
            <p>Servicios y actividades del Club de Día</p>
            <ServiciosAdultosContainer />
            <h3>Relacionado</h3>
            <RelacionadosInternos />
            <RelacionadosExternos />
        </div>
    );
}

export { AdultosMayores };