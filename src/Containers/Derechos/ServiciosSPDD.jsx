import React from 'react';
import { Button } from 'react-bootstrap';
import { CardSPDD } from '../../Components/Derechos/ServicioSPDD';
import { ArraySPDD } from '../../Data/Derechos/ArraySPDD';

const ServiciosSPDDContainer = () => {
    return (
        <div className="container text-center justify-content-center align-items-center h-100">
            <h2>Servicio de protección de derechos</h2>
            <p></p>
                <div className="row">
                    {
                        ArraySPDD.map(card => (
                            <div className="col-xl-3 col-lg-3 col-sm-4 col-12 g-1" key={card.id}>
                                <CardSPDD titulo={card.titulo} image={card.image} resumen={card.resumen} link={card.link} />
                            </div>
                        ))
                    }
                </div>
        </div>
    );
}

export { ServiciosSPDDContainer };