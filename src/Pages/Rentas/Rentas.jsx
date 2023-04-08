import React from 'react';
import { DescuentosContainer } from '../../Containers/Rentas/DescuentosContainer';
import { IIBBContainer } from '../../Containers/Rentas/IIBBContainer';

const Rentas = () => {
    return (
        <div>
            <h1>Rentas</h1>
            <DescuentosContainer />
            <IIBBContainer />
        </div>
    );
}

export { Rentas };