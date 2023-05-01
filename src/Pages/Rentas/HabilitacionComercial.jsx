import React from 'react';
import { Button } from 'react-bootstrap';
import { RubrosContainer } from '../../Containers/Rentas/Rubros/RubrosContainer';
import { RubrosFAQContainer } from '../../Containers/Rentas/Rubros/RubrosFAQContainer';

const HabilitacionComercial = () => {
    return (
        <div className="container text-center justify-content-center align-items-center h-100">
            <h1>Habilitación Comercial</h1>
            <h2>Rubros comerciales</h2>
            <RubrosContainer />
            <h2>Habilitacion Comercial</h2>
            <RubrosFAQContainer />
            <div className="container text-center justify-content-center align-items-center h-100">
                <Button to="/rentas/ingresos-brutos" >Ingresos Brutos</Button>
                <Button href="https://www.afip.gob.ar/monotributo/categorias.asp" target="_blank" >Categorias Monotributo</Button>
            </div>
        </div>
    );
}

export { HabilitacionComercial };