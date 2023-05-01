import React from 'react';
import PropTypes from 'prop-types';
//import '../../styles/Cards.css';

function CardHospedaje({name, imageSource, type, direction, phone, secondaryPhone}) {
  return (
    <div className="card text-center text-dark rounded-20 animate__animated animate__fadeInUp">
      <div className="img-container">
          <img src={imageSource} alt="Foto hospedaje" className="card-img-top"/>
      </div>
      <div className="card-body text-dark m-0 p-0">
          {/*<a href="#!" className="btn btn-outline-primary rounded-15">{type}</a>*/}
          <h7 className="card-sub-title m-0 p-0">{type}</h7>
          <h6 className="card-title m-0 p-0"><b>{name}</b></h6>
          <p className="card-text text-secondary m-0 p-0">{direction}</p>
          <p className="card-text text-secondary m-0 p-0">{phone}</p>
          {/*<p className="card-text text-secondary">{secondaryPhone}</p>*/}
      </div>
    </div>
  );
}
CardHospedaje.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  imageSource: PropTypes.string.isRequired,
  direction: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  secondaryPhone: PropTypes.string
}

export { CardHospedaje };
