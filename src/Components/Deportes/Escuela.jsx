import React from 'react';
import PropTypes from 'prop-types';
//import '../styles/cards.css';

function CardEscuela({disciplina, imageSource, area, turno, dias, horario, lugar, rama, edad, profesor, contacto, inicio, finalizacion}) {
  return (
    <div className="card text-center text-dark rounded-20 animate__animated animate__fadeInUp">
      <div className="img-container">
          <img src={imageSource} alt="Foto hospedaje" className="card-img-top"/>
      </div>
      <div className="card-body text-dark m-0 p-1">
          <h4 className="card-title m-0">{disciplina}</h4>
          <p className="card-text">{edad}</p>
          <p className="card-text m-0">{rama}</p>
          <p className="card-text">{dias} {horario}</p>
          <p className="card-text text-secondary">{lugar}</p>
          <p className="card-text text-secondary">{profesor}</p>
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSdxrwOCjjGOOAWumRr0AAHqyb_kI4oEENhPRoncdRCqVxZZjQ/viewform?usp=sf_link" className="btn btn-outline-primary rounded-pill btn-sm">Inscribirme</a>
          {/*<p className="card-text text-secondary">{contacto}</p>*/}
          {/*<p className="card-text text-secondary">{inicio}</p>*/}
      </div>
    </div>
  );
}
CardEscuela.propTypes = {
  area: PropTypes.string.isRequired,
  disciplina: PropTypes.string.isRequired,
  imageSource: PropTypes.string.isRequired,
  edad: PropTypes.string.isRequired,
  rama: PropTypes.string.isRequired,
  lugar: PropTypes.string.isRequired,
  dias: PropTypes.string.isRequired,
  horario: PropTypes.string.isRequired,
  inicio: PropTypes.string.isRequired,
  profesor: PropTypes.string.isRequired,
  contacto: PropTypes.string.isRequired,
}

export { CardEscuela };
