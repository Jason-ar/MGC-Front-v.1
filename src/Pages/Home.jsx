import React from 'react';
//import Button from '@mui/material/Button';
import { Button } from 'react-bootstrap';
import { HomeTramitesContainer } from '../Containers/Home/HomeTramitesContainer';
import { Link } from "react-router-dom";
import { HomeServiciosContainer } from '../Containers/Home/HomeServiciosContainer';
import { HeaderAreaContainer } from '../Containers/Home/HeaderHome';
import { HomeActividadesContainer } from '../Containers/Home/HomeActividadesContainer';


const Home = () => {
    return (
        <div className="container text-center justify-content-center align-items-center h-100">
            <HeaderAreaContainer />
            {/*<h1>Municipalidad de Gobernador Costa</h1>
            <Button variant="contained">Primary Button</Button>*/}
            <Button as="a" variant="primary" target="_blank" href="https://modo-online.netlify.app/">
                Ver website
            </Button>
            <h2 ClassName="container d-flex justify-content-center align-items-center h-100" >Trámites</h2>
            <HomeTramitesContainer />
            <h2 ClassName="container d-flex justify-content-center align-items-center h-100" >Servicios</h2>
            <HomeServiciosContainer />
            <h2 ClassName="container d-flex justify-content-center align-items-center h-100" >Actividades</h2>
            <HomeActividadesContainer />
        </div>
    );
}

export { Home };