import React from "react"; 
//import { TurismoHospedajesCardsContainer } from "../../templates/TurismoHospedajesCardsContainer";

//import { PayadoresModal } from '../../Templates/FiestaDelCaballo/ArtistasModal';
//import { NocheDeFolkloreModal } from '../../Templates/FiestaDelCaballo/ArtistasModal';
//import { ArtistasModal } from '../../Templates/FiestaDelCaballo/ArtistasModal';

import { BingoModal } from '../../Templates/FiestaDelCaballo/ActividadesModal';
//import { DesfileModal } from '../../Templates/FiestaDelCaballo/ActividadesModal';

import { AuspiciantesModal } from '../../Templates/FiestaDelCaballo/ModalStandsAuspiciantes';
import { StandsModal } from '../../Templates/FiestaDelCaballo/ModalStandsAuspiciantes';

import { ViernesFlayerModal } from '../../Templates/FiestaDelCaballo/FlayersModal';
import { SabadoFlayerModal } from '../../Templates/FiestaDelCaballo/FlayersModal';
import { BaileFlayerModal } from '../../Templates/FiestaDelCaballo/FlayersModal';
import { DomingoFlayerModal } from '../../Templates/FiestaDelCaballo/FlayersModal';

const FiestaDelAnimador = () => {
    return(
        <div className="container text-center justify-content-center align-items-center h-100">
            <h1>Fiesta del Animador de Destrezas Gauchas </h1>
            {/*<PayadoresModal />;
            <NocheDeFolkloreModal />;
            <DesfileModal />;
            <ArtistasModal />;*/}
            <BingoModal />;
            <AuspiciantesModal />;
    <StandsModal />;
            <ViernesFlayerModal />;
            <SabadoFlayerModal />;
            <BaileFlayerModal />;
            <DomingoFlayerModal />;
            
        </div>
    )
}

export { FiestaDelAnimador };