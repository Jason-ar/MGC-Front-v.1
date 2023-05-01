import React from 'react';
import { Button } from 'react-bootstrap';
import { VelocidadCard } from '../../Components/Transito/VelocidadCard';
import { MaximasArray, MaximasEspecialesArray } from '../../Data/Transito/TransitoArray';

const VelocidadesMaximasContainer = () => {
    return (
        <div className="container text-center justify-content-center align-items-center h-100">
                <div className="row rouded-20">
                    {
                        MaximasArray.map(card => (
                            <div className="col-xl-2 col-lg-2 col-sm-3 col-4 g-1" key={card.id}>
                                <VelocidadCard velocidad={card.velocidad} lugar={card.lugar} />
                            </div>
                        ))
                    }
                </div>
        </div>
    );
};


const MaximasEspecialesContainer = () => {
    return (
        <div className="container text-center justify-content-center align-items-center h-100">
                <div className="row">
                    {
                        MaximasEspecialesArray.map(card => (
                            <div className="col-xl-3 col-lg-3 col-sm-4 col-6 g-1" key={card.id}>
                                <VelocidadCard velocidad={card.velocidad} lugar={card.lugar} />
                            </div>
                        ))
                    }
                </div>
        </div>
    );
};


export { VelocidadesMaximasContainer };
export { MaximasEspecialesContainer };