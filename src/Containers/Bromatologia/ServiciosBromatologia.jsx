import React from 'react';
import { Button } from 'react-bootstrap';
import { BromatologiaCard } from '../../Components/Bromatologia/BromatologiaCard';
import { ArrayBromatologia } from '../../Data/Bromatologia/ArrayBromatologia';

const ServiciosBromatologiaContainer = () => {
    return (
        <div className="container text-center justify-content-center align-items-center h-100">
            
            <p></p>
                <div className="row">
                    {
                        ArrayBromatologia.map(card => (
                            <div className="col-xl-3 col-lg-3 col-sm-4 col-12 g-1" key={card.id}>
                                <BromatologiaCard servicio={card.servicio} image={card.image} resumen={card.resumen} link={card.link} />
                            </div>
                        ))
                    }
                </div>
        </div>
    );
}

export { ServiciosBromatologiaContainer };