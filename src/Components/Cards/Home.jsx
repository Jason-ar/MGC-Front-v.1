import React from 'react';
import PropTypes from 'prop-types';
import '../styles/cards.css';

function CardHome({area, imageSource, descripcion, link}) {
  return (
    <div className="card text-center bg-dark rounded-20 animate__animated animate__fadeInUp">
      <a href="/fiesta-del-caballo">
        <div className="img-container">
            <img src={imageSource} alt="Foto hospedaje" className="card-img-top"/>
        </div>
        <div className="card-img-overlay text-light ">
            <h4 className="card-title position-absolute bottom-0 start-0 m-0">{area}</h4>
            {/*<p className="card-text text-secondary">{descripcion}</p>*/}
            
        </div>
      </a>
    </div>
  );
} 
CardHome.propTypes = {
  area: PropTypes.string.isRequired,
  descripcion: PropTypes.string.isRequired,
  imageSource: PropTypes.string.isRequired,
  link: PropTypes.string

}

export { CardHome }
