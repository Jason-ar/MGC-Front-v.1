import React from "react";
import { CardFlayer } from "../../Components/FiestaDelCaballo/Flayer";
import { FlayerFiesta, FlayerDesfile, FlayerViernes, FlayerSabado, FlayerBaile, FlayerDomingo, FlayerBingo } from '../../Data/FiestaDelCaballo/FlayersArray';


//FLAYER FIESTA DEL CABALLO
const FlayerCardContainer = () => {
    return(
        <div className="container d-flex justify-content-center align-items-center h-100">
            <div className="row">
                {
                    FlayerFiesta.map(card => (
                        <div className="col-xl-12 col-lg-12 col-sm-12 col-12 g-0" key={card.id}>
                            <CardFlayer nombre={card.nombre} imageSource={card.image} />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

//FLAYER DESFILE
const DesfileFlayerContainer = () => {
    return(
        <div className="container d-flex justify-content-center align-items-center h-100">
            <div className="row">
                {
                    FlayerDesfile.map(card => (
                        <div className="col-xl-12 col-lg-12 col-sm-12 col-12 g-0" key={card.id}>
                            <CardFlayer nombre={card.nombre} imageSource={card.image} className="m-0 p-0" />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
//FLAYER VIERNES
const ViernesFlayerContainer = () => {
    return(
        <div className="container d-flex justify-content-center align-items-center h-100">
            <div className="row">
                {
                    FlayerViernes.map(card => (
                        <div className="col-xl-12 col-lg-12 col-sm-12 col-12 g-0" key={card.id}>
                            <CardFlayer nombre={card.nombre} imageSource={card.image} />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
//FLAYER VIERNES
const SabadoFlayerContainer = () => {
    return(
        <div className="container d-flex justify-content-center align-items-center h-100">
            <div className="row">
                {
                    FlayerSabado.map(card => (
                        <div className="col-xl-12 col-lg-12 col-sm-12 col-12 g-0" key={card.id}>
                            <CardFlayer nombre={card.nombre} imageSource={card.image} />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
//FLAYER VIERNES
const BaileFlayerContainer = () => {
    return(
        <div className="container d-flex justify-content-center align-items-center h-100">
            <div className="row">
                {
                    FlayerBaile.map(card => (
                        <div className="col-xl-12 col-lg-12 col-sm-12 col-12 g-0" key={card.id}>
                            <CardFlayer nombre={card.nombre} imageSource={card.image} />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
//FLAYER VIERNES
const DomingoFlayerContainer = () => {
    return(
        <div className="container d-flex justify-content-center align-items-center h-100">
            <div className="row">
                {
                    FlayerDomingo.map(card => (
                        <div className="col-xl-12 col-lg-12 col-sm-12 col-12 g-0" key={card.id}>
                            <CardFlayer nombre={card.nombre} imageSource={card.image} />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

//FLAYER VIERNES
const BingoFlayerContainer = () => {
    return(
        <div className="container d-flex justify-content-center align-items-center h-100">
            <div className="row">
                {
                    FlayerBingo.map(card => (
                        <div className="col-xl-12 col-lg-12 col-sm-12 col-12 g-0" key={card.id}>
                            <CardFlayer nombre={card.nombre} imageSource={card.image} />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export { FlayerCardContainer };
export { DesfileFlayerContainer };
export { ViernesFlayerContainer };
export { SabadoFlayerContainer };
export { BaileFlayerContainer };
export { DomingoFlayerContainer };
export { BingoFlayerContainer };