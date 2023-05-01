import React from 'react';
import { FAQDescargosContainer } from '../../Containers/JuzgadoDeFaltas/Descargos/FAQDescargos';
import { HeaderAreaContainer } from '../../Containers/JuzgadoDeFaltas/HeaderArea';
import { Button } from 'react-bootstrap';
import { DescargosContainer } from '../../Containers/JuzgadoDeFaltas/Descargos/DescargosContainer';
import { RelacionadosExternos, RelacionadosInternos } from '../../Containers/JuzgadoDeFaltas/Descargos/RelacionadosContainer';

const Descargos = () => {
    return (
        <div className="container text-center justify-content-center align-items-center h-100">
            <HeaderAreaContainer />
            <h1>Descargos</h1>
            <br></br>
            <h2>Hacer un Descargo</h2>
            <DescargosContainer />
            <br></br>
            <FAQDescargosContainer />
            <h2>Relacionados</h2>
            <RelacionadosExternos />
            <RelacionadosInternos />
            <br></br>
        </div>
    );
};

export { Descargos };