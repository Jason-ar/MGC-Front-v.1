import React from 'react';
import PropTypes from 'prop-types';
//import '../styles/cards.css';

function CardObraTerminada({obra, image, ubicacion, inicio, resumen, fin,  link, descripcion}) {
  return (
    <div className="card text-center text-dark rounded-20 animate__animated animate__fadeInUp">
      <div className="img-container">
          <img src={image} alt="Foto hospedaje" className="card-img-top"/>
      </div>
      <div className="card-body text-dark">
          <h4 className="card-title">{obra}</h4>
          <p className="card-text">{ubicacion}</p>
          <p className="card-text text-secondary">{resumen}</p>
          <p className="card-text text-secondary">{fin}</p>
          <p className="card-text text-secondary">{inicio}</p>
          <a href={link} className="btn btn-outline-primary rounded-15">Ver más</a>
          <p className="card-text text-secondary">{descripcion}</p>
      </div>
    </div>
  );
}
CardObraTerminada.propTypes = {
  obra: PropTypes.string.isRequired,
  ubicacion: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  fin: PropTypes.string.isRequired,
  resumen: PropTypes.string.isRequired,
  inicio: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  descripcion: PropTypes.string.isRequired,
 }

export { CardObraTerminada };
