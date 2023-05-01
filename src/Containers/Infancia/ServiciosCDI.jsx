import React from 'react';
import { Button } from 'react-bootstrap';
import { CardCDI } from '../../Components/Infancia/ServicioInfancia';
import { ArrayCDI } from '../../Data/Infancia/ArrayCDI';

const ServiciosCDIContainer = () => {
    return (
        <div className="container text-center justify-content-center align-items-center h-100">
            <h2>Servicio de protección de derechos</h2>
            <p></p>
                <div className="row">
                    {
                        ArrayCDI.map(card => (
                            <div className="col-xl-3 col-lg-3 col-sm-4 col-12 g-1" key={card.id}>
                                <CardCDI titulo={card.titulo} image={card.image} resumen={card.resumen} link={card.link} />
                            </div>
                        ))
                    }
                </div>
        </div>
    );
}

export { ServiciosCDIContainer };