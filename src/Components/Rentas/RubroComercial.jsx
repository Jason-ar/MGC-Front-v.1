import React from 'react';
import PropTypes from 'prop-types';
//import '../styles/cards.css';

function RubroCard({ rubro, imageSource, resumen, descripcion, valor, link}) {
  return (
    <div className="card text-center text-dark rounded-20 animate__animated animate__fadeInUp">
      <div className="img-container">
        {/*<img src={imageSource} alt="Foto hospedaje" className="card-img-top"/>*/}
      </div>
      <div className="card-body text-dark">
        <div>
          <h4 className="card-title">{rubro}</h4>
        </div>
        <div>
          <p className="card-text">{resumen}</p>
          <p className="card-text">${descripcion}</p>
          <p className="card-text text-secondary">{valor}</p>
          <a href={link} className="btn btn-outline-primary rounded-25">Ver más</a>*
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
