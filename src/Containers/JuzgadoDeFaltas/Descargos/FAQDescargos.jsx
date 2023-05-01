import React from 'react';
import { Button } from 'react-bootstrap';
import { FAQCard } from '../../../Components/Global/FAQ';
import { FAQDescargosArray } from '../../../Data/JuzgadoDeFaltas/FAQDescargos';

const FAQDescargosContainer = () => {
    return (
        <div className="container text-center justify-content-center align-items-center h-100">
            <div className="row">
                {
                    FAQDescargosArray.map(card => (
                        <div className="col-xl-12 col-lg-12 col-sm-12 col-12 g-0" key={card.id}>
                            <FAQCard pregunta={card.pregunta} respuesta={card.respuesta} link={card.link} />
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export { FAQDescargosContainer };