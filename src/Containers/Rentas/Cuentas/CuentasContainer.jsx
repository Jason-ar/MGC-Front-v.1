import React from 'react';
import { Button } from 'react-bootstrap';
import { CuentaCard } from '../../../Components/Rentas/Cuenta';
import { CuentasRentasArray } from '../../../Data/Rentas/RentasOtrosArray';

const CuentasRentasContainer = () => {
    return (
        <div className="container text-center justify-content-center align-items-center h-100">
            <div className="row">
                {
                    CuentasRentasArray.map(card => (
                        <div className="col-xl-3 col-lg-3 col-sm-3 col-4 g-1" key={card.id}>
                            <CuentaCard servicio={card.servicio} image={card.image} resumen={card.resumen} link={card.link} />
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export { CuentasRentasContainer };