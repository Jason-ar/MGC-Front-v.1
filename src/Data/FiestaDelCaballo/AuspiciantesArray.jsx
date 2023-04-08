import React from "react";
import Bootstrap from 'bootstrap';

//STATICS IMPORT LOGOS
import CasaGonzalo from '../../Assets/img/Auspiciantes/CasaGonzalotemp.jpg'
import PumaEnergy from '../../Assets/img/Auspiciantes/PumaEnergy1.jpg'
import Kuruf from '../../Assets/img/Auspiciantes/CerveceriaKuruf.jpg'
import Pasquini from '../../Assets/img/Auspiciantes/CorralonPasquini3.jpg'
import GobiernoChubut from '../../Assets/img/Auspiciantes/GobiernoDelChubut1.jpg'
import RadioMalvinas from '../../Assets/img/Auspiciantes/RadioMalvinas.jpg'
import LaCastellana from '../../Assets/img/Auspiciantes/VeterinariaLaCastellana.jpg'

///CARRUSEL LOGOS AUSPICIANTES
const SponsorsCarousel = () => {
    return (
        <div className="container-fluid b-block h-200">
            <div id="carouselExampleAutoplaying" class="carousel slide h-20" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={CasaGonzalo} className="d-inline w-25 m-2" alt="..." />
                        <img src={PumaEnergy} className="d-inline w-25 m-2" alt="..." />
                        <img src={Kuruf} className="d-inline w-25 m-2" alt="..." />
                    </div>
                    <div class="carousel-item">
                        <img src={Pasquini} className="d-inline w-25 m-2" alt="..." />
                        <img src={GobiernoChubut} className="d-inline w-25 m-2" alt="..." />
                        <img src={RadioMalvinas} className="d-inline w-25 m-2" alt="..." />
                    </div>
                    <div class="carousel-item">
                        <img src={LaCastellana} className="d-inline w-25 m-2" alt="..." />
                        <img src={PumaEnergy} className="d-inline w-25 m-2" alt="..." />
                        <img src={Kuruf} className="d-inline w-25 m-2" alt="..." />
                    </div>
                </div>
                
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div >

    )
};

///CARDS AUSPCIANTES
const AuspiciantesArray = [
    {
        id: 1,
        image: GobiernoChubut,
        nombre: 'Magallanes',
        rubro: 'Autoservicio',
        direccion: 'direccion',
        ciudad: 'Gdor. Costa',
    },
    {
        id: 2,
        image: CasaGonzalo,
        nombre: 'Casa Gonzalo',
        rubro: 'Corralón',
        direccion: 'direccion',
        ciudad: 'Gdor. Costa',
    },
    {
        id: 3,
        image: Kuruf,
        nombre: 'Kuruf',
        rubro: 'Cervecería',
        direccion: 'direccion',
        ciudad: 'Gdor. Costa',
    },
    {
        id: 4,
        image: Pasquini,
        nombre: 'Pasquini',
        rubro: 'Corralón',
        direccion: 'direccion',
        ciudad: 'Esquel',
    },
    {
        id: 5,
        image: LaCastellana,
        nombre: 'La Castellana',
        rubro: 'Veterinaría',
        direccion: 'direccion',
        ciudad: 'Gdor. Costa',
    },
    {
        id: 6,
        image: PumaEnergy,
        nombre: 'Puma Energy',
        rubro: 'Estación de Servicio',
        direccion: 'direccion',
        ciudad: 'Gdor. Costa',
    },
    {
        id: 7,
        image: GobiernoChubut,
        nombre: 'Genoa',
        rubro: 'Agrupación Gaucha',
        direccion: 'direccion',
        ciudad: 'Gdor. Costa',
    },
    {
        id: 8,
        image: RadioMalvinas,
        nombre: 'Malvinas',
        rubro: 'Radio Comunitaria',
        direccion: 'direccion',
        ciudad: 'Gdor. Costa',
    },
    {
        id: 9,
        image: GobiernoChubut,
        nombre: 'Chubut',
        rubro: 'Gobierno de',
        direccion: 'direccion',
        ciudad: ' ',
    },

];

export { SponsorsCarousel };
export { AuspiciantesArray };