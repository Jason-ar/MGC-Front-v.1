import React from 'react';
import { Button } from 'react-bootstrap';
import { TransitoCard } from '../../Components/Transito/TransitoCard';
import { LegislacionArray } from '../../Data/Transito/RadarArray';

const LegislacionContainer = () => {
    return (
        <div className="container text-center justify-content-center align-items-center h-100">
            <div className="row">
                {
                    LegislacionArray.map(card => (
                        <div className="col-xl-4 col-lg-4 col-sm-4 col-12 g-1" key={card.id}>
                            <TransitoCard titulo={card.titulo} servicio={card.servicio} subtitulo={card.subtitulo} link={card.link} />
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export { LegislacionContainer };