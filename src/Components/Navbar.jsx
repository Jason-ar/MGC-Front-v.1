import React from "react";
import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const Navbarr = () => {
    return (
        <div>
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="/">Gobernador Costa</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Link className="nav-link" to="/concejo-deliberante">HCD</Link>
                        
                        <NavDropdown title="Deportes" id="basic-nav-dropdown">
                            <Link className="nav-link" to="/deportes">Deportes</Link>
                            <NavDropdown.Divider />
                                <Link className="nav-link" to="/deportes/escuelas">Escuelas</Link>
                                <Link className="nav-link" to="/deportes/eventos">Eventos</Link>
                        </NavDropdown>

                        <NavDropdown title="Cultura" id="basic-nav-dropdown">
                            <Link className="nav-link" to="/cultura">Cultura</Link>
                            <NavDropdown.Divider />
                                <Link className="nav-link" to="/cultura/talleres">Talleres</Link>
                                <Link className="nav-link" to="/cultura/cine">Cine</Link>
                                <Link className="nav-link" to="/cultura/eventos">Eventos</Link>
                                <Link className="nav-link" to="/cultura/museo">Museo</Link>
                                <Link className="nav-link" to="/cultura/punto-digital">Punto Digital</Link>
                        </NavDropdown>
                        <NavDropdown title="Social" id="basic-nav-dropdown">
                            <Link className="nav-link" to="/social">Social</Link>
                            <NavDropdown.Divider />
                                <Link className="nav-link" to="/social/infancia">Infancia</Link>
                                <Link className="nav-link" to="/social/adultos">Adultos Mayores</Link>
                        </NavDropdown>
                        <NavDropdown title="Turismo" id="basic-nav-dropdown">
                            <Link className="nav-link" to="/turismo">Turismo</Link>
                            <NavDropdown.Divider />
                                <Link className="nav-link" to="/fiesta-del-caballo">Fiesta del Caballo</Link>
                                <Link className="nav-link" to="/turismo/hospedajes">Hospedajes</Link>
                        </NavDropdown>
                        <NavDropdown title="Producción" id="basic-nav-dropdown">
                            <Link className="nav-link" to="/obras">Obras</Link>
                            <NavDropdown.Divider />
                                <Link className="nav-link" to="/planta-de-faena">Planta de Faena</Link>
                        </NavDropdown>
                        <NavDropdown title="Inspección" id="basic-nav-dropdown">
                            <Link className="nav-link" to="/rentas">Rentas</Link>
                            <NavDropdown.Divider />
                                <Link className="nav-link" to="/guardia-urbana">Guardia Urbana</Link>
                                <Link className="nav-link" to="/inspeccion">Inspección</Link>
                                <Link className="nav-link" to="/juzgado-de-faltas">Juzgado de Faltas</Link>
                                <Link className="nav-link" to="/transito">Transito</Link>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        </div>
    )
}

export { Navbarr };