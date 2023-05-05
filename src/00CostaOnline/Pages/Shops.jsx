import React from 'react';
import { ShopsContainer } from '../Containers/ShopsContainer';


const Shops = () => {
    return (
        <div className="container text-center justify-content-center align-items-center h-100">
            <h1>Comercios</h1>
            <ShopsContainer />
        </div>
    );
}

export { Shops };