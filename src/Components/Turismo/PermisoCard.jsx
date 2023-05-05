import React from 'react';
import PropTypes from 'prop-types';
//import '../styles/cards.css';
function PermisoCard({servicio, image, valor, subtitulo, texto, video, }) {
  return (
    <div className="card text-center text-dark rounded-20 animate__animated animate__fadeInUp">
      {/*<div className="img-container">
          <img src={image} alt="Foto hospedaje" className="card-img-top"/>
  </div>*/}
      <div className="card-body text-dark m-0 p-0">
          <h6 className="card-title m-0 p-0">{servicio}</h6>
          <h7 className="card-text text-secondary m-0 p-0">{subtitulo}</h7>
          <p className="card-text m-0 p-0">{valor}</p>
          <p className="card-text text-secondary m-0 p-0">{texto}</p>
          <p className="card-text text-secondary m-0 p-0">{video}</p>
      </div>
    </div>
  );
};
PermisoCard.propTypes = {
  servicio: PropTypes.string.isRequired,
  valor: PropTypes.string,
  image: PropTypes.string,
  video: PropTypes.string,
  texto: PropTypes.string,
  subtitulo: PropTypes.string
 };
export { PermisoCard };