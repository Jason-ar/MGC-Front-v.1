import React from 'react';
import { Button } from 'react-bootstrap';

const BotonesExternos = () => {
    return (
        <div className="container text-center justify-content-center align-items-center h-100 m-1">
            <h2>Links Externos</h2>
            <Button as="a" variant="primary" target="_blank" href="http://www.produccion.chubut.gov.ar/INDUSTRIAYCOMERCIO" className="m-2">
                Comercio Interior
            </Button>
        </div>
    );
};
export { BotonesExternos}