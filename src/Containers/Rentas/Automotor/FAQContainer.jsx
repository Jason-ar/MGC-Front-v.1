import React from 'react';
import { FAQCard } from '../../../Components/Global/FAQ';
import { FAQArray } from '../../../Data/Rentas/Automotor/FAQArray';

const FAQContainer = () => {
    return (
        <div className="container text-center justify-content-center align-items-center h-100">
        <div className="row">
            {
                FAQArray.map(card => (
                    <div className="col-xl-12 col-lg-12 col-sm-12 col-12 g-1" key={card.id}>
                        <FAQCard pregunta={card.pregunta} respuesta={card.respuesta} link={card.link} />
                    </div>
                ))
            }
        </div>
    </div>
    );
}

export { FAQContainer };