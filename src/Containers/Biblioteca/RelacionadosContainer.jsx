import React from 'react';
import { InternoCard, ExternoCard } from '../../Components/Global/RelacionadoCard';
import { InternosArray, ExternosArray } from '../../Data/Biblioteca/RelacionadosArray';

const RelacionadosInternos = () => {
    return (
        <div className="container text-center justify-content-center align-items-center h-100 m-1">
            <div className="row">
                {
                    InternosArray.map(card => (
                        <div className="col-xl-4 col-lg-4 col-sm-4 col-12 g-1" key={card.id}>
                            <InternoCard titulo={card.titulo} link={card.link} />
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

const RelacionadosExternos = () => {
    return (
        <div className="container text-center justify-content-center align-items-center h-100 m-1">
            <div className="row">
                {
                    ExternosArray.map(card => (
                        <div className="col-xl-4 col-lg-4 col-sm-4 col-12 g-1" key={card.id}>
                            <ExternoCard titulo={card.titulo} link={card.link} />
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export { RelacionadosInternos };
export { RelacionadosExternos };