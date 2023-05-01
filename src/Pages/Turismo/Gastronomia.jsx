import React from "react"; 
import { HospedajesContainer } from '../../Containers/Turismo/Hospedajes/Hospedajes';
//import { HospedajesContainer } from '@Containers/Turismo/Hospedajes.jsx';

const Gastronomia = () => {
    return(
        <div className="container text-center justify-content-center align-items-center h-100">
            <h1>Gastronomía en Gobernador Costa</h1>
            <HospedajesContainer />
        </div>
    )
}

export { Gastronomia };