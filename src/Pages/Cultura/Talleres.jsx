import React from 'react';
import { TalleresContainer } from '../../Containers/Cultura/Talleres';


const Talleres = () => {
    return (
        <div className="container text-center justify-content-center align-items-center h-100">
            <h1>Talleres Culturales</h1>
            <TalleresContainer />
        
        </div>
    );
}

export { Talleres };