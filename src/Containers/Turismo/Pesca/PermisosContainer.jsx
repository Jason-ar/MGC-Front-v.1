import React from 'react';
import { Button } from 'react-bootstrap';
import { PermisoCard } from '../../../Components/Turismo/PermisoCard';
import { PermisosArray } from '../../../Data/Turismo/Pesca/PermisosArray';

const PermisosContainer = () => {
    return (
        <div className="container text-center justify-content-center align-items-center h-100">
            <div className="row">
                {
                    PermisosArray.map(card => (
                        <div className="col-xl-3 col-lg-3 col-sm-4 col-6 g-1" key={card.id}>
                            <PermisoCard servicio={card.servicio} valor={card.valor} link={card.link} />
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export { PermisosContainer };