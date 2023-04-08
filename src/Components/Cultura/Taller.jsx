import React from 'react';
import PropTypes from 'prop-types';
//import '../../styles/Cards.txt';

function CardTaller({disciplina, imageSource, area, turno, dias, horario, lugar, rama, edad, profesor, contacto, inicio, finalizacion}) {
  return (
    <div className="card text-center bg-dark rounded-20 animate__animated animate__fadeInUp">
      <div className="img-container">
          <img src={imageSource} alt="Foto hospedaje" className="card-img-top"/>
      </div>
      <div className="card-body text-light">
          <h4 className="card-title">{disciplina}</h4>
          <p className="card-text">{edad}</p>
          <p className="card-text">{dias} {horario}</p>
          <p className="card-text text-secondary">{lugar}</p>
          <p className="card-text text-secondary">{profesor}</p>
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSdxrwOCjjGOOAWumRr0AAHqyb_kI4oEENhPRoncdRCqVxZZjQ/viewform?usp=sf_link" className="btn btn-outline-primary rounded-15">Inscribirme</a>
          {/*<p className="card-text text-secondary">{contacto}</p>*/}
          {/*<p className="card-text text-secondary">{inicio}</p>*/}
      </div>
    </div>
  );
}
CardTaller.propTypes = {
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

export { CardTaller };
