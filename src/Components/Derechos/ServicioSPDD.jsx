import React from 'react';
import PropTypes from 'prop-types';
//import '../../styles/Cards.css';

function CardSPDD({titulo, image, descripcion, subtitle, resumen, link}) {
  return (
    <div className="card text-center text-dark rounded-20 animate__animated animate__fadeInUp">
      <div className="img-container">
          <img src={image} alt="Foto hospedaje" className="card-img-top"/>
      </div>
      <div className="card-body text-dark">
          <h4 className="card-title">{titulo}</h4>
          <h7 className="card-sub-title">{subtitle}</h7>
          <p className="card-text text-secondary">{resumen}</p>
          <p className="card-text text-secondary">{descripcion}</p>
          <a href={link} className="btn btn-outline-primary rounded-15">Ver más</a>
      </div>
    </div>
  );
}
CardSPDD.propTypes = {
  titulo: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  descripcion: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  resumen: PropTypes.string,
  link: PropTypes.string,
}

export { CardSPDD };