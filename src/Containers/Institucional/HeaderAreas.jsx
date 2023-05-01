import React from 'react';
import { Button } from 'react-bootstrap';
import { CardHeaderArea } from '../../Components/Institucional/Head';
import { ArrayAreasYDependencias } from '../../Data/Institucional/ArrayAreasYDependencias';
const HeaderAreasContainer = () => {
    return (
        <div className="container text-center justify-content-center align-items-center h-100">
                <div className="row">
                    {
                        ArrayAreasYDependencias.map(card => (
                            <div className="col-xl-3 col-lg-3 col-sm-4 col-12 g-1" key={card.id}>
                                <CardHeaderArea tipo={card.tipo} area={card.area} image={card.image} responsable={card.responsable} telefono={card.telefono} horario={card.horario} direccion={card.direccion} link={card.link} />
                            </div>
                        ))
                    }
                </div>
        </div>
    );
}

export { HeaderAreasContainer };