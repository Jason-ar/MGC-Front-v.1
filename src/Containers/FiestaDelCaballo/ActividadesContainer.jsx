import React from "react";
import { CardArtista, PhoneCardArtista } from "../../Components/FiestaDelCaballo/Artista";
import { ActividadesCards } from "../../Data/FiestaDelCaballo/ArrayArtistas";

//ACTIVIDADES CARDS DEKSTOP
const ActividadesContainer = () => {
    return(
        <div className="container d-flex justify-content-center align-items-center h-100">
            <div className="row">
                {
                    ActividadesCards.map(card => (
                        <div className="col-xl-3 col-lg-3 col-sm-4 col-4 g-0" key={card.id}>
                            <CardArtista nombre={card.nombre} imageSource={card.image} evento={card.evento} lugar={card.lugar} dia={card.dia} hora={card.hora}                     realizado={card.realizado} rubroartista={card.rubroartista} />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

//ACTIVIDADES CARDS PHONE
const PhoneActividadesContainer = () => {
    return(
        <div className="container d-flex justify-content-center align-items-center h-100">
            <div className="row">
                {
                    ActividadesCards.map(card => (
                        <div className="col-xl-3 col-lg-3 col-sm-4 col-4 g-0" key={card.id}>
                            <PhoneCardArtista nombre={card.nombre} imageSource={card.image} evento={card.evento} lugar={card.lugar} dia={card.dia} hora={card.hora}                     realizado={card.realizado} rubroartista={card.rubroartista} />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export { ActividadesContainer };
export { PhoneActividadesContainer };