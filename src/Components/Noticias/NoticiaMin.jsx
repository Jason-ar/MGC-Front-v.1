import React from 'react';
import PropTypes from 'prop-types';
//import '../styles/cards.css';

function CardNoticiaMin({titulo, image, area, dia, resumen,  }) {
  return (
    <div className="card text-center text-dark rounded-20 animate__animated animate__fadeInUp">
      <div className="img-container">
          <img src={image} alt="Foto noticia" className="card-img-top"/>
      </div>
      <div className="card-body text-dark">
          <h4 className="card-title">{titulo}</h4>
          <p className="card-text">{dia}</p>
          <p className="card-text text-secondary">{area}</p>
          <p className="card-text text-secondary">{resumen}</p>
          <a href="#!" className="btn btn-outline-primary rounded-25">Ver más</a>
      </div>
    </div>
  );
}
CardNoticiaMin.propTypes = {
  area: PropTypes.string.isRequired,
  titulo: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  resumen: PropTypes.string.isRequired,
  dia: PropTypes.string.isRequired,
}

export { CardNoticiaMin };
