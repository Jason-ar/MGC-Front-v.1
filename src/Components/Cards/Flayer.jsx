import React from 'react';
import PropTypes from 'prop-types';
import '../styles/cards.css';


//CARD NORMAL
function CardFlayer({nombre, imageSource, dia, hora, lugar, rubroartista, realizado }) {
  return (
    <div className="card text-center bg-dark rounded-20 animate__animated animate__fadeInUp">
      <div className="img-container">
          <img src={imageSource} alt="Foto hospedaje" className="card-img-top"/>
      </div>
      <div className="card-body text-light p-0 m-0">
          {/*<p className="card-text">{dia} {hora}</p>
          <p className="card-text text-secondary">{lugar}</p>
          <a href="#!" className="btn btn-outline-primary rounded-25">Ver más</a>*/}
      </div>
    </div>
  );
}
CardFlayer.propTypes = {
  nombre: PropTypes.string,
  imageSource: PropTypes.string.isRequired,
}

export { CardFlayer };