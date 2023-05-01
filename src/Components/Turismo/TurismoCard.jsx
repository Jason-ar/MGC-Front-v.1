import React from 'react';
import PropTypes from 'prop-types';
//import '../styles/cards.css';
import { Link } from "react-router-dom";

function TurismoCard({ servicio, image, subtitulo, resumen, link }) {
  return (
    <div className="card text-dark text-center border-0 rounded-20 animate__animated animate__fadeInUp">
      {/*<div className="img-container">
        <img src={image} alt="Foto hospedaje" className="card-img-top"/>
      </div>*/}
      <Link to={link} className="btn border-0 rounded-25">
        <div className="card-body border-0 m-0 p-0">
          <h6 className="card text-dark border-0 m-0 p-0">{servicio}</h6>
        </div>
      </Link>
    </div>
  );
}

TurismoCard.propTypes = {
  servicio: PropTypes.string.isRequired,
  image: PropTypes.string,
  link: PropTypes.string.isRequired,
  subtitulo: PropTypes.string,
  resumen: PropTypes.string,
}

export { TurismoCard };