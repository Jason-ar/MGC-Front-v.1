import React from "react";
import { CardStand } from "../../Components/FiestaDelCaballo/Stand";
import { StandsArray } from "../../Data/FiestaDelCaballo/StandsArray";

//MANGRULLO CARDS DEKSTOP
const StandsContainer = () => {
    return(
        <div className="container d-inline justify-content-center align-items-center">
            <div className="row">
                {
                    StandsArray.map(card => (
                        <div className="d-inline-flex col-xxl-6 col-xl-4 col-lg-4 col-sm-4 col-6 g-0" key={card.id}>
                            <CardStand nombre={card.nombre} imageSource={card.image} rubro={card.rubro} direccion={card.direccion} ciudad={card.ciudad} />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export { StandsContainer };