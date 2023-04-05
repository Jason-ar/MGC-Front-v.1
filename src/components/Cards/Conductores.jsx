import React from 'react';
import PropTypes from 'prop-types';
import '../styles/cards.css';

function CardConductores({edad, imageSource, vigencia, examen, tipo, }) {
  return (
    <div className="card text-center bg-dark rounded-20 animate__animated animate__fadeInUp">
      <div className="img-container">
          {/*<img src={imageSource} alt="Foto hospedaje" className="card-img-top"/>*/}
      </div>
      <div className="card-body text-light">
          <p className="card-text text-secondary">Carnet {tipo}</p>
          <h4 className="card-title">{edad} años</h4>
          <p className="card-text">vigencia: {vigencia}</p>
          <p className="card-text">{examen}</p>
          
          {/*<a href="#!" className="btn btn-outline-primary rounded-25">Ver más</a>*/}
      </div>
    </div>
  );
}
CardConductores.propTypes = {
  edad: PropTypes.string.isRequired,
  imageSource: PropTypes.string.isRequired,
  vigencia: PropTypes.string.isRequired,
  examen: PropTypes.string.isRequired,
  tipo: PropTypes.string.isRequired,
}

export { CardConductores };
