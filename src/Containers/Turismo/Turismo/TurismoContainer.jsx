import React from 'react';
import { Button } from 'react-bootstrap';
import { TurismoCard } from '../../../Components/Turismo/TurismoCard';
import { TurismoArray } from '../../../Data/Turismo/TurismoArray';

const ServiciosTurismoContainer = () => {
    return (
        <div className="container text-center justify-content-center align-items-center h-100">
            <div className="row">
                {
                    TurismoArray.map(card => (
                        <div className="col-xl-3 col-lg-3 col-sm-4 col-6 g-1" key={card.id}>
                            <TurismoCard servicio={card.servicio} image={card.image} resumen={card.resumen} link={card.link} />
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export { ServiciosTurismoContainer };