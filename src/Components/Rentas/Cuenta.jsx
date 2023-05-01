import React from 'react';
import PropTypes from 'prop-types';
//import '../styles/cards.css';

function CuentaCard({ banco, imageSource, cbu, cuentanumero, cuit, email, alias }) {
  return (
    <div className="card text-center text-dark rounded-20 animate__animated animate__fadeInUp">
      <div className="img-container">
        {/*<img src={imageSource} alt="Foto hospedaje" className="card-img-top"/>*/}
      </div>
      <div className="card-body text-dark">
        <div>
          <h4 className="card-title">{banco}</h4>
        </div>
        <div>
          <p className="card-text">CBU: {cbu}</p>
          <p className="card-text">Cta. N°  {cuentanumero}</p>
          <p className="card-text text-secondary">{cuit}</p>
          <p className="card-text text-secondary">{email}</p>
          <p className="card-text text-secondary">{alias}</p>
          {/*<a href="#!" className="btn btn-outline-primary rounded-25">Ver más</a>*/}
        </div>


      </div>
    </div>
  );
}
CuentaCard.propTypes = {
  banco: PropTypes.string.isRequired,
  imageSource: PropTypes.string,
  cuit: PropTypes.string.isRequired,
  cbu: PropTypes.string.isRequired,
  cuentanumero: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  alias: PropTypes.string.isRequired,
}

export { CuentaCard };
