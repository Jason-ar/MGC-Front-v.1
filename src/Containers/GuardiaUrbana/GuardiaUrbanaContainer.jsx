import React from 'react';
import { GuardiaUrbanaCard } from '../../Components/GuardiaUrbana/GuardiaUrbanaCard';
import { GuardiaUrbanaArray } from '../../Data/GuardiaUrbana/GuardiaUrbanaArray';

const GuardiaUrbanaContainer = () => {
    return (
        <div className="container text-center justify-content-center align-items-center h-100">
            <p></p>
                <div className="row">
                    {
                        GuardiaUrbanaArray.map(card => (
                            <div className="col-xl-3 col-lg-3 col-sm-4 col-12 g-1" key={card.id}>
                                <GuardiaUrbanaCard titulo={card.titulo} image={card.image} resumen={card.resumen} link={card.link} />
                            </div>
                        ))
                    }
                </div>
        </div>
    );
};

export { GuardiaUrbanaContainer };