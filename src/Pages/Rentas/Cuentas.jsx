import React from 'react';
import { Button } from 'react-bootstrap';
import { CuentasRentasContainer } from '../../Containers/Rentas/Cuentas/CuentasContainer';
import { RelacionadosExternos, RelacionadosInternos } from '../../Containers/Rentas/Cuentas/RelacionadosContainer';

const Cuentas = () => {
    return (
        <div className="container text-center justify-content-center align-items-center h-100">
            <HeaderAreaContainer />
            <h1>Cuentas Municipalidad de Gobernador Costa</h1>
            <CuentasRentasContainer />
            <br></br>
            <h3>Relacionado</h3>
            <RelacionadosInternos />
            <RelacionadosExternos />
        </div>
    );
}

export { Cuentas };