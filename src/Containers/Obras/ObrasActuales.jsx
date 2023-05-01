import React from 'react';
import { CardObraActual } from "../../Components/Produccion/ObraActual";

import { ObrasActualesArray } from "../../Data/Obras/ObrasActualesArray";
///Voley
const ObrasActualesContainer = () => {
    return(
        <div className="container d-flex justify-content-center align-items-center h-100">
            <div className="row">
                {
                    ObrasActualesArray.map(card => (
                        <div className="col-xl-3 col-lg-3 col-sm-4 col-12 g-0" key={card.id}>
                            <CardObraActual obra={card.obra} descripcion={card.descripcion} imageSource={card.image} ubicacion={card.ubicacion} inicio={card.inicio} resumen={card.resumen} link={card.link}/>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export { ObrasActualesContainer };
