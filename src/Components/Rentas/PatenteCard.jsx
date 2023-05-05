import React from 'react';
import PropTypes from 'prop-types';
//import '../styles/cards.css';

function PatenteCard({ titulo, image, resumen, descripcion, valor, link}) {
  return (
    <div className="card text-center text-dark rounded-20 animate__animated animate__fadeInUp">
      <div className="img-container">
        {/*<img src={image} alt="Foto hospedaje" className="card-img-top"/>*/}
      </div>
      <div className="card-body text-dark">
          <h6 className="card-title">{titulo}</h6>
        <div>
          <p className="card-text">{resumen}</p>
          <p className="card-text">{descripcion}</p>
          <h7 className="card-text">{valor}</h7>
          {/*<a href={link} className="btn btn-outline-primary rounded-25">Ver más</a>*/}
        </div>
      </div>
    </div>
  );
}
PatenteCard.propTypes = {
  titulo: PropTypes.string.isRequired,
  valor: PropTypes.string.isRequired,
  resumen: PropTypes.string,
  descripcion: PropTypes.string,
  link: PropTypes.string,
}

export { PatenteCard };
