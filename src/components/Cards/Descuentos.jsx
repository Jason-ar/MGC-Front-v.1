import React from 'react';
import PropTypes from 'prop-types';
import '../styles/cards.css';

function CardDescuentos({descuento, imageSource, impuesto, sinDescuento, vencimiento, }) {
  return (
    <div className="card text-center bg-dark rounded-20 animate__animated animate__fadeInUp">
      <div className="img-container">
          {/*<img src={imageSource} alt="Foto hospedaje" className="card-img-top"/>*/}
      </div>
      <div className="card-body text-light">
          <h4 className="card-title">{descuento}</h4>
          <p className="card-text">{impuesto}</p>
          <p className="card-text text-secondary">{vencimiento}</p>
          {/*<a href="#!" className="btn btn-outline-primary rounded-25">Ver más</a>*/}
      </div>
    </div>
  );
}
CardDescuentos.propTypes = {
  descuento: PropTypes.string.isRequired,
  imageSource: PropTypes.string.isRequired,
  impuesto: PropTypes.string.isRequired,
  vencimiento: PropTypes.string.isRequired,
}

export { CardDescuentos };
