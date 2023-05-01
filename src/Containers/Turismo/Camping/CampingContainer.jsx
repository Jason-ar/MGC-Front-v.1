import React from 'react';
import { Button } from 'react-bootstrap';
import { CampingCard } from '../../../Components/Turismo/CampingCard';
import { CampingArray } from '../../../Data/Turismo/Camping/CampingArray';

const ServiciosCampingContainer = () => {
    return (
        <div className="container text-center justify-content-center align-items-center h-100">
            <div className="row">
                {
                    CampingArray.map(card => (
                        <div className="col-xl-3 col-lg-3 col-sm-4 col-6 g-1" key={card.id}>
                            <CampingCard servicio={card.servicio} image={card.image} resumen={card.resumen} link={card.link} />
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export { ServiciosCampingContainer };