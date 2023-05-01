import React from 'react';
import PropTypes from 'prop-types';
//import '../styles/cards.css';

function CardNoticia({titulo, imageSource, area, dia, hora, resumen, cuerpo }) {
  return (
    <div className="card text-center text-dark rounded-20 animate__animated animate__fadeInUp">
      <div className="img-container">
          <img src={imageSource} alt="Foto noticia" className="card-img-top"/>
      </div>
      <div className="card-body text-dark">
          <h4 className="card-title m-1 p-0">{titulo}</h4>
          <p className="card-text m-1 p-0 ">{dia} {hora}</p>
          <p className="card-text text-secondary m-0 p-0">{area}</p>
          <p className="card-text text-secondary m-0 p-0">{resumen}</p>
          <p className="card-text text-secondary m-0 p-0">{cuerpo}</p>
          <a href="#!" className="btn btn-outline-primary rounded-25">Ver más</a>
      </div>
    </div>
  );
}
CardNoticia.propTypes = {
  area: PropTypes.string.isRequired,
  titulo: PropTypes.string.isRequired,
  imageSource: PropTypes.string.isRequired,
  resumen: PropTypes.string.isRequired,
  dia: PropTypes.string.isRequired,
  hora: PropTypes.string.isRequired,
  cuerpo: PropTypes.string
}

export { CardNoticia };
