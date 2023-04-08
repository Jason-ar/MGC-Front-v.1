import React from 'react';
import { AuspiciantesContainer } from '../../Containers/FiestaDelCaballo/AuspiciantesContainer';
import { StandsContainer } from '../../Containers/FiestaDelCaballo/StandsContainers';
//Flayers
import ImageSource from '../../Assets/img/FiestaDelCaballo/Mangrullo/LucasLinares1.jpg'
import Desfile from '../../Assets/img/FiestaDelCaballo/Actividades/Desfile1.jpg';
import Bingo from '../../Assets/img/FiestaDelCaballo/Actividades/Bingo2.jpg';

///MODAL AUPICIANTES CARDS
const AuspiciantesModal = () => {
    return (
        <div>
            <button type="button" className="btn btn-primary m-0 p-0" data-bs-toggle="modal" data-bs-target="#AuspiciantesModal">
                <div className="card text-center bg-dark rounded-20 animate__animated animate__fadeInUp m-0 p-0">
                    <div className="img-container">
                        <img src={ImageSource} alt="Foto hospedaje" className="card-img-top" />
                    </div>
                    <div className="card-img-overlay text-light ">
                        <h4 className="card-title position-absolute bottom-0 start-0 m-0">Auspiciantes</h4>
                    </div>
                </div>
            </button>

            <div className="modal fade bg-dark.bg-gradient" id="AuspiciantesModal" tabindex="-1" aria-labelledby="AuspiciantesModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-xl bg-dark.bg-gradient ">
                    <div className="modal-content bg-dark.bg-gradient">
                        <div className="modal-header bg-dark.bg-gradient">
                            <h1 className="modal-title fs-5" id="AuspiciantesModalLabel"></h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div>
                            <div className="modal-body bg-dark.bg-gradient">
                                <div className="container-fluid bg-dark.bg-gradient">
                                    <p>Auspiciantes</p>
                                    <AuspiciantesContainer />
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

///MODAL STANDS CARDS
const StandsModal = () => {
    return (
        <div>
            <button type="button" className="btn btn-primary m-0 p-0" data-bs-toggle="modal" data-bs-target="#StandsModal">
                <div className="card text-center bg-dark rounded-20 animate__animated animate__fadeInUp m-0 p-0">
                    <div className="img-container">
                        <img src={ImageSource} alt="Foto hospedaje" className="card-img-top" />
                    </div>
                    <div className="card-img-overlay text-light ">
                        <h4 className="card-title position-absolute bottom-0 start-0 m-0">Stands</h4>
                    </div>
                </div>
            </button>

            <div className="modal fade bg-dark.bg-gradient" id="StandsModal" tabindex="-1" aria-labelledby="StandsModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-xl bg-dark.bg-gradient ">
                    <div className="modal-content bg-dark.bg-gradient">
                        <div className="modal-header bg-dark.bg-gradient">
                            <h1 className="modal-title fs-5" id="AuspiciantesModalLabel"></h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div>
                            <div className="modal-body bg-dark.bg-gradient">
                                <div className="container-fluid bg-dark.bg-gradient">
                                    <p>Stands</p>
                                    <StandsContainer />
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

export { AuspiciantesModal };
export { StandsModal };