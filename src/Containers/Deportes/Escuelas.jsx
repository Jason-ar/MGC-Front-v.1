import React from "react";
//import { Card } from '../components/Card';  
import { CardEscuela } from "../../Components/Deportes/Escuela";

import { ArrayAcrobacias, ArrayAtletismo, ArrayBamp, ArrayBasquet, ArrayBoxeo, ArrayFutbol, ArrayGimnasia, ArrayHandball, ArrayHockey, ArrayKarate, ArrayNewcom, ArrayTenis, ArrayVoley } from "../../Data/Deportes/ArrayEscuelas";

///Acrobacias
const AcrobaciasContainer = () => {
    return(
        <div className="container d-flex justify-content-center align-items-center h-100">
            <div className="row">
                {
                    ArrayAcrobacias.map(card => (
                        <div className="col-xl-3 col-lg-3 col-sm-4 col-12 g-0" key={card.id}>
                            <CardEscuela area={card.area} imageSource={card.image} disciplina={card.disciplina} edad={card.edad} rama={card.rama} lugar={card.lugar} dias={card.dias} horario={card.horario} inicio={card.inicio} profesor={card.profesor}
                            contacto={card.contacto} />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
///Atletismo
const AtletismoContainer = () => {
    return(
        <div className="container d-flex justify-content-center align-items-center h-100">
            <div className="row">
                {
                    ArrayAtletismo.map(card => (
                        <div className="col-xl-3 col-lg-3 col-sm-4 col-12 g-0" key={card.id}>
                            <CardEscuela area={card.area} imageSource={card.image} disciplina={card.disciplina} edad={card.edad} rama={card.rama} lugar={card.lugar} dias={card.dias} horario={card.horario} inicio={card.inicio} profesor={card.profesor}
                            contacto={card.contacto} />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
///Bamp
const BampContainer = () => {
    return(
        <div className="container d-flex justify-content-center align-items-center h-100">
            <div className="row">
                {
                    ArrayBamp.map(card => (
                        <div className="col-xl-3 col-lg-3 col-sm-4 col-12 g-0" key={card.id}>
                            <CardEscuela area={card.area} imageSource={card.image} disciplina={card.disciplina} edad={card.edad} rama={card.rama} lugar={card.lugar} dias={card.dias} horario={card.horario} inicio={card.inicio} profesor={card.profesor}
                            contacto={card.contacto} />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
///Basquet
const BasquetContainer = () => {
    return(
        <div className="container d-flex justify-content-center align-items-center h-100">
            <div className="row">
                {
                    ArrayBasquet.map(card => (
                        <div className="col-xl-3 col-lg-3 col-sm-4 col-12 g-0" key={card.id}>
                            <CardEscuela area={card.area} imageSource={card.image} disciplina={card.disciplina} edad={card.edad} rama={card.rama} lugar={card.lugar} dias={card.dias} horario={card.horario} inicio={card.inicio} profesor={card.profesor}
                            contacto={card.contacto} />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
///Boxeo
const BoxeoContainer = () => {
    return(
        <div className="container d-flex justify-content-center align-items-center h-100">
            <div className="row">
                {
                    ArrayBoxeo.map(card => (
                        <div className="col-xl-3 col-lg-3 col-sm-4 col-12 g-0" key={card.id}>
                            <CardEscuela area={card.area} imageSource={card.image} disciplina={card.disciplina} edad={card.edad} rama={card.rama} lugar={card.lugar} dias={card.dias} horario={card.horario} inicio={card.inicio} profesor={card.profesor}
                            contacto={card.contacto} />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
///Futbol
const FutbolContainer = () => {
    return(
        <div className="container d-flex justify-content-center align-items-center h-100">
            <div className="row">
                {
                    ArrayFutbol.map(card => (
                        <div className="col-xl-3 col-lg-3 col-sm-4 col-12 g-0" key={card.id}>
                            <CardEscuela area={card.area} imageSource={card.image} disciplina={card.disciplina} edad={card.edad} rama={card.rama} lugar={card.lugar} dias={card.dias} horario={card.horario} inicio={card.inicio} profesor={card.profesor}
                            contacto={card.contacto} />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
///Gimnasia
const GimnasiaContainer = () => {
    return(
        <div className="container d-flex justify-content-center align-items-center h-100">
            <div className="row">
                {
                    ArrayGimnasia.map(card => (
                        <div className="col-xl-3 col-lg-3 col-sm-4 col-12 g-0" key={card.id}>
                            <CardEscuela area={card.area} imageSource={card.image} disciplina={card.disciplina} edad={card.edad} rama={card.rama} lugar={card.lugar} dias={card.dias} horario={card.horario} inicio={card.inicio} profesor={card.profesor}
                            contacto={card.contacto} />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
///Handball
const HandballContainer = () => {
    return(
        <div className="container d-flex justify-content-center align-items-center h-100">
            <div className="row">
                {
                    ArrayHandball.map(card => (
                        <div className="col-xl-3 col-lg-3 col-sm-4 col-12 g-0" key={card.id}>
                            <CardEscuela area={card.area} imageSource={card.image} disciplina={card.disciplina} edad={card.edad} rama={card.rama} lugar={card.lugar} dias={card.dias} horario={card.horario} inicio={card.inicio} profesor={card.profesor}
                            contacto={card.contacto} />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
///Hockey
const HockeyContainer = () => {
    return(
        <div className="container d-flex justify-content-center align-items-center h-100">
            <div className="row">
                {
                    ArrayHockey.map(card => (
                        <div className="col-xl-3 col-lg-3 col-sm-4 col-12 g-0" key={card.id}>
                            <CardEscuela area={card.area} imageSource={card.image} disciplina={card.disciplina} edad={card.edad} rama={card.rama} lugar={card.lugar} dias={card.dias} horario={card.horario} inicio={card.inicio} profesor={card.profesor}
                            contacto={card.contacto} />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
///Karate
const KarateContainer = () => {
    return(
        <div className="container d-flex justify-content-center align-items-center h-100">
            <div className="row">
                {
                    ArrayKarate.map(card => (
                        <div className="col-xl-3 col-lg-3 col-sm-4 col-12 g-0" key={card.id}>
                            <CardEscuela area={card.area} imageSource={card.image} disciplina={card.disciplina} edad={card.edad} rama={card.rama} lugar={card.lugar} dias={card.dias} horario={card.horario} inicio={card.inicio} profesor={card.profesor}
                            contacto={card.contacto} />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
///Newcom
const NewcomContainer = () => {
    return(
        <div className="container d-flex justify-content-center align-items-center h-100">
            <div className="row">
                {
                    ArrayNewcom.map(card => (
                        <div className="col-xl-3 col-lg-3 col-sm-4 col-12 g-0" key={card.id}>
                            <CardEscuela area={card.area} imageSource={card.image} disciplina={card.disciplina} edad={card.edad} rama={card.rama} lugar={card.lugar} dias={card.dias} horario={card.horario} inicio={card.inicio} profesor={card.profesor}
                            contacto={card.contacto} />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
///Tenis
const TenisContainer = () => {
    return(
        <div className="container d-flex justify-content-center align-items-center h-100">
            <div className="row">
                {
                    ArrayTenis.map(card => (
                        <div className="col-xl-3 col-lg-3 col-sm-4 col-12 g-0" key={card.id}>
                            <CardEscuela area={card.area} imageSource={card.image} disciplina={card.disciplina} edad={card.edad} rama={card.rama} lugar={card.lugar} dias={card.dias} horario={card.horario} inicio={card.inicio} profesor={card.profesor}
                            contacto={card.contacto} />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
///Voley
const VoleyContainer = () => {
    return(
        <div className="container d-flex justify-content-center align-items-center h-100">
            <div className="row">
                {
                    ArrayVoley.map(card => (
                        <div className="col-xl-3 col-lg-3 col-sm-4 col-12 g-0" key={card.id}>
                            <CardEscuela area={card.area} imageSource={card.image} disciplina={card.disciplina} edad={card.edad} rama={card.rama} lugar={card.lugar} dias={card.dias} horario={card.horario} inicio={card.inicio} profesor={card.profesor}
                            contacto={card.contacto} />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}


export { AtletismoContainer };
export { AcrobaciasContainer };
export { BampContainer };
export { BasquetContainer };
export { BoxeoContainer };
export { FutbolContainer };
export { GimnasiaContainer };
export { HandballContainer };
export { HockeyContainer };
export { KarateContainer };
export { NewcomContainer };
export { TenisContainer };
export { VoleyContainer };
