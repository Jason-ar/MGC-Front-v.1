import React from 'react';
import PropTypes from 'prop-types';
//import '../styles/cards.css';

function DescargoCard({ descargo, image, resumen, subtitulo, link }) {
    return (
        <div className="card text-center text-dark rounded-20 animate__animated animate__fadeInUp">
            <div className="img-container">
                <img src={image} alt="Foto hospedaje" className="card-img-top" />
            </div>
            <div className="card-body text-dark m-0 p-1">
                <h4 className="card-title m-0 p-0">{descargo}</h4>
                <h7 className="card-text text-secondary m-0 p-0">{subtitulo}</h7>
                <p className="card-text m-0 p-0">{resumen}</p>
                <a href={link} target="_blank" className="btn btn-primary rounded-15 m-0 p-1">Hacer Descargo</a>
            </div>
        </div>
    );
};

DescargoCard.propTypes = {
    descargo: PropTypes.string.isRequired,
    resumen: PropTypes.string,
    image: PropTypes.string.isRequired,
    subtitulo: PropTypes.string,
    link: PropTypes.string,
}

export { DescargoCard };
