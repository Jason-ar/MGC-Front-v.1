import React from 'react';
import { HeaderAreaContainer } from '../../Containers/Biblioteca/HeaderArea'
import { RelacionadosExternos, RelacionadosInternos } from '../../Containers/Biblioteca/RelacionadosContainer';
import { ServiciosBibliotecaContainer } from '../../Containers/Biblioteca/ServiciosBiblioteca';
import { SociosBibliotecaContainer } from '../../Containers/Biblioteca/SociosBiblioteca';

const Biblioteca = () => {
    return (
        <div className="container text-center justify-content-center align-items-center h-100">
            <HeaderAreaContainer />
            <h1>Biblioteca Popular Juan Martín de Pueyrredón.</h1>
            <h2>Servicios</h2>
            <ServiciosBibliotecaContainer />
            <br></br>
            <h3>Hacete Socio</h3>
            <SociosBibliotecaContainer />
            <br></br>
            <h3>Relacionado</h3>
            <RelacionadosInternos />
            <RelacionadosExternos />
        </div>
    );
}

export { Biblioteca };