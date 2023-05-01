import React from 'react';
import PropTypes from 'prop-types';
//import '../styles/cards.css';


//CARD NORMAL
function CarteleraCard({pelicula, image, fecha, apertura, inicio, entrada, cupos, edad, link, resumen, subtitulo }) {
  return (
    <div className="card text-center text-dark rounded-20 animate__animated animate__fadeInUp">
      <div className="img-container">
          <img src={image} alt="Cartelera cine" className="card-img-top"/>
      </div>
      <div className="card-body text-dark p-0 m-0">
          <h4 className="card-title">{pelicula}</h4>
          <h7 className="card-title">{subtitulo}</h7>
          <p className="card-text">{resumen}</p>
          <p className="card-text">{fecha} {apertura}</p>
          <p className="card-text text-secondary">{inicio}</p>
          <p className="card-text text-secondary">{entrada}</p>
          <p className="card-text text-secondary">{cupos}</p>
          <p className="card-text text-secondary">{edad}</p>
          <a href={link} className="btn btn-outline-primary rounded-15">Ver más</a>
      </div>
    </div>
  );
}

CarteleraCard.propTypes = {
  image: PropTypes.string.isRequired,
  pelicula: PropTypes.string,
  subtitulo: PropTypes.string,
  resumen: PropTypes.string.isRequired,
  fecha: PropTypes.string,
  apertura: PropTypes.string.isRequired,
  inicio: PropTypes.string,
  entrada: PropTypes.string.isRequired,
  cupos: PropTypes.string.isRequired,
  edad: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
}

export { CarteleraCard };
