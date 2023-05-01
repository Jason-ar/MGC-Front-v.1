import React from 'react';
import { Button } from 'react-bootstrap';
import { CardConcejal } from '../../Components/HCD/Concejal';
import { ArrayConcejales } from '../../Data/HCD/ArrayConcejales';

const ConcejalesContainer = () => {
    return (
        <div className="container text-center justify-content-center align-items-center h-100">
            <h2>Servicio de protección de derechos</h2>
            <p></p>
                <div className="row">
                    {
                        ArrayConcejales.map(card => (
                            <div className="col-xl-3 col-lg-3 col-sm-4 col-12 g-1" key={card.id}>
                                <CardConcejal bloque={card.bloque} concejal={card.concejal} image={card.image} puesto={card.puesto} tipo={card.tipo} link={card.link} />
                            </div>
                        ))
                    }
                </div>
        </div>
    );
}

export { ConcejalesContainer };