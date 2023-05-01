import React from 'react';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
//import '../styles/cards.css';

function RentasCard({ servicio, image, resumen, subtitulo, texto, video, link, profesor }) {
  return (
    <div className="card text-center text-dark rounded-20 animate__animated animate__fadeInUp">
      <Link to={link} className="btn border-0 rounded-25">
        {/*<div className="img-container">
          <img src={image} alt="Foto hospedaje" className="card-img-top" />
  </div>*/}
        <div className="card-body text-dark p-0">
          <h6 className="card-title m-0 p-1">{servicio}</h6>
          <h7 className="card-text text-secondary m-0">{subtitulo}</h7>
          {/*<p className="card-text">{resumen}</p>
          <p className="card-text text-secondary">{texto}</p>
          <p className="card-text text-secondary">{video}</p>*/}
        </div>
      </Link>
    </div>
  );
}
RentasCard.propTypes = {
  servicio: PropTypes.string.isRequired,
  resumen: PropTypes.string,
  image: PropTypes.string,
  video: PropTypes.string,
  texto: PropTypes.string,
  subtitulo: PropTypes.string,
  link: PropTypes.string,
}

export { RentasCard };
