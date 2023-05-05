import React from 'react';
import PropTypes from 'prop-types';
//import '../styles/cards.css';

//CARD NORMAL DEKSTOP
function CardProfesor({nombre, image, talleres, telefono, formacion }) {
  return (
    <div className="card text-center text-dark rounded-20 animate__animated animate__fadeInUp">
      <div className="img-container">
          <img src={image} alt="Foto profesor" className="card-img-top"/>
      </div>
      <div className="card-body text-dark p-0 m-0 lh-1">
          <h7 className="card-title p-0 m-0 lh-1">{nombre}</h7>
          <p className="card-text fs-6 p-0 m-0">{formacion}</p>
          <p className="card-text text-secondary m-0 p-0">{talleres}</p>
          <p className="card-text text-secondary m-0 p-0">{telefono}</p>
          {/*<a href={link} className="btn btn-outline-primary rounded-25">Ver más</a>*/}
      </div>
    </div>
  );
}
CardProfesor.propTypes = {
  nombre: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  formacion: PropTypes.string.isRequired,
  talleres: PropTypes.string.isRequired,
  telefono: PropTypes.string,
  link: PropTypes.string,
}

export { CardProfesor };