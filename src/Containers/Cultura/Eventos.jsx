import React from "react";
import { CardEvento } from "../../Components/Cultura/Evento";
//import { Card } from '@components/Card';  
import { EventosArray } from "../../Data/Cultura/ArrayEventos";

const EventosContainer = () => {
    return(
        <div className="container d-flex justify-content-center align-items-center h-100">
            <div className="row">
                {
                    EventosArray.map(card => (
                        <div className="col-xl-3 col-lg-3 col-sm-4 col-6 g-0" key={card.id}>
                            <CardEvento area={card.area} imageSource={card.image} evento={card.evento} lugar={card.lugar} dia={card.dia} hora={card.hora}                     realizado={card.realizado} />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export { EventosContainer };