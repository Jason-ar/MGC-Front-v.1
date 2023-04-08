import React from 'react';
import PropTypes from 'prop-types';
//import '../styles/cards.css';

function CardEventoDeportivo({evento, imageSource, disciplina, dia, hora, lugar, mes }) {
  return (
    <div className="card text-center bg-dark rounded-20 animate__animated animate__fadeInUp">
      <div className="img-container">
          <img src={imageSource} alt="Foto evento" className="card-img-top"/>
      </div>
      <div className="card-body text-light">
          <h4 className="card-title">{evento}</h4>
          <p className="card-text">{dia} {hora}</p>
          <p className="card-text text-secondary">{lugar}</p>
          <p className="card-text text-secondary">{disciplina}</p>
          <p className="card-text text-secondary">{mes}</p>
          <a href="#!" className="btn btn-outline-primary rounded-25">Ver más</a>
      </div>
    </div>
  );
}
CardEventoDeportivo.propTypes = {
  disciplina: PropTypes.string.isRequired,
  evento: PropTypes.string.isRequired,
  imageSource: PropTypes.string.isRequired,
  lugar: PropTypes.string,
  dia: PropTypes.string,
  hora: PropTypes.string,
  mes: PropTypes.string
}

export { CardEventoDeportivo };
