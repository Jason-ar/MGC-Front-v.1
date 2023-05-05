import React from 'react';
import { Container } from 'react-bootstrap';
import {
    ModalDeportesAcrobacias, ModalDeportesAtletismo, ModalDeportesBamp, ModalDeportesBasquet, ModalDeportesBoxeo, ModalDeportesFutbol, ModalDeportesGimnasia, ModalDeportesHandball, ModalDeportesHockey, ModalDeportesKarate, ModalDeportesNewcom, ModalDeportesTenis, ModalDeportesVoley
} from '../../Templates/Deportes/ModalEscuelas';

const Escuelas = () => {
    return (
        <div className="container text-center justify-content-center align-items-center h-100">
            <h2>Escuelas Deportivas</h2>
            <div >
                
                    <ModalDeportesAcrobacias />
                    <ModalDeportesAtletismo />
                    <ModalDeportesBamp />
                    <ModalDeportesBasquet />
                    <ModalDeportesBoxeo />
                    <ModalDeportesFutbol />
                    <ModalDeportesGimnasia />
                    <ModalDeportesHandball />
                    <ModalDeportesHockey />
                    <ModalDeportesKarate />
                    <ModalDeportesNewcom />
                    <ModalDeportesVoley />
                    <ModalDeportesTenis />
                
            </div>
        </div >
    );
}

export { Escuelas };