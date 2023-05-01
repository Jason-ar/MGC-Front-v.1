import React from 'react';
import { TransitoCard } from '../../Components/Transito/TransitoCard';
import { RadarArray } from '../../Data/Transito/RadarArray';


//import { ConductoresCardsContainer } from '../templates/inspeccion/ConductoresCardsContainer';

const InfraccionContainer = () => {
    return (
        <div className="container text-center justify-content-center align-items-center h-100">
            <p>Si recibiste una notificaión de infracción por exceso de velocidad, podes:</p>
            <div className="row">
                    {
                        RadarArray.map(card => (
                            <div className="col-xl-6 col-lg-6 col-sm-6 col-6 g-1" key={card.id}>
                                <TransitoCard titulo={card.titulo} subtitulo={card.subtitulo} link={card.link}/>
                            </div>
                        ))
                    }
                </div>
        </div>
    );
}

export { InfraccionContainer };