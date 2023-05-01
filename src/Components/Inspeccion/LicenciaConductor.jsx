import React from 'react';
import PropTypes from 'prop-types';
//import '../styles/cards.css';

function LicenciaConductorCard({edad, imageSource, vigencia, examen, tipo, }) {
  return (
    <div className="card text-center text-dark border-0 rounded-20 animate__animated animate__fadeInUp">
      <div className="img-container">
          {/*<img src={imageSource} alt="Foto hospedaje" className="card-img-top"/>*/}
      </div>
      <div className="card-body text-dark m-0 p-0">
          <p className="card-text text-secondary m-0 p-0">Carnet {tipo}</p>
          <h4 className="card-title m-0 p-0">{edad} años</h4>
          <p className="card-text m-0 p-0">vigencia: {vigencia}</p>
          <p className="card-text m-0 p-0">{examen}</p>
          
          {/*<a href="#!" className="btn btn-outline-primary rounded-25">Ver más</a>*/}
      </div>
    </div>
  );
}
LicenciaConductorCard.propTypes = {
  edad: PropTypes.string.isRequired,
  imageSource: PropTypes.string,
  vigencia: PropTypes.string.isRequired,
  examen: PropTypes.string.isRequired,
  tipo: PropTypes.string.isRequired,
}

export { LicenciaConductorCard };
