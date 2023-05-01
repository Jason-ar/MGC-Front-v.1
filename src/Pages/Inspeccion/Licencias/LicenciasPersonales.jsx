import React from 'react';
import { HeaderAreaContainer } from '../../../Containers/Inspeccion/HeaderArea';
import { LicenciasPersonalesContainer } from '../../../Containers/Inspeccion/Licencias/LicenciasConducirContainer';
import { FAQLicenciasContainer } from '../../../Containers/Inspeccion/Licencias/FAQLicencias';
import { RequisitosLicenciasPersonalesContainer } from '../../../Containers/Inspeccion/Licencias/Requisitos';
import { RelacionadosExternos, RelacionadosInternos } from '../../../Containers/Inspeccion/Licencias/RelacionadosContainer';


const LicenciasPersonales = () => {
    return (
        <div className="container text-center justify-content-center align-items-center h-100">
            <HeaderAreaContainer />
            <h2 className='m-4'>Licencias Personales</h2>
            <LicenciasPersonalesContainer />
            <h2 className='m-4'>Requisitos</h2>
            <RequisitosLicenciasPersonalesContainer />
            <FAQLicenciasContainer />
            <br></br>
            <h3 className='m-4'>Otras licencias de Conducir</h3>
            <RelacionadosExternos />
            <RelacionadosInternos />
        </div>
    );
}

export { LicenciasPersonales };