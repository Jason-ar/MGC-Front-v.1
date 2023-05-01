import React from 'react';
import { Button } from 'react-bootstrap';
import { RequisitosCard } from '../../../Components/Inspeccion/RequisitosCard';
import { RequisitosLicenciaPersonalArray, RequisitosLicenciaProfesionalArray } from '../../../Data/Inspeccion/Licencias/FAQLicenciasArray';

const RequisitosLicenciasMenoresContainer = () => {
    return (
        <div className="container text-center justify-content-center align-items-center h-100">
            <div className="row">
                {
                    RequisitosLicenciaPersonalArray.map(card => (
                        <div className="col-xl-12 col-lg-12 col-sm-12 col-12 g-1" key={card.id}>
                           <RequisitosCard titulo={card.titulo} requisito1={card.requisito1} requisito2={card.requisito2} requisito3={card.requisito3} requisito4={card.requisito4} requisito5={card.requisito5} link={card.link} />
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

const RequisitosLicenciasPersonalesContainer = () => {
    return (
        <div className="container text-center justify-content-center align-items-center h-100">
            <div className="row">
                {
                    RequisitosLicenciaPersonalArray.map(card => (
                        <div className="col-xl-12 col-lg-12 col-sm-12 col-12 g-1" key={card.id}>
                            <RequisitosCard titulo={card.titulo} requisito1={card.requisito1} requisito2={card.requisito2} requisito3={card.requisito3} requisito4={card.requisito4} requisito5={card.requisito5} link={card.link} />
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

const RequisitosLicenciasProfesionalesContainer = () => {
    return (
        <div className="container text-center justify-content-center align-items-center h-100">
            <div className="row">
                {
                    RequisitosLicenciaProfesionalArray.map(card => (
                        <div className="col-xl-12 col-lg-12 col-sm-12 col-12 g-1" key={card.id}>
                            <RequisitosCard titulo={card.titulo} requisito1={card.requisito1} requisito2={card.requisito2} requisito3={card.requisito3} requisito4={card.requisito4} requisito5={card.requisito5} link={card.link} />
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export { RequisitosLicenciasMenoresContainer };
export { RequisitosLicenciasPersonalesContainer };
export { RequisitosLicenciasProfesionalesContainer };
