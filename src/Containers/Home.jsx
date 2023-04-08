import React from "react";
import { CardHome } from "../components/CardHome";
//import { Card } from '../components/Card';  
import { HomeCards } from "../containers/HomeCards";
import TurismoHomeCard from '../assets-v1/img/Turismo/Turismo2.jpg';
import FiestaDelCaballoHomeCard from '../assets-v1/img/FiestaDelCaballo/Actividades/FiestaHome1.jpg';

import CulturaHomeCard from '../assets-v1/img/FiestaDelCaballo/Escenario/LluviaBaile1.jpg';
import Municipio from '../assets-v1/img/Municipio/Municipio1.jpg';
import DeportesHomeCard from '../assets-v1/img/areas/deportes-1.jpg';
import SocialHomeCard from '../assets-v1/img/Social/Social1.jpg';
import FiestaDelAnimadorHomeCard from '../assets-v1/img/FiestaDelAnimador/_DSC0002.jpg';
import CDIHomeCard from '../assets-v1/img/CDI/CDI1.jpg';
import BibliotecaHomeCard from '../assets-v1/img/Biblioteca/BibliotecaTemp.jpg';
import AdultosHomeCard from '../assets-v1/img/ClubDeDia/ClubDeDiaTemp.jpg';
import MuseoHomeCard from '../assets-v1/img/Museo/Museo.jpg';
import PlantaDeFaenaHomeCard from '../assets-v1/img/PlantaDeFaena/PlantaDeFaena1.jpg';
import Cine from '../assets-v1/img/Cine/Cine1.jpg';
import PuntoDigital from '../assets-v1/img/PuntoDigital/PuntoDigital1.jpg';
import ConcejoDeliberante from '../assets-v1/img/ConcejoDeliberante/ConcejoDeliberante.jpg';

const HomeCardsContainer = () => {
    return (
        <div className="container d-flex justify-content-center align-items-center h-100">
            <div className="row">
                {
                    HomeCards.map(card => (
                        <div className="col-xl-3 col-lg-3 col-sm-4 col-6 g-0" key={card.id}>
                            <CardHome area={card.area} imageSource={card.image} descripcion={card.descripcion} />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

const HomeCardsContainerLinks = () => {
    return (
        <div className="container d-flex justify-content-center align-items-center h-100">
            <div className="row">
            <a className="col-xl-3 col-lg-3 col-sm-4 col-6 g-0" href="/turismo">
                <button type="button" className="btn btn-primary m-0 p-0" >
                    <div className="card text-center bg-dark rounded-20 animate__animated animate__fadeInUp m-0 p-0">
                        <div className="img-container">
                            <img src={TurismoHomeCard} alt="Foto hospedaje" className="card-img-top" />
                        </div>
                        <div className="card-img-overlay text-light ">
                            <h4 className="card-title position-absolute bottom-0 start-0 m-0">Turismo</h4>
                        </div>
                    </div>
                </button>
            </a>
            <a className="col-xl-3 col-lg-3 col-sm-4 col-6 g-0" href="/fiesta-del-caballo">
                <button type="button" className="btn btn-primary m-0 p-0">
                    <div className="card text-center bg-dark rounded-20 animate__animated animate__fadeInUp m-0 p-0">
                        <div className="img-container">
                            <img src={FiestaDelCaballoHomeCard} alt="Foto hospedaje" className="card-img-top" />
                        </div>
                        <div className="card-img-overlay text-light ">
                            <h4 className="card-title position-absolute bottom-0 start-0 m-0">FDC</h4>
                        </div>
                    </div>
                </button>
            </a>
            <a className="col-xl-3 col-lg-3 col-sm-4 col-6 g-0" href="/deportes">
                <button type="button" className="btn btn-primary m-0 p-0">
                    <div className="card text-center bg-dark rounded-20 animate__animated animate__fadeInUp m-0 p-0">
                        <div className="img-container">
                            <img src={DeportesHomeCard} alt="Foto deportes gobernador costa" className="card-img-top" />
                        </div>
                        <div className="card-img-overlay text-light ">
                            <h4 className="card-title position-absolute bottom-0 start-0 m-0">Deportes</h4>
                        </div>
                    </div>
                </button>
            </a>
            <a className="col-xl-3 col-lg-3 col-sm-4 col-6 g-0" href="/cultura">
                <button type="button" className="btn btn-primary m-0 p-0">
                    <div className="card text-center bg-dark rounded-20 animate__animated animate__fadeInUp m-0 p-0">
                        <div className="img-container">
                            <img src={CulturaHomeCard} alt="Foto cultura gobernador costa" className="card-img-top" />
                        </div>
                        <div className="card-img-overlay text-light ">
                            <h4 className="card-title position-absolute bottom-0 start-0 m-0">Cultura</h4>
                        </div>
                    </div>
                </button>
            </a>
            <a className="col-xl-3 col-lg-3 col-sm-4 col-6 g-0" href="/social">
                <button type="button" className="btn btn-primary m-0 p-0">
                    <div className="card text-center bg-dark rounded-20 animate__animated animate__fadeInUp m-0 p-0">
                        <div className="img-container">
                            <img src={FiestaDelCaballoHomeCard} alt="Foto hospedaje" className="card-img-top" />
                        </div>
                        <div className="card-img-overlay text-light ">
                            <h4 className="card-title position-absolute bottom-0 start-0 m-0">Social</h4>
                        </div>
                    </div>
                </button>
            </a>
            <a className="col-xl-3 col-lg-3 col-sm-4 col-6 g-0" href="/infancia">
                <button type="button" className="btn btn-primary m-0 p-0">
                    <div className="card text-center bg-dark rounded-20 animate__animated animate__fadeInUp m-0 p-0">
                        <div className="img-container">
                            <img src={CDIHomeCard} alt="Foto del centro de desarrollo infantil de gobernador costa" className="card-img-top" />
                        </div>
                        <div className="card-img-overlay text-light ">
                            <h4 className="card-title position-absolute bottom-0 start-0 m-0">Infancia</h4>
                        </div>
                    </div>
                </button>
            </a>
            <a className="col-xl-3 col-lg-3 col-sm-4 col-6 g-0" href="/adultos-mayores">
                <button type="button" className="btn btn-primary m-0 p-0">
                    <div className="card text-center bg-dark rounded-20 animate__animated animate__fadeInUp m-0 p-0">
                        <div className="img-container">
                            <img src={AdultosHomeCard} alt="Foto del Club de día de adultos mayores de Gobernador Costa" className="card-img-top" />
                        </div>
                        <div className="card-img-overlay text-light ">
                            <h4 className="card-title position-absolute bottom-0 start-0 m-0">Adultos Mayores</h4>
                        </div>
                    </div>
                </button>
            </a>
            <a className="col-xl-3 col-lg-3 col-sm-4 col-6 g-0" href="/bibliotea">
                <button type="button" className="btn btn-primary m-0 p-0">
                    <div className="card text-center bg-dark rounded-20 animate__animated animate__fadeInUp m-0 p-0">
                        <div className="img-container">
                            <img src={BibliotecaHomeCard} alt="Foto de la Bibliotea Polular Juan Martín de Pueyrredón, de Gobernador Costa" className="card-img-top" />
                        </div>
                        <div className="card-img-overlay text-light ">
                            <h4 className="card-title position-absolute bottom-0 start-0 m-0">Biblioteca</h4>
                        </div>
                    </div>
                </button>
            </a>

            </div>
            

        </div>

    )
}


export { HomeCardsContainer };
export { HomeCardsContainerLinks };