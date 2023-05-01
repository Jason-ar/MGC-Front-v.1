import React from 'react';
import PropTypes from 'prop-types';
//import '../styles/cards.css';

function FAQCard({pregunta, respuesta, link }) {
  return (
    <div className="card text-center text-dark border-0 rounded-20 animate__animated animate__fadeInUp">
      <div className="card-body text-dark p-0 m-1 lh-1">
          <h5 className="card-title p-0 m-0 lh-1">{pregunta}</h5>
          <p className="card-text p-0 m-1">{respuesta}</p>
          {/*<a href={link} className="btn btn-outline-primary rounded-25">Ver más</a>*/}
      </div>
    </div>
  );
}   
FAQCard.propTypes = {
  pregunta: PropTypes.string.isRequired,
  link: PropTypes.string,
  respuesta: PropTypes.string.isRequired,
}
export { FAQCard };