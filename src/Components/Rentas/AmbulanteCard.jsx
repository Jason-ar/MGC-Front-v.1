import React from 'react';
import PropTypes from 'prop-types';
//import '../styles/cards.css';

function ComercioInteriorCard({ contacto, detalle, telefono }) {
    return (
        <div className="card text-center text-dark rounded-20 animate__animated animate__fadeInUp">
            <div className="img-container">
                {/*<img src={image} alt="Foto hospedaje" className="card-img-top"/>*/}
            </div>
            <div className="card-body text-dark">
                <div>
                    <h6 className="card-title m-0">{contacto}</h6>
                    <p className="card-text text-secondary m-0">{detalle}</p>
                    <p className="card-text m-0">{telefono}</p>
                    {/*<a href="#!" className="btn btn-outline-primary rounded-25">Ver más</a>*/}
                </div>
            </div>
        </div>
    );
};

ComercioInteriorCard.propTypes = {
    contacto: PropTypes.string,
    detalle: PropTypes.string,
    telefono: PropTypes.string,
};

export { ComercioInteriorCard };

