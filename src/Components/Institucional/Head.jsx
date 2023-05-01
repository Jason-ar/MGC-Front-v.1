import React from 'react';
import PropTypes from 'prop-types';


function CardHeaderArea({tipo, area, image, dias, horario, direccion, telefono, email, facebook, whatsapp }) {
  return (
    <div className="card text-center text-dark rounded-20 animate__animated animate__fadeInUp">
      <div className="img-container">
          <img src={image} alt="Foto hospedaje" className="card-img-top"/>
      </div>
      <div className="card-body text-dark m-0 p-1">
          <h4 className="card-title m-0">{tipo} de {area}</h4>
          <p className="card-text">{telefono}</p>
          <p className="card-text">{dias} {horario}</p>
          <p className="card-text text-secondary">{direccion}</p>
          <p className="card-text text-secondary">{email}</p>
          <a href={facebook} className="btn btn-outline-primary rounded-pill btn-sm">Facebook</a>
          <a href={whatsapp} className="btn btn-outline-primary rounded-pill btn-sm">Facebook</a>
      </div>
    </div>
  );
}

CardHeaderArea.propTypes = {
  tipo: PropTypes.string.isRequired,
  area: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  telefono: PropTypes.string.isRequired,
  direccion: PropTypes.string.isRequired,
  dias: PropTypes.string.isRequired,
  horario: PropTypes.string.isRequired,
  email: PropTypes.string,
  whatsapp: PropTypes.string,
  facebook: PropTypes.string,
}

export { CardHeaderArea };

//<div className="card-img-overlay text-light ">
//<div className="img-container">