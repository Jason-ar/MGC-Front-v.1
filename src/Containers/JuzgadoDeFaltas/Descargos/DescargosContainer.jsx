import React from 'react';
import { Button } from 'react-bootstrap';
import { DescargoCard } from '../../../Components/JuzgadoDeFaltas/DescargoCard';
import { DescargosArray } from '../../../Data/JuzgadoDeFaltas/DescargosArray';

const DescargosContainer = () => {
    return (
        <div className="container text-center justify-content-center align-items-center h-100">
            
            <p></p>
                <div className="row">
                    {
                        DescargosArray.map(card => (
                            <div className="col-xl-3 col-lg-3 col-sm-4 col-6 g-1" key={card.id}>
                                <DescargoCard descargo={card.descargo} subtitulo={card.subtitulo} image={card.image} resumen={card.resumen} link={card.link} />
                            </div>
                        ))
                    }
                </div>
        </div>
    );
}

export { DescargosContainer };