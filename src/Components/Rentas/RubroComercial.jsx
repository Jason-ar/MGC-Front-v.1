import React from 'react';
import PropTypes from 'prop-types';
//import '../styles/cards.css';

function RubroCard({ rubro, image, resumen, descripcion, valor, link}) {
  return (
    <div className="card text-center text-dark rounded-20 animate__animated animate__fadeInUp">
      <div className="img-container">
        {/*<img src={image} alt="Foto hospedaje" className="card-img-top"/>*/}
      </div>
      <div className="card-body text-dark">
          <h4 className="card-title m-0 p-0">{rubro}</h4>
        <div>
          <p className="card-text m-0 p-0">{resumen}</p>
          <p className="card-text m-0 p-0">{descripcion}</p>
          <p className="card-text text-secondary m-0 p-0">${valor}</p>
          {/*<a href={link} className="btn btn-outline-primary rounded-25">Ver más</a>*/}
        </div>
      </div>
    </div>
  );
}
RubroCard.propTypes = {
  rubro: PropTypes.string.isRequired,
  valor: PropTypes.string.isRequired,
  resumen: PropTypes.string,
  descripcion: PropTypes.string,
  link: PropTypes.string,
}

export { RubroCard };
