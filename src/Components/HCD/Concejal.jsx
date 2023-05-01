import React from 'react';
import PropTypes from 'prop-types';
//import '../styles/cards.css';


function CardConcejal({ concejal, image, puesto, telefono, bloque, inicio, tipo, link }) {
  return (
    <div className="card text-center text-dark rounded-20 animate__animated animate__fadeInUp">
      <div className="img-container">
        <img src={image} alt="Foto profesor" className="card-img-top" />
      </div>
      <div className="card-body text-dark p-0 m-0 lh-1">
        <h7 className="card-text text-secondary">{bloque}</h7>
        <h6 className="card-title p-0 m-1 lh-1">{concejal}</h6>
        <p className="card-text fs-6 p-0 m-0">{puesto} {tipo}</p>
        <p className="card-text text-secondary p-0 m-0">{inicio}</p>
        {/*<a href={link} className="btn btn-outline-primary rounded-25">Ver más</a>*/}
      </div>
    </div>
  );
}
CardConcejal.propTypes = {
  concejal: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  bloque: PropTypes.string.isRequired,
  puesto: PropTypes.string.isRequired,
  inicio: PropTypes.string,
  tipo: PropTypes.string,
  link: PropTypes.string,

}

export { CardConcejal };