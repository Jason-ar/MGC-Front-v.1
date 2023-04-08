import React from 'react';
import PropTypes from 'prop-types';
//import '../../styles/Cards.css';

function CardInfante({servicio, imageSource, descripcion, subtitle}) {
  return (
    <div className="card text-center bg-dark rounded-20 animate__animated animate__fadeInUp">
      <div className="img-container">
          <img src={imageSource} alt="Foto hospedaje" className="card-img-top"/>
      </div>
      <div className="card-body text-light">
          {/*<a href="#!" className="btn btn-outline-primary rounded-15">{type}</a>*/}
          <h7 className="card-sub-title">{subtitle}</h7>
          <h4 className="card-title">{servicio}</h4>
          <p className="card-text text-secondary">{descripcion}</p>
      </div>
    </div>
  );
}
CardInfante.propTypes = {
  servicio: PropTypes.string.isRequired,
  imageSource: PropTypes.string.isRequired,
  descripcion: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
}

export { CardInfante };
