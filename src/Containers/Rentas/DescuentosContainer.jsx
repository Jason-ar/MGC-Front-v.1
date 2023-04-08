import React from "react";
import { CardDescuento } from "../../Components/Rentas/Descuento";
//import { Card } from '../components/Card';  
import { ArrayDescuentos } from "../../Data/Rentas/ArrayDescuentos";

const DescuentosContainer = () => {
    return(
        <div>
           <h2>Descuentos 2023</h2>;
        <div className="container d-flex justify-content-center align-items-center h-100">
            <div className="row">
                {
                    ArrayDescuentos.map(card => (
                        <div className="col-xl-3 col-lg-3 col-sm-4 col-6 g-0" key={card.id}>
                            <CardDescuento descuento={card.descuento} imageSource={card.image} impuesto={card.impuesto} vencimiento={card.vencimiento} />
                        </div>
                    ))
                }
            </div>
        </div> 
        </div>
        
    )
}

export { DescuentosContainer };