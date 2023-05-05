import React from 'react';
import { Button } from 'react-bootstrap';
import { AtmosfericoCard } from '../../../Components/Rentas/AtmosfericoCard';
import { AtmosfericoArray } from '../../../Data/Rentas/Atmosferico/AtmosfericoArray';

const ServiciosAtmosfericoContainer = () => {
    return (
        <div className="container text-center justify-content-center align-items-center h-100">
            
            <p></p>
                <div className="row">
                    {
                        AtmosfericoArray.map(card => (
                            <div className="col-xl-3 col-lg-3 col-sm-4 col-6 g-1" key={card.id}>
                                <AtmosfericoCard servicio={card.servicio} image={card.image} resumen={card.resumen} link={card.link} />
                            </div>
                        ))
                    }
                </div>
        </div>
    );
}

export { ServiciosAtmosfericoContainer };