import React from 'react';
import PropTypes from 'prop-types';
//import '../styles/cards.css';

function CardIIBB({ categoria, imageSource, conDescuento, sinDescuento, vencimiento, }) {
  return (
    <div className="card text-center text-dark rounded-20 animate__animated animate__fadeInUp">
      <div className="img-container">
        {/*<img src={imageSource} alt="Foto hospedaje" className="card-img-top"/>*/}
      </div>
      <div className="card-body text-dark p-1">
        <div>
          <h4 className="card-title m-0">{categoria}</h4>
        </div>
        <div>
          <p className="card-text m-0">Al día: ${conDescuento}</p>
          <p className="card-text m-0">Atrasado: ${sinDescuento}</p>
          {/*<p className="card-text text-secondary">{vencimiento}</p>
          <a href="#!" className="btn btn-outline-primary rounded-25">Ver más</a>*/}
        </div>
      </div>
    </div>
  );
}
CardIIBB.propTypes = {
  categoria: PropTypes.string.isRequired,
  imageSource: PropTypes.string,
  vencimiento: PropTypes.string.isRequired,
  conDescuento: PropTypes.string.isRequired,
  sinDescuento: PropTypes.string.isRequired,
}

export { CardIIBB };
