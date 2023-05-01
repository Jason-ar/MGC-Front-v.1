import React from 'react';
import { Button } from 'react-bootstrap';
import { CardAdultos } from '../../Components/Adultos/ServicioAdulto';
import { ArrayAdultos } from '../../Data/Adultos/ArrayAdultos';

const ServiciosAdultosContainer = () => {
    return (
        <div className="container text-center justify-content-center align-items-center h-100">
            
            <p></p>
                <div className="row">
                    {
                        ArrayAdultos.map(card => (
                            <div className="col-xl-3 col-lg-3 col-sm-4 col-12 g-1" key={card.id}>
                                <CardAdultos titulo={card.titulo} image={card.image} resumen={card.resumen} link={card.link} />
                            </div>
                        ))
                    }
                </div>
        </div>
    );
}

export { ServiciosAdultosContainer };