import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';
import { Link } from "react-router-dom";
//import '../styles/cards.css';

function TransitoCard({ titulo, image, resumen, subtitulo, link }) {
    return (
        <div className="card text-center text-dark rounded-20 animate__animated animate__fadeInUp">
            <Link to={link} className="btn border-0 rounded-25 p-0">
            <div className="card-body text-dark m-0 p-0">
                <h4 className="card-title m-1 p-0">{titulo}</h4>
                <h7 className="card-text text-secondary m-0 p-0">{subtitulo}</h7>
                <p className="card-text m-0 p-0">{resumen}</p>
            </div>
                </Link>
        </div>
    );
};

TransitoCard.propTypes = {
    titulo: PropTypes.string.isRequired,
    resumen: PropTypes.string,
    subtitulo: PropTypes.string,
    link: PropTypes.string,
};

export { TransitoCard };
