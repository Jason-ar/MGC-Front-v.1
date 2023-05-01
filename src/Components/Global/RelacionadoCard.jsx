import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';
import { Link } from "react-router-dom";
//import '../styles/cards.css';

function InternoCard({ titulo, link }) {
    return (
        <div className="card text-center text-dark rounded-20 animate__animated animate__fadeInUp">
            <Link to={link} className="btn border-0 rounded-25">
                    <h7 className="card-title m-0 p-1">{titulo}</h7>
            </Link>
        </div>
    );
};

InternoCard.propTypes = {
    titulo: PropTypes.string.isRequired,
    link: PropTypes.string,
};


function ExternoCard({ titulo, link }) {
    return (
            <Button as="a" variant="primary" target="_blank" href={link} className="m-2">
                <h7 className="card-title p-0 m-0 lh-1">{titulo}</h7>
            </Button>
    );
};

ExternoCard.propTypes = {
    titulo: PropTypes.string.isRequired,
    link: PropTypes.string,
};


export { InternoCard };
export { ExternoCard };

/*<div className="card text-center text-dark border-0 rounded-20 animate__animated animate__fadeInUp"></div>*/