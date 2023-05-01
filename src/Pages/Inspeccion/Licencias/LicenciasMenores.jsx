import React from 'react';
import { HeaderAreaContainer } from '../../../Containers/Inspeccion/HeaderArea';
import { LicenciasMenoresContainer } from '../../../Containers/Inspeccion/Licencias/LicenciasConducirContainer';
import { FAQLicenciasContainer } from '../../../Containers/Inspeccion/Licencias/FAQLicencias';
import { RequisitosLicenciasMenoresContainer } from '../../../Containers/Inspeccion/Licencias/Requisitos';
import { RelacionadosExternos, RelacionadosInternos } from '../../../Containers/Inspeccion/Licencias/RelacionadosContainer';

const LicenciasMenores = () => {
    return (
        <div className="container text-center justify-content-center align-items-center h-100">
            <HeaderAreaContainer />
            <h2 className='m-4'>Licencia Menores</h2>
            <LicenciasMenoresContainer />
            <br></br>
            <h2 className='m-4'>Requisitos</h2>
            <RequisitosLicenciasMenoresContainer />
            <FAQLicenciasContainer />
            <h3 className='m-4'>Otras licencias de Conducir</h3>
            <RelacionadosExternos />
            <RelacionadosInternos />
        </div>
    );
}

export { LicenciasMenores };