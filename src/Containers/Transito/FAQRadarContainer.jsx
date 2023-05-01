import React from 'react';
import { Button } from 'react-bootstrap';
import { FAQCard } from '../../Components/Global/FAQ';
import { FAQRadarArray } from '../../Data/Transito/FAQRadarArray';

const FAQRadarContainer = () => {
    return (
        <div className="container text-center justify-content-center align-items-center h-100">
            <div className="row">
                {
                    FAQRadarArray.map(card => (
                        <div className="col-xl-6 col-lg-6 col-sm-6 col-12 g-1" key={card.id}>
                            <FAQCard pregunta={card.pregunta} respuesta={card.respuesta} link={card.link} />
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export { FAQRadarContainer };