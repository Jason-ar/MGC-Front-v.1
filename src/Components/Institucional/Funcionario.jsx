import React from 'react';
import PropTypes from 'prop-types';
//import '../styles/cards.css';

//CARD NORMAL DEKSTOP
function CardFuncionario({nombre, imageSource, cargo, telefono, lugar, formacion, reseña }) {
  return (
    <div className="card text-center bg-dark rounded-20 animate__animated animate__fadeInUp">
      <div className="img-container">
          <img src={imageSource} alt="Foto profesor" className="card-img-top"/>
      </div>
      <div className="card-body text-light p-0 m-0 lh-1">
          <h7 className="card-title p-0 m-0 lh-1">{nombre}</h7>
          <p className="card-text text-secondary">{formacion}</p>
          <p className="card-text">{lugar}</p>
          <p className="card-text fs-6 p-0 m-0">{cargo}</p>
          <p className="card-text text-secondary">{telefono}</p>
          <p className="card-text text-secondary">{reseña}</p>
          {/*<a href="#!" className="btn btn-outline-primary rounded-25">Ver más</a>*/}
      </div>
    </div>
  );
}
CardFuncionario.propTypes = {
  nombre: PropTypes.string.isRequired,
  imageSource: PropTypes.string.isRequired,
  formacion: PropTypes.string.isRequired,
  cargo: PropTypes.string.isRequired,
  telefono: PropTypes.string,
  lugar: PropTypes.string.isRequired,
  reseña: PropTypes.string
}

export { CardFuncionario };