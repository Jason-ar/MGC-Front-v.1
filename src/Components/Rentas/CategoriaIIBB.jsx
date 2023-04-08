import React from 'react';
import PropTypes from 'prop-types';
//import '../styles/cards.css';

function CardIIBB({categoria, imageSource, conDescuento, sinDescuento, vencimiento, }) {
  return (
    <div className="card text-center bg-dark rounded-20 animate__animated animate__fadeInUp">
      <div className="img-container">
          {/*<img src={imageSource} alt="Foto hospedaje" className="card-img-top"/>*/}
      </div>
      <div className="card-body text-light">
          <h4 className="card-title">Categoría {categoria}</h4>
          <p className="card-text">Pago al día: ${conDescuento}</p>
          <p className="card-text">Pago atrasado: ${sinDescuento}</p>
          {/*<p className="card-text text-secondary">{vencimiento}</p>
          <a href="#!" className="btn btn-outline-primary rounded-25">Ver más</a>*/}
      </div>
    </div>
  );
}
CardIIBB.propTypes = {
  categoria: PropTypes.string.isRequired,
  imageSource: PropTypes.string.isRequired,
  vencimiento: PropTypes.string.isRequired,
  conDescuento: PropTypes.string.isRequired,
  sinDescuento: PropTypes.string.isRequired,
}

export { CardIIBB };
