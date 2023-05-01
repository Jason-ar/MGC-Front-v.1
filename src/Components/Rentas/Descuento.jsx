import React from 'react';
import PropTypes from 'prop-types';
//import '../styles/cards.css';

function CardDescuento({descuento, imageSource, impuesto, sinDescuento, vencimiento, }) {
  return (
    <div className="card text-center text-dark rounded-20 animate__animated animate__fadeInUp">
      <div className="img-container m-0 p-0">
          {/*<img src={imageSource} alt="Foto hospedaje" className="card-img-top"/>*/}
      </div>
      <div className="card-body text-dark m-0 p-0">
          <h4 className="card-title m-0 p-0">{descuento}</h4>
          <p className="card-text m-0 p-0">{impuesto}</p>
          <p className="card-text text-secondary m-0 p-0">{vencimiento}</p>
          {/*<a href="#!" className="btn btn-outline-primary rounded-25">Ver más</a>*/}
      </div>
    </div>
  );
}
CardDescuento.propTypes = {
  descuento: PropTypes.string.isRequired,
  imageSource: PropTypes.string,
  impuesto: PropTypes.string.isRequired,
  vencimiento: PropTypes.string.isRequired,
}

export { CardDescuento };
