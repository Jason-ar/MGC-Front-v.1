import React from 'react';
import { PayadoresContainer, NocheDeFolkloreArtistasContainer, EscenarioArtistasContainer } from '../../Containers/FiestaDelCaballo/ArtistasContainer';

//Flayers
import ImageSource from '../../Assets/img/FiestaDelCaballo/Mangrullo/LucasLinares1.jpg'
//import Desfile from '../../Assets/img/FiestaDelCaballo/Actividades/Desfile1.jpg';
import Baile from '../../Assets/img/FiestaDelCaballo/Escenario/LluviaBaile1.jpg';

///MODAL PAYADORES Y ARTISTAS
const PayadoresModal = () => {
    return (
        <div>
            <button type="button" className="btn btn-primary m-0 p-0" data-bs-toggle="modal" data-bs-target="#PayadoresModal">
                <div className="card text-center bg-dark rounded-20 animate__animated animate__fadeInUp m-0 p-0">
                    <div className="img-container">
                        <img src={ImageSource} alt="Foto hospedaje" className="card-img-top" />
                    </div>
                    <div className="card-img-overlay text-light ">
                        <h4 className="card-title position-absolute bottom-0 start-0 m-0">Mangruyo</h4>
                    </div>
                </div>
            </button>

            <div className="modal fade" id="PayadoresModal" tabindex="-1" aria-labelledby="PayadoresModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-xl">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="PayadoresModalLabel"></h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div>
                            <div className="modal-body ">
                                <div className="container-fluid">
                                    <PayadoresContainer />
                                    <div className="row">

                                    </div>
                                </div>
                            </div>
                        </div>

                        {/*<div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
    </div>*/}
                    </div>
                </div>
            </div>
        </div>
    )
}

///MODAL NOCHE DE FOLKLORE
const NocheDeFolkloreModal = () => {
    return (
        <div>
            <button type="button" className="btn btn-primary m-0 p-0" data-bs-toggle="modal" data-bs-target="#NocheDeFolkloreModal">
                <div className="card text-center bg-dark rounded-20 animate__animated animate__fadeInUp m-0 p-0">
                    <div className="img-container">
                        <img src={Baile} alt="Foto hospedaje" className="card-img-top" />
                    </div>
                    <div className="card-img-overlay text-light ">
                        <h4 className="card-title position-absolute bottom-0 start-0 m-0">Peña</h4>
                    </div>
                </div>
            </button>

            <div className="modal fade" id="NocheDeFolkloreModal" tabindex="-1" aria-labelledby="NocheDeFolkloreModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-xl">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="NocheDeFolkloreModalLabel"></h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div>
                            <div className="modal-body ">
                                <div className="container-fluid">
                                    <NocheDeFolkloreArtistasContainer />
                                    <div className="row">

                                    </div>
                                </div>
                            </div>
                        </div>

                        {/*<div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
    </div>*/}
                    </div>
                </div>
            </div>
        </div>
    )
}

///MODAL ARTISTAS CARDS
const ArtistasModal = () => {
    return (
        <div>
            <button type="button" className="btn btn-primary m-0 p-0" data-bs-toggle="modal" data-bs-target="#ArtistasModal">
                <div className="card text-center bg-dark rounded-20 animate__animated animate__fadeInUp m-0 p-0">
                    <div className="img-container">
                        <img src={ImageSource} alt="Foto hospedaje" className="card-img-top" />
                    </div>
                    <div className="card-img-overlay text-light ">
                        <h4 className="card-title position-absolute bottom-0 start-0 m-0 fs-6">Artistas</h4>
                    </div>
                </div>
            </button>
            <div className="modal fade" id="ArtistasModal" tabindex="-1" aria-labelledby="ArtistasModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-xl">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="ArtistasModalLabel"></h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div>
                            <div className="modal-body ">
                                <div className="container-fluid">
                                    <EscenarioArtistasContainer />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export { PayadoresModal };
export { NocheDeFolkloreModal };
export { ArtistasModal };