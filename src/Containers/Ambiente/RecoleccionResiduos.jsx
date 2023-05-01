import React from 'react';
import { Button } from 'react-bootstrap';
import { RecoleccionCard } from '../../Components/Ambiente/RecoleccionCard';
import { RecoleccionArray } from '../../Data/Ambiente/RecoleccionArray';

const RecoleccionResiduosContainer = () => {
    return (
        <div className="container text-center justify-content-center align-items-center h-100">
            
            <p></p>
                <div className="row">
                    {
                        RecoleccionArray.map(card => (
                            <div className="col-xl-4 col-lg-4 col-sm-4 col-12 g-1" key={card.id}>
                                <RecoleccionCard servicio={card.servicio} image={card.image} resumen={card.resumen} link={card.link} subtitulo={card.subtitulo} />
                            </div>
                        ))
                    }
                </div>
        </div>
    );
}

export { RecoleccionResiduosContainer };