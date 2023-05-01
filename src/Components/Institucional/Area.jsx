import React from 'react';
import PropTypes from 'prop-types';
//import '../styles/cards.css';

//CARD NORMAL DEKSTOP
function CardArea({ area, image, responsable, telefono, tipo, resumen, direccion, horario, link }) {
  return (
    <div className="card text-center text-dark rounded-20 animate__animated animate__fadeInUp">
      <div className="img-container">
        <img src={image} alt="Foto profesor" className="card-img-top" />
      </div>
      <div className="card-body text-dark p-0 m-0 lh-1">
        {/*<h7 className="card-text text-secondary">{tipo}</h7>*/}
        <h4 className="card-title p-0 m-1 lh-1">{area}</h4>
        {/*<p className="card-text fs-6 p-0 m-0">Ref. {responsable}</p>
        <p className="card-text text-secondary p-0 m-0">{resumen}</p>*/}
        {/*<p className="card-text text-secondary p-0 m-0">{telefono}</p>
        <p className="card-text text-secondary p-0 m-0">{horario}</p>
      <p className="card-text text-secondary p-0 m-0">{direccion}</p>*/}
        <a href={link} className="btn btn-outline-primary rounded-25">Ver más</a>
      </div>
    </div>
  );
}
CardArea.propTypes = {
  area: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  tipo: PropTypes.string.isRequired,
  responsable: PropTypes.string.isRequired,
  telefono: PropTypes.string.isRequired,
  resumen: PropTypes.string.isRequired,
  horario: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,

}

export { CardArea };