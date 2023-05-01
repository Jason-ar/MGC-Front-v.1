import React from 'react';
import { Button } from 'react-bootstrap';
import { ComercioInteriorCard } from '../../../Components/Rentas/AmbulanteCard';
import { ComercioInteriorArray } from '../../../Data/Rentas/Ambulantes/ComercioInteriorArray';

const ComercioInteriorContainer = () => {
    return (
        <div className="container text-center justify-content-center align-items-center h-100">
            <div className="row">
                {
                    ComercioInteriorArray.map(card => (
                        <div className="col-xl-3 col-lg-4 col-sm-6 col-6 g-1" key={card.id}>
                            <ComercioInteriorCard contacto={card.contacto}detalle={card.detalle} telefono={card.telefono}  />
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export { ComercioInteriorContainer };