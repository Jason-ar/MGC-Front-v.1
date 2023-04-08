import React from 'react';
import PropTypes from 'prop-types';
//import '../styles/cards.css';

//CARD NORMAL DEKSTOP
function CardProfesor({nombre, imageSource, talleres, telefono, lugar, formacion, realizado }) {
  return (
    <div className="card text-center bg-dark rounded-20 animate__animated animate__fadeInUp">
      <div className="img-container">
          <img src={imageSource} alt="Foto profesor" className="card-img-top"/>
      </div>
      <div className="card-body text-light p-0 m-0 lh-1">
          <h7 className="card-title p-0 m-0 lh-1">{nombre}</h7>
          <p className="card-text fs-6 p-0 m-0">{formacion}</p>
          <p className="card-text text-secondary">{talleres}</p>
          <p className="card-text text-secondary">{telefono}</p>
          {/*<p className="card-text">{talleres} {telefono}</p>
          <a href="#!" className="btn btn-outline-primary rounded-25">Ver más</a>*/}
      </div>
    </div>
  );
}
CardProfesor.propTypes = {
  nombre: PropTypes.string.isRequired,
  imageSource: PropTypes.string.isRequired,
  formacion: PropTypes.string.isRequired,
  talleres: PropTypes.string.isRequired,
  telefono: PropTypes.string,
  lugar: PropTypes.string,
  realizado: PropTypes.string
}

export { CardProfesor };