import React from "react";
import { PatenteCard } from "../../../Components/Rentas/PatenteCard";
//import { Card } from '../components/Card';  
import { PatenteArray } from "../../../Data/Rentas/Automotor/PatenteArray";

const PatenteContainer = () => {
    return (
        <div ClassName="container d-flex justify-content-center align-items-center h-100">
            <div className="container d-flex justify-content-center align-items-center h-100">
                <div className="row">
                    {
                        PatenteArray.map(card => (
                            <div className="col-xl-3 col-lg-3 col-sm-4 col-12 g-1" key={card.id}>
                                <PatenteCard titulo={card.titulo} resumen={card.resumen} descripcion={card.descripcion} valor={card.valor} />
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>

    )
}

export { PatenteContainer };