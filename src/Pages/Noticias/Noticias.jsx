import React from 'react';
import { VideoContainer } from '../../Components/Global/Video';
import { HeaderAreaContainer } from '../../Containers/Noticias/HeaderArea';

const Noticias = () => {
    return (
        <div className="container text-center justify-content-center align-items-center h-100">
            <HeaderAreaContainer />
            <h1>Noticias de la Municipalidad de Gobernador Costa</h1>
            <p> </p>
            <VideoContainer />
        </div>
    );
}

export { Noticias };