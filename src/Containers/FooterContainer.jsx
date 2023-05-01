import React from 'react';
import { Button } from 'react-bootstrap';
import { FooterCard } from '../Components/Global/Footer';
import { HeaderTransito } from '../Data/Global/ArrayHeaders';

const FooterContainer = () => {
    return (
        <div className="container text-center justify-content-center align-items-center h-100">
            <br></br>
            <div className="row">
                {
                    HeaderTransito.map(card => (
                        <div className="col-xl-12 col-lg-12 col-sm-12 col-12 g-0" key={card.id}>
                            <FooterCard tipo={card.tipo} area={card.area} image={card.image} telefono={card.telefono} direccion={card.direccion} dias={card.dias} horario={card.horario} email={card.email} whatsapp={card.whatsapp} facebook={card.facebook} />
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export { FooterContainer };