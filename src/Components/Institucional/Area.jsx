import React from 'react';
import PropTypes from 'prop-types';
//import '../styles/cards.css';

//CARD NORMAL DEKSTOP
function CardArea({area, imageSource, referente, telefono, tipo, reseña, direccion }) {
  return (
    <div className="card text-center bg-dark rounded-20 animate__animated animate__fadeInUp">
      <div className="img-container">
          <img src={imageSource} alt="Foto profesor" className="card-img-top"/>
      </div>
      <div className="card-body text-light p-0 m-0 lh-1">
          <h7 className="card-title p-0 m-0 lh-1">{area}</h7>
          <p className="card-text text-secondary">{tipo}</p>
          <p className="card-text fs-6 p-0 m-0">{referente}</p>
          <p className="card-text text-secondary">{telefono}</p>
          <p className="card-text text-secondary">{reseña}</p>
          <p className="card-text text-secondary">{direccion}</p>
          <a href="#!" className="btn btn-outline-primary rounded-25">Ver más</a>
      </div>
    </div>
  );
}
CardArea.propTypes = {
  area: PropTypes.string.isRequired,
  imageSource: PropTypes.string.isRequired,
  tipo: PropTypes.string.isRequired,
  referente: PropTypes.string.isRequired,
  telefono: PropTypes.string.isRequired,
  reseña: PropTypes.string.isRequired,
  direccion: PropTypes.string.isRequired,
}

export { CardArea };