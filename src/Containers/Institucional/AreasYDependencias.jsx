import React from 'react';
import { Button } from 'react-bootstrap';
import { CardArea } from '../../Components/Institucional/Area';
import { ArrayAreasYDependencias } from '../../Data/Institucional/ArrayAreasYDependencias';
const AreasYDependenciasContainer = () => {
    return (
        <div className="container text-center justify-content-center align-items-center h-100">
            <h2>Servicio de protección de derechos</h2>
            <p></p>
                <div className="row">
                    {
                        ArrayAreasYDependencias.map(card => (
                            <div className="col-xl-2 col-lg-3 col-sm-4 col-6 g-1" key={card.id}>
                                <CardArea tipo={card.tipo} area={card.area} image={card.image} responsable={card.responsable} telefono={card.telefono} horario={card.horario} direccion={card.direccion} link={card.link} />
                            </div>
                        ))
                    }
                </div>
        </div>
    );
}

export { AreasYDependenciasContainer };