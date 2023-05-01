import React from 'react';
import PropTypes from 'prop-types';
//import '../styles/cards.css';

function VelocidadCard({ velocidad, imageSource, lugar, sinDescuento }) {
  return (
    <div className="card text-center text-dark rounded-circle animate__animated animate__fadeInUp">
      <div className="img-container">
        {/*<img src={imageSource} alt="Foto hospedaje" className="card-img-top"/>*/}
      </div>
      <div className="card-body text-dark p-1">
        <div>
          <p className="card-text m-0">{lugar}</p>
          <h3 className="card-title m-0"><b>{velocidad}</b></h3>
          <p className="card-text text-seconary m-0 p-0">km/h</p>
        </div>
      </div>
    </div>
  );
};

VelocidadCard.propTypes = {
  velocidad: PropTypes.string.isRequired,
  lugar: PropTypes.string.isRequired,
  sinDescuento: PropTypes.string,
};

export { VelocidadCard };