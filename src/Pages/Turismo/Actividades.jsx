import React from "react"; 
import { HomeActividadesContainer } from "../../Containers/Home/HomeActividadesContainer";


const Actividades = () => {
    return(
        <div className="container text-center justify-content-center align-items-center h-100">
            <h1>Que hacer en Gobernador Costa</h1>
            <HomeActividadesContainer />
        </div>
    )
};

export { Actividades };