import React from 'react';
import PropTypes from 'prop-types';
//import '../styles/cards.css';


//CARD NORMAL
function CineCard({nombre, imageSource, dia, hora, lugar, rubroartista, realizado }) {
  return (
    <div className="card text-center text-dark rounded-20 animate__animated animate__fadeInUp">
      <div className="img-container">
          <img src={imageSource} alt="Cartelera cine" className="card-img-top"/>
      </div>
      <div className="card-body text-dark p-0 m-0">
          {/*<p className="card-text">{dia} {hora}</p>
          <p className="card-text text-secondary">{lugar}</p>
          <a href="#!" className="btn btn-outline-primary rounded-25">Ver más</a>*/}
      </div>
    </div>
  );
}
CineCard.propTypes = {
  nombre: PropTypes.string,
  imageSource: PropTypes.string.isRequired,
}

export { CineCard };