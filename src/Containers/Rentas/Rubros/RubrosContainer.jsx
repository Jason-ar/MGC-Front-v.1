import React from "react";
import { RubroCard } from "../../../Components/Rentas/RubroComercial";
//import { Card } from '../components/Card';  
import { RubrosArray } from "../../../Data/Rentas/Rubros/RubrosArray";

const RubrosContainer = () => {
    return (
        <div ClassName="container d-flex justify-content-center align-items-center h-100">
            <h2 ClassName="container d-flex justify-content-center align-items-center h-100" >Categorías Ingresos Brutos 2023</h2>;
            <div className="container d-flex justify-content-center align-items-center h-100">
                <div className="row">
                    {
                        RubrosArray.map(card => (
                            <div className="col-xl-3 col-lg-3 col-sm-4 col-12 g-1" key={card.id}>
                                <RubroCard categoria={card.categoria} imageSource={card.image} vencimiento={card.vencimiento} conDescuento={card.conDescuento} sinDescuento={card.sinDescuento} />
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>

    )
}

export { RubrosContainer };