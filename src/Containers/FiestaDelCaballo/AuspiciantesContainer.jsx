import React from "react";
import { CardAuspiciante } from "../../Components/FiestaDelCaballo/Auspiciante";
import { AuspiciantesArray } from "../../Data/FiestaDelCaballo/AuspiciantesArray";

//MANGRULLO CARDS DEKSTOP
const AuspiciantesContainer = () => {
    return(
        <div className="container d-inline justify-content-center align-items-center">
            <div className="row">
                {
                    AuspiciantesArray.map(card => (
                        <div className="d-inline-flex col-xxl-6 col-xl-4 col-lg-4 col-sm-4 col-6 g-0" key={card.id}>
                            <CardAuspiciante nombre={card.nombre} imageSource={card.image} rubro={card.rubro} direccion={card.direccion} ciudad={card.ciudad} />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export { AuspiciantesContainer };