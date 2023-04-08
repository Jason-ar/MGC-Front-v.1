import React from 'react';
import PropTypes from 'prop-types';
import '../styles/cards.css';

function CardObras({obra, imageSource, ubicacion, inicio, resumen, rama,  profesor}) {
  return (
    <div className="card text-center bg-dark rounded-20 animate__animated animate__fadeInUp">
      <div className="img-container">
          <img src={imageSource} alt="Foto hospedaje" className="card-img-top"/>
      </div>
      <div className="card-body text-light">
          <h4 className="card-title">{obra}</h4>
          <p className="card-text">{ubicacion}</p>
          <p className="card-text text-secondary">{resumen}</p>
          <a href="*" className="btn btn-outline-primary rounded-15">Ver más</a>
          {/*<p className="card-text text-secondary">{contacto}</p>*/}
          {/*<p className="card-text text-secondary">{inicio}</p>*/}
      </div>
    </div>
  );
}
CardObras.propTypes = {
  obra: PropTypes.string.isRequired,
  ubicacion: PropTypes.string.isRequired,
  imageSource: PropTypes.string.isRequired,
  rama: PropTypes.string.isRequired,
  resumen: PropTypes.string.isRequired,
  inicio: PropTypes.string.isRequired,
 }

export { CardObras };
