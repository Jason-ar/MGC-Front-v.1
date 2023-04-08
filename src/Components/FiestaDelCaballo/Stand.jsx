import React from 'react';
import PropTypes from 'prop-types';
//import '../styles/cards.css';

//CARD AUSPICIANTES
function CardStand({ nombre, imageSource, direccion, rubro, ciudad }) {
  return (
    <div className="card text-center bg-dark rounded-20 animate__animated animate__fadeInUp">
      <div className="img-container">
        <img src={imageSource} alt="Foto hospedaje" className="card-img-top" />
      </div>
      <div className="card-body text-light p-0 m-1 lh-1">
        <p className="card-text text-secondary fs-6 p-0 m-0">{rubro}</p>
        <h6 className="card-title p-0 m-0 lh-1">{nombre}</h6>
        {/*<p className="card-text text-secondary">{direccion}</p>*/}
        <p className="card-text text-secondary">{ciudad}</p>
        {/*<a href="#!" className="btn btn-outline-primary rounded-25">Ver más</a>*/}
      </div>
    </div>
  );
}
CardStand.propTypes = {
  nombre: PropTypes.string.isRequired,
  imageSource: PropTypes.string.isRequired,
  rubro: PropTypes.string.isRequired,
  direccion: PropTypes.string.isRequired,
  ciudad: PropTypes.string.isRequired,
}

export { CardStand };