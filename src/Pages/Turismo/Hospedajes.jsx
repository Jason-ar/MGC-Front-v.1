import React from "react"; 
import { HospedajesContainer } from '../../Containers/Turismo/Hospedajes/Hospedajes';
import { RelacionadosExternos, RelacionadosInternos } from "../../Containers/Turismo/RelacionadosContainer";
//import { HospedajesContainer } from '@Containers/Turismo/Hospedajes.jsx';

const Hospedajes = () => {
    return(
        <div className="container text-center justify-content-center align-items-center h-100">
            <h1>Hospedajes en Gobernador Costa</h1>
            <HospedajesContainer />
            <br></br>
            <h3>Relacionado</h3>
            <RelacionadosInternos />
            <RelacionadosExternos />
        </div>
    )
}

export { Hospedajes };