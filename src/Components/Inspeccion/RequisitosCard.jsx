import React from 'react';
import PropTypes from 'prop-types';
import '../../styles/global.scss';

function RequisitosCard({titulo, requisito1, requisito2, requisito3, requisito4, requisito5, link }) {
  return (
    <div className="card text-center rounded-20 animate__animated animate__fadeInUp" styles= " box-shadow: 5px 10px 20px 1px rgba(255, 255, 255, 0.2)">
      <div className="card-body p-0 m-2 lh-1">
          {/*<h4 className="card-title p-0 m-1 lh-1">{titulo}</h4>*/}
          <p className="card-text">{requisito1}</p>
          <p className="card-text">{requisito2}</p>
          <p className="card-text">{requisito3}</p>
          <p className="card-text">{requisito4}</p>
          <p className="card-text">{requisito5}</p>
          {/*<a href={link} className="btn btn-outline-primary rounded-25">Ver más</a>*/}
      </div>
    </div>
  );
}   
RequisitosCard.propTypes = {
  titulo: PropTypes.string.isRequired,
  link: PropTypes.string,
  requisito1: PropTypes.string,
  requisito2: PropTypes.string,
  requisito3: PropTypes.string,
  requisito4: PropTypes.string,
  requisito5: PropTypes.string,
}
export { RequisitosCard };