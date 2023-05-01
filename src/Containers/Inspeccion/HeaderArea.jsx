import React from 'react';
import { Button } from 'react-bootstrap';
import { CardHeaderArea } from '../../Components/Global/HeadArea';
import { HeaderInspeccion } from '../../Data/Global/ArrayHeaders';

const HeaderAreaContainer = () => {
    return (
        <div className="container text-center justify-content-center align-items-center h-100">
            <div className="row">
                {
                    HeaderInspeccion.map(card => (
                        <div className="col-xl-12 col-lg-12 col-sm-12 col-12 g-0" key={card.id}>
                            <CardHeaderArea tipo={card.tipo} area={card.area} image={card.image} telefono={card.telefono} direccion={card.direccion} dias={card.dias} horario={card.horario} email={card.email} whatsapp={card.whatsapp} facebook={card.facebook} />
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export { HeaderAreaContainer };