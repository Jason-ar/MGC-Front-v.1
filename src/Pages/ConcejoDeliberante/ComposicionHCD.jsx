import React from 'react';
import { ConcejalesContainer } from '../../Containers/HCD/Concejales';


const ComposicionHCD = () => {
    return (
        <div className="container text-center justify-content-center align-items-center h-100">
            <h1>Composicion 2019 - 2023</h1>
            <p>Bloques y autoridades.</p>
            <ConcejalesContainer />
        </div>
    );
}

export { ComposicionHCD };