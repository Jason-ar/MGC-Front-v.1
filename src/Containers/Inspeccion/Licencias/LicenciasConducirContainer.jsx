import React from 'react';
import { Button } from 'react-bootstrap';
import { LicenciaConductorCard } from '../../../Components/Inspeccion/LicenciaConductor';
import { LicenciasMenoresArray, LicenciasPersonalesArray, LicenciasProfesionalesArray } from '../../../Data/Inspeccion/Licencias/LicenciasArray';

const LicenciasMenoresContainer = () => {
    return (
        <div className="container text-center justify-content-center align-items-center h-100">
            <div className="row" styles= " box-shadow: 5px 10px 20px 1px rgba(255, 255, 255, 0.2)">
                {
                    LicenciasMenoresArray.map(card => (
                        <div className="col-xl-12 col-lg-12 col-sm-12 col-12 g-1" key={card.id} styles= "box-shadow: 5px 10px 20px 1px rgba(255, 255, 255, 0.2)">
                            <LicenciaConductorCard edad={card.edad} image={card.image} vigencia={card.vigencia} detalle={card.detalle} tipo={card.tipo} link={card.link} />
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

const LicenciasPersonalesContainer = () => {
    return (
        <div className="container text-center justify-content-center align-items-center h-100">
            <div className="row">
                {
                    LicenciasPersonalesArray.map(card => (
                        <div className="col-xl-3 col-lg-3 col-sm-4 col-6 g-1" key={card.id}>
                            <LicenciaConductorCard edad={card.edad} image={card.image} vigencia={card.vigencia} detalle={card.detalle} tipo={card.tipo} link={card.link} />
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

const LicenciasProfesionalesContainer = () => {
    return (
        <div className="container text-center justify-content-center align-items-center h-100">
            <div className="row">
                {
                    LicenciasProfesionalesArray.map(card => (
                        <div className="col-xl-6 col-lg-6 col-sm-6 col-6 g-1" key={card.id}>
                            <LicenciaConductorCard edad={card.edad} image={card.image} vigencia={card.vigencia} detalle={card.detalle} tipo={card.tipo} link={card.link} />
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export { LicenciasMenoresContainer };
export { LicenciasPersonalesContainer };
export { LicenciasProfesionalesContainer };