import React from "react"; 
//import { TurismoHospedajesCardsContainer } from "../../templates/TurismoHospedajesCardsContainer";

import { PayadoresModal } from '../../Templates/FiestaDelCaballo/ArtistasModal';
import { NocheDeFolkloreModal } from '../../Templates/FiestaDelCaballo/ArtistasModal';
import { ArtistasModal } from '../../Templates/FiestaDelCaballo/ArtistasModal';

import { BingoModal } from '../../Templates/FiestaDelCaballo/ActividadesModal';
import { DesfileModal } from '../../Templates/FiestaDelCaballo/ActividadesModal';

import { AuspiciantesModal } from '../../Templates/FiestaDelCaballo/ModalStandsAuspiciantes';
import { StandsModal } from '../../Templates/FiestaDelCaballo/ModalStandsAuspiciantes';

import { ViernesFlayerModal } from '../../Templates/FiestaDelCaballo/FlayersModal';
import { SabadoFlayerModal } from '../../Templates/FiestaDelCaballo/FlayersModal';
import { BaileFlayerModal } from '../../Templates/FiestaDelCaballo/FlayersModal';
import { DomingoFlayerModal } from '../../Templates/FiestaDelCaballo/FlayersModal';

const FiestaDelCaballo = () => {
    return(
        <div>
            <h2>Fiesta del Caballo</h2>
            <PayadoresModal />;
            <NocheDeFolkloreModal />;
            <DesfileModal />;
            <ArtistasModal />;
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

export { FiestaDelCaballo };