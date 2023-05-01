import React from "react";
import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Icon from '../../Assets/icon/MGCIcon30px.png'

const Navbarr = () => {
    return (
        <div className="container text-center justify-content-center align-items-center h-100">
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="/">
                        
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Link className="nav-link" to="/">Home</Link>
                            <NavDropdown title="HCD" id="basic-nav-dropdown">
                                <Link className="nav-link" to="/concejo-deliberante">HCD</Link>
                                <NavDropdown.Divider />
                                <Link className="nav-link" to="/concejo-deliberante/concejales">Concejales</Link>
                            </NavDropdown>

                            <NavDropdown title="Deportes" id="basic-nav-dropdown">
                                <Link className="nav-link" to="/deportes">Deportes</Link>
                                <NavDropdown.Divider />
                                <Link className="nav-link" to="/deportes/escuelas">Escuelas</Link>
                                <Link className="nav-link" to="/deportes/eventos">Eventos</Link>
                                <Link className="nav-link" to="/deportes/profesores">Profesores</Link>
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
                                <Link className="nav-link" to="/derechos">Derechos</Link>
                            </NavDropdown>
                            <NavDropdown title="Turismo" id="basic-nav-dropdown">
                                <Link className="nav-link" to="/turismo">Turismo</Link>
                                <NavDropdown.Divider />
                                <Link className="nav-link" to="/turismo/hospedajes">Hospedajes</Link>
                                <Link className="nav-link" to="/turismo/gastronomia">Gastronomía</Link>
                                <Link className="nav-link" to="/fiesta-del-caballo">Fiesta del Caballo</Link>
                                <Link className="nav-link" to="/fiesta-del-animador">Fiesta del Animador</Link>
                                <Link className="nav-link" to="/turismo/centro-artesanal">Centro Artesanal</Link>
                                <Link className="nav-link" to="/turismo/pesca">Pesca</Link>
                            </NavDropdown>
                            <NavDropdown title="Producción" id="basic-nav-dropdown">
                                <Link className="nav-link" to="/obras">Obras</Link>
                                <NavDropdown.Divider />
                                <Link className="nav-link" to="/planta-de-faena">Planta de Faena</Link>
                                <Link className="nav-link" to="/ambiente">Ambiente</Link>
                                <Link className="nav-link" to="/bromatologia">Bromatología</Link>
                            </NavDropdown>
                            <NavDropdown title="Rentas" id="basic-nav-dropdown">
                                <Link className="nav-link" to="/rentas">Rentas</Link>
                                <NavDropdown.Divider />
                                <Link className="nav-link" to="/rentas/ingresos-brutos">Ingresos Brutos</Link>
                                <Link className="nav-link" to="/rentas/patente-automotriz">Patente</Link>
                                <Link className="nav-link" to="/rentas/habilitacion-comercial">Rubros</Link>
                            </NavDropdown>
                            <NavDropdown title="Inspección" id="basic-nav-dropdown">
                                <Link className="nav-link" to="/inspeccion">Inspección</Link>
                                <NavDropdown.Divider />
                                <Link className="nav-link" to="/guardia-urbana">Guardia Urbana</Link>
                                <Link className="nav-link" to="/juzgado-de-faltas">Juzgado de Faltas</Link>
                                <Link className="nav-link" to="/transito">Transito</Link>
                            </NavDropdown>
                            <NavDropdown title="Institucional" id="basic-nav-dropdown">
                                <Link className="nav-link" to="/institucional">Institucional</Link>
                                <NavDropdown.Divider />
                                <Link className="nav-link" to="/noticias">Noticias</Link>
                                <Link className="nav-link" to="/gestion">Gestion</Link>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export { Navbarr };