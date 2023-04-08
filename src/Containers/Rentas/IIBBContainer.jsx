import React from "react";
import { CardIIBB } from "../../Components/Rentas/CategoriaIIBB";
//import { Card } from '../components/Card';  
import { ArrayIIBB } from "../../Data/Rentas/ArrayCategoriasIIBB";

const IIBBContainer = () => {
    return (
        <div ClassName="container d-flex justify-content-center align-items-center h-100">
            <h2 ClassName="container d-flex justify-content-center align-items-center h-100" >Categorías Ingresos Brutos 2023</h2>;
            <div className="container d-flex justify-content-center align-items-center h-100">
                <div className="row">
                    {
                        ArrayIIBB.map(card => (
                            <div className="col-xl-3 col-lg-3 col-sm-4 col-6 g-0" key={card.id}>
                                <CardIIBB categoria={card.categoria} imageSource={card.image} vencimiento={card.vencimiento} conDescuento={card.conDescuento} sinDescuento={card.sinDescuento} />
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>

    )
}

export { IIBBContainer };