import React from 'react';
import { HeaderAreaContainer } from '../../../Containers/Inspeccion/HeaderArea';
import { LicenciasProfesionalesContainer } from '../../../Containers/Inspeccion/Licencias/LicenciasConducirContainer';
import { FAQLicenciasContainer } from '../../../Containers/Inspeccion/Licencias/FAQLicencias';
import { RequisitosLicenciasProfesionalesContainer } from '../../../Containers/Inspeccion/Licencias/Requisitos';
import { RelacionadosExternos, RelacionadosInternos } from '../../../Containers/Inspeccion/Licencias/RelacionadosContainer';

const LicenciasProfesionales = () => {
    return (
        <div className="container text-center justify-content-center align-items-center h-100">
            <HeaderAreaContainer />
            <h2>Licencias Profesionales</h2>
            <LicenciasProfesionalesContainer />
            <RequisitosLicenciasProfesionalesContainer />
            <FAQLicenciasContainer />
            <h3 className='m-4'>Otras licencias de Conducir</h3>
            <RelacionadosExternos />
            <RelacionadosInternos />
        </div>
    );
}

export { LicenciasProfesionales };