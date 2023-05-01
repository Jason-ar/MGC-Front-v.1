import React from 'react';
import PropTypes from 'prop-types';

function FooterCard({ area, dias, horario, direccion, telefono, email, facebook, whatsapp }) {
  return (
    <div className="card align-middle text-center bg-dark rounded-0 animate__animated animate__fadeInUp">
      <div className="card-img-overlay align-middle text-dark m-0 p-0">
        <div className='align-middle'>
          <h7 className="card-title align-middle m-1 h-20vh">{area}</h7>
          <p className="card-text align-middle m-0 p-0">{telefono}</p>
          <p className="card-text align-middle m-0 p-0">{dias} {horario}</p>
          <p className="card-text align-middle text-secondary m-0 p-0">{direccion}</p>
          <p className="card-text text-secondary align-middle m-0 p-0">{email}</p>
        </div>
        <div className="container align-middle text-center justify-content-center align-items-center h-10">
          <a href={facebook} className="btn align-middle btn-outline-primary rounded-pill btn-sm">Facebook</a>
          <a href={whatsapp} className="btn align-middle btn-outline-primary rounded-pill btn-sm">Whats app</a>
        </div>

      </div>
    </div>
  );
}

FooterCard.propTypes = {
  area: PropTypes.string.isRequired,
  telefono: PropTypes.string.isRequired,
  direccion: PropTypes.string.isRequired,
  dias: PropTypes.string,
  horario: PropTypes.string,
  email: PropTypes.string,
  whatsapp: PropTypes.string,
  facebook: PropTypes.string,
}

export { FooterCard };