import React from 'react';
import PropTypes from 'prop-types';
import '../styles/cards.css';

//CARD NORMAL DEKSTOP
function FiestaDelCaballoCardArtistas({nombre, imageSource, dia, hora, lugar, rubroartista, realizado }) {
  return (
    <div className="card text-center bg-dark rounded-20 animate__animated animate__fadeInUp">
      <div className="img-container">
          <img src={imageSource} alt="Foto hospedaje" className="card-img-top"/>
      </div>
      <div className="card-body text-light p-0 m-0 lh-1">
          <h7 className="card-title p-0 m-0 lh-1">{nombre}</h7>
          {/*<p className="card-text text-secondary fs-6 p-0 m-0">{rubroartista}</p>
          <p className="card-text">{dia} {hora}</p>
          <p className="card-text text-secondary">{lugar}</p>
          <a href="#!" className="btn btn-outline-primary rounded-25">Ver más</a>*/}
      </div>
    </div>
  );
}
FiestaDelCaballoCardArtistas.propTypes = {
  nombre: PropTypes.string.isRequired,
  imageSource: PropTypes.string.isRequired,
  lugar: PropTypes.string.isRequired,
  dia: PropTypes.string.isRequired,
  hora: PropTypes.string.isRequired,
  rubroartista: PropTypes.string.isRequired,
  realizado: PropTypes.string
}

//CARD NORMAL PHONE OVERLAY
function FiestaDelCaballoPhoneCardArtistas({nombre, imageSource, dia, hora, lugar, rubroartista, realizado }) {
  return (
    <div className="card text-center bg-dark rounded-20 animate__animated animate__fadeInUp">
      <div className="img-container">
          <img src={imageSource} alt="Foto hospedaje" className="card-img-top"/>
      </div>
      <div className="card-img-overlay text-light p-0 m-0 lh-1">
          <h7 className="card-title p-0 m-0 fs-7 fixed-bottom">{nombre}</h7>
          {/*<p className="card-text text-secondary fs-7 p-0 m-0">{rubroartista}</p>
          <p className="card-text">{dia} {hora}</p>
          <p className="card-text text-secondary">{lugar}</p>
          <a href="#!" className="btn btn-outline-primary rounded-25">Ver más</a>*/}
      </div>
    </div>
  );
}
FiestaDelCaballoPhoneCardArtistas.propTypes = {
  nombre: PropTypes.string.isRequired,
  imageSource: PropTypes.string.isRequired,
  lugar: PropTypes.string.isRequired,
  dia: PropTypes.string.isRequired,
  hora: PropTypes.string.isRequired,
  rubroartista: PropTypes.string.isRequired,
  realizado: PropTypes.string
}

export { FiestaDelCaballoCardArtistas };
export { FiestaDelCaballoPhoneCardArtistas };