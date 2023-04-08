import React from 'react';
import { DesfileFlayerContainer, BingoFlayerContainer } from '../../Containers/FiestaDelCaballo/FlayersContainer';

//Flayers
import ImageSource from '../../Assets/img/FiestaDelCaballo/Mangrullo/LucasLinares1.jpg'
import Desfile from '../../Assets/img/FiestaDelCaballo/Actividades/Desfile1.jpg';
import Bingo from '../../Assets/img/FiestaDelCaballo/Actividades/Bingo2.jpg';


///MODAL DESFILE FLAYER
const DesfileModal = () => {
    return (
        <div>
            <button type="button" className="btn btn-primary m-0 p-0" data-bs-toggle="modal" data-bs-target="#DesfileModal">
                <div className="card text-center bg-dark rounded-20 animate__animated animate__fadeInUp m-0 p-0">
                    <div className="img-container">
                        <img src={Desfile} alt="Foto hospedaje" className="card-img-top" />
                    </div>
                    <div className="card-img-overlay text-light ">
                        <h4 className="card-title position-absolute bottom-0 start-0 m-0">Desfile</h4>
                    </div>
                </div>
            </button>

            <div className="modal fade" id="DesfileModal" tabindex="-1" aria-labelledby="DesfileModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-xl">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="DesfileModalLabel"></h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div>
                            <div className="modal-body ">
                                <div className="container-fluid">
                                    <DesfileFlayerContainer />
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

///MODAL BINGO FLAYER
const BingoModal = () => {
    return (
        <div>
            <button type="button" className="btn btn-primary m-0 p-0" data-bs-toggle="modal" data-bs-target="#BingoModal">
                <div className="card text-center bg-dark rounded-20 animate__animated animate__fadeInUp m-0 p-0">
                    <div className="img-container">
                        <img src={Bingo} alt="Foto hospedaje" className="card-img-top" />
                    </div>
                    <div className="card-img-overlay text-light ">
                        <h4 className="card-title position-absolute bottom-0 start-0 m-0">Bingo</h4>
                    </div>
                </div>
            </button>

            <div className="modal fade" id="BingoModal" tabindex="-1" aria-labelledby="BingoModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-xl">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="BingoModalLabel"></h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div>
                            <div className="modal-body ">
                                <div className="container-fluid">   
                                    <BingoFlayerContainer />
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

export { DesfileModal };
export { BingoModal };