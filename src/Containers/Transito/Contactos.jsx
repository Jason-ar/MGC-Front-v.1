import React from 'react';
import { Button } from 'react-bootstrap';
import { ContactoCard } from '../../Components/Transito/ContactosCard';
import { TransitoContactosArray } from '../../Data/Transito/RadarArray';

const ContactosContainer = () => {
    return (
        <div className="container text-center justify-content-center align-items-center h-100">
                <div className="row">
                    {
                        TransitoContactosArray.map(card => (
                            <div className="col-xl-3 col-lg-3 col-sm-4 col-12 g-1" key={card.id}>
                                <ContactoCard titulo={card.titulo} image={card.image} contacto1={card.contacto1} telefono1={card.telefono1} email={card.email} link={card.link} />
                            </div>
                        ))
                    }
                </div>
        </div>
    );
}

export { ContactosContainer };