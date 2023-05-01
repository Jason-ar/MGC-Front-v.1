import React from 'react';
import { CardObraTerminada } from "../../Components/Produccion/ObraTerminada";

import { ObrasTerminadasArray } from "../../Data/Obras/ObrasTerminadasArray";
///Voley
const ObrasTerminadasContainer = () => {
    return(
        <div className="container d-flex justify-content-center align-items-center h-100">
            <div className="row">
                {
                    ObrasTerminadasArray.map(card => (
                        <div className="col-xl-3 col-lg-3 col-sm-4 col-12 g-0" key={card.id}>
                            <CardObraTerminada obra={card.obra} imageSource={card.image} ubicacion={card.ubicacion} fin={card.fin} resumen={card.resumen} link={card.link} descripcion={card.descripcion} inicio={card.inicio} />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export { ObrasTerminadasContainer };
