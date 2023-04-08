import React from "react";
import { CardArtista, PhoneCardArtista } from "../../Components/FiestaDelCaballo/Artista";
import { EscenarioArtistasArray, NocheDeFolkloreArtistasArray } from "../../Data/FiestaDelCaballo/ArtistasArray";
import { PayadoresArray } from "../../Data/FiestaDelCaballo/PayadoresArray";

//MANGRULLO CARDS DEKSTOP
const PayadoresContainer = () => {
    
    return(
        <div className="container d-inline justify-content-center align-items-center">
            <div className="row">
                {
                    PayadoresArray.map(card => (
                        <div className="d-inline-flex col-xl-3 col-lg-3 col-sm-4 col-4 g-0" key={card.id}>
                            <CardArtista nombre={card.nombre} imageSource={card.image} evento={card.evento} lugar={card.lugar} dia={card.dia} hora={card.hora}                     realizado={card.realizado} rubroartista={card.rubroartista} />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

//NOCHE DE FOLKLORE VIERNES
const NocheDeFolkloreArtistasContainer = () => {
    return(
        <div className="container d-inline justify-content-center align-items-center">
            <div className="row">
                {
                    NocheDeFolkloreArtistasArray.map(card => (
                        <div className="d-inline-flex col-xl-3 col-lg-3 col-sm-4 col-4 g-0" key={card.id}>
                            <CardArtistas nombre={card.nombre} imageSource={card.image} evento={card.evento} lugar={card.lugar} dia={card.dia} hora={card.hora}                     realizado={card.realizado} rubroartista={card.rubroartista} />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

//MANGRULLO CARDS PHONE
const PhoneArtistasContainer = () => {
    return(
        <div className="container d-inline justify-content-center align-items-center bg-primary">
            <div className="row">
                {
                    EscenarioArtistasArray.map(card => (
                        <div className="d-inline-flex col-xl-3 col-lg-3 col-sm-4 col-4 g-0" key={card.id}>
                            <PhoneCardArtista nombre={card.nombre} imageSource={card.image} evento={card.evento} lugar={card.lugar} dia={card.dia} hora={card.hora}                     realizado={card.realizado} rubroartista={card.rubroartista} />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

//ESCENARIO MAYOR CARDS DEKSTOP
const EscenarioArtistasContainer = () => {
    return(
        <div className="container d-flex justify-content-center align-items-center h-100">
            <div className="row">
                {
                    EscenarioArtistasArray.map(card => (
                        <div className="col-xl-3 col-lg-3 col-sm-4 col-4 g-0" key={card.id}>
                            <CardArtistas nombre={card.nombre} imageSource={card.image} evento={card.evento} lugar={card.lugar} dia={card.dia} hora={card.hora}                     realizado={card.realizado} rubroartista={card.rubroartista} />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

//ESCENARIO MAYOR CARDS PHONE
const PhoneEscenarioArtistasContainer = () => {
    return(
        <div className="container d-flex justify-content-center align-items-center h-100">
            <div className="row">
                {
                    EscenarioArtistasCards.map(card => (
                        <div className="col-xl-3 col-lg-3 col-sm-4 col-4 g-0" key={card.id}>
                            <PhoneCardArtista nombre={card.nombre} imageSource={card.image} evento={card.evento} lugar={card.lugar} dia={card.dia} hora={card.hora}                     realizado={card.realizado} rubroartista={card.rubroartista} />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}


export { PayadoresContainer };
export { NocheDeFolkloreArtistasContainer };
export { PhoneArtistasContainer };
export { EscenarioArtistasContainer };
export { PhoneEscenarioArtistasContainer };