import React from 'react';
import PropTypes from 'prop-types';
//import '../styles/cards.css';

//CARD NORMAL DEKSTOP
function ContactoCard({ titulo, telefono1, contacto1, email, link }) {
  return (
    <div className="card text-center text-dark rounded-20 animate__animated animate__fadeInUp">
      <div className="card-body text-dark p-0 m-0 lh-1">
        <h4 className="card-title p-0 m-1 lh-1">{titulo}</h4>
        <h7 className="card-text text-secondary">{contacto1}</h7>
        <p className="card-text text-secondary p-0 m-0">{telefono1}</p>
        <p className="card-text text-secondary p-0 m-0">{email}</p>
        {/*<a href={link} className="btn btn-outline-primary rounded-25">Ver más</a>*/}
      </div>
    </div>
  );
}
ContactoCard.propTypes = {
  titulo: PropTypes.string.isRequired,
  contacto1: PropTypes.string.isRequired,
  telefono1: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,

}

export { ContactoCard };