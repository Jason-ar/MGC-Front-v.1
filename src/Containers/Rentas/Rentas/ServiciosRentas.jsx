import React from 'react';
import { Button } from 'react-bootstrap';
import { RentasCard } from '../../../Components/Rentas/RentasCard';
import { RentasArray } from '../../../Data/Rentas/RentasArray';

const ServiciosRentasContainer = () => {
    return (
        <div className="container text-center justify-content-center align-items-center h-100">
            <div className="row">
                {
                    RentasArray.map(card => (
                        <div className="col-xl-3 col-lg-3 col-sm-4 col-6 g-1" key={card.id}>
                            <RentasCard servicio={card.servicio} image={card.image} resumen={card.resumen} link={card.link} />
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export { ServiciosRentasContainer };