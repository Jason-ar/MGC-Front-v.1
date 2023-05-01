import React from 'react';
import { CardProfesor } from "../../Components/Deportes/Profesor";

import { ArrayProfesores } from "../../Data/Deportes/ArrayProfesores";
///Voley
const ProfesoresContainer = () => {
    return(
        <div className="container d-flex justify-content-center align-items-center h-100">
            <div className="row">
                {
                    ArrayProfesores.map(card => (
                        <div className="col-xl-3 col-lg-3 col-sm-4 col-12 g-1" key={card.id}>
                            <CardProfesor nombre={card.nombre} image={card.image} formacion={card.formacion} talleres={card.talleres}
                            telefono={card.telefono} link={card.link} />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export { ProfesoresContainer };
