import React from "react";
import { CineCard } from '../../Components/Cine/CineCard';  
import { ArrayCine } from '../../Data/Cultura/ArrayCine';

const CineContainer = () => {
    return(
        <div className="container d-flex justify-content-center align-items-center h-100">
            <div className="row">
                {
                    ArrayCine.map(card => (
                        <div className="col-xl-3 col-lg-3 col-sm-4 col-6 g-0" key={card.id}>
                            <CineCard area={card.area} imageSource={card.image} disciplina={card.disciplina} edad={card.edad} rama={card.rama} lugar={card.lugar} dias={card.dias} horario={card.horario} inicio={card.inicio} profesor={card.profesor}
                            contacto={card.contacto} />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export { CineContainer };