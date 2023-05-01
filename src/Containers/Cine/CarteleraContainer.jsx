import React from "react";
import { CarteleraCard } from '../../Components/Cine/CarteleraCard';  
import { CartelerasArray } from '../../Data/Cine/CartelerasArray';

const CartelerasContainer = () => {
    return(
        <div className="container d-flex justify-content-center align-items-center h-100">
            <div className="row">
                {
                    CartelerasArray.map(card => (
                        <div className="col-xl-3 col-lg-3 col-sm-4 col-6 g-0" key={card.id}>
                            <CarteleraCard pelicula={card.pelicula} image={card.image} subtitulo={card.subtitulo} edad={card.edad} apertura={card.apertura} inicio={card.inicio} entrada={card.entrada} cupos={card.cupos} resumen={card.resumen} link={card.link} />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export { CartelerasContainer };