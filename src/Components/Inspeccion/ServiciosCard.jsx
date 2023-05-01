import React from 'react';
import PropTypes from 'prop-types';
//import '../../styles/Cards.css';
import { Link } from "react-router-dom";

function ServiciosCard({titulo, image, descripcion, subtitle, resumen, link}) {
  return (
    <div className="card text-center text-dark rounded-20 animate__animated animate__fadeInUp">
      {/*<div className="img-container">
          <img src={image} alt="Foto hospedaje" className="card-img-top"/>
  </div>*/}
      <Link to={link} className="btn rounded-25">
      <div className="card-body text-dark">
          <h6 className="card-title">{titulo}</h6>
          <h7 className="card-sub-title">{subtitle}</h7>
          <p className="card-text text-secondary">{resumen}</p>
          <p className="card-text text-secondary">{descripcion}</p>
      </div>
      </Link>
      
    </div>
  );
}
ServiciosCard.propTypes = {
  titulo: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  descripcion: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  resumen: PropTypes.string,
  link: PropTypes.string,
}

export { ServiciosCard };