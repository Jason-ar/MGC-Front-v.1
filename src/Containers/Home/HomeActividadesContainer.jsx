import React from "react";
import { SimpleHomeCard } from "../../Components/Home/HomeCard";
//import { Card } from '../components/Card';  
import { HomeActividadesArray } from "../../Data/Home/HomeActividadesArray";
import { Link } from "react-router-dom";

const HomeActividadesContainer = () => {
    return (
        <div ClassName="container d-flex justify-content-center align-items-center h-100">
            <div className="container d-flex justify-content-center align-items-center h-100">
                <div className="row">
                    {
                        HomeActividadesArray.map(card => (
                            <div className="col-xl-3 col-lg-3 col-sm-4 col-6 g-1" key={card.id}>
                                <SimpleHomeCard titulo={card.titulo} image={card.image} subtitulo={card.subtitulo} resumen={card.resumen} link={card.link} />
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>

    )
}

export { HomeActividadesContainer };