import React from 'react';
import { Button } from 'react-bootstrap';
import { InfraccionContainer } from '../../Containers/Transito/Infraccion';
import { LegislacionContainer } from '../../Containers/Transito/Legislacion';
import { HeaderAreaContainer } from '../../Containers/Turismo/HeaderArea';
import { ContactosContainer } from '../../Containers/Transito/Contactos';
import { MaximasEspecialesContainer, VelocidadesMaximasContainer } from '../../Containers/Transito/Velocidades';
import { FAQRadarContainer } from '../../Containers/Transito/FAQRadarContainer';

const Transito = () => {
    return (
        <div className="container text-center justify-content-center align-items-center h-100">
            <HeaderAreaContainer />
            <h1>Transito Municipal</h1>
            <h4>Velocidades Maximas</h4>
            <VelocidadesMaximasContainer />
            <br></br>
            <h2>Control de velocidad por radar</h2>
            <InfraccionContainer />
            <br></br>
            <h3>Legislación</h3>
            <LegislacionContainer />
            <br></br>
            <h3>Preguntas Frecuentes</h3>
            <FAQRadarContainer />
            
            
        </div>
    );
}

export { Transito };