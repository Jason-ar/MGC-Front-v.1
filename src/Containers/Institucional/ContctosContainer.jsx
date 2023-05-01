import React from 'react';
import { Button } from 'react-bootstrap';
import { CardArea } from '../../Components/Institucional/Area';
import { ContactosArray } from '../../Data/Institucional/ContactosArray';
const AreasYDependenciasContainer = () => {
    return (
        <div className="container text-center justify-content-center align-items-center h-100">
            <h2>Servicio de protección de derechos</h2>
            <p></p>
                <div className="row">
                    {
                        ContactosArray.map(card => (
                            <div className="col-xl-3 col-lg-3 col-sm-4 col-12 g-1" key={card.id}>
                                <CardArea tipo={card.tipo} area={card.area} image={card.image} responsable={card.responsable} telefono={card.telefono} horario={card.horario} direccion={card.direccion} link={card.link} />
                            </div>
                        ))
                    }
                </div>
        </div>
    );
}

export { AreasYDependenciasContainer };