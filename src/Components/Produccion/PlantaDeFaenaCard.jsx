import React from 'react';
import PropTypes from 'prop-types';
//import '../styles/cards.css';

function PlantaDeFaenaCard({instalacion, image, resumen, incorporacion, texto, video,  profesor}) {
  return (
    <div className="card text-center text-dark rounded-20 animate__animated animate__fadeInUp">
      <div className="img-container">
          <img src={image} alt="Foto hospedaje" className="card-img-top"/>
      </div>
      <div className="card-body text-dark">
          <h4 className="card-title">{instalacion}</h4>
          <p className="card-text">{resumen}</p>
          <p className="card-text text-secondary">{incorporacion}</p>
          <p className="card-text text-secondary">{texto}</p>
          <p className="card-text text-secondary">{video}</p>
          <a href="*" className="btn btn-outline-primary rounded-15">Ver más</a>
          
      </div>
    </div>
  );
}
PlantaDeFaenaCard.propTypes = {
  instalacion: PropTypes.string.isRequired,
  resumen: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  video: PropTypes.string.isRequired,
  texto: PropTypes.string.isRequired,
  incorporacion: PropTypes.string.isRequired,
 }

export { PlantaDeFaenaCard };
