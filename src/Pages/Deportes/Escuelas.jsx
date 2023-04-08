import React from 'react';
import {
 ModalDeportesAcrobacias, ModalDeportesAtletismo, ModalDeportesBamp, ModalDeportesBasquet, ModalDeportesBoxeo, ModalDeportesFutbol, ModalDeportesGimnasia, ModalDeportesHandball, ModalDeportesHockey, ModalDeportesKarate, ModalDeportesNewcom, ModalDeportesTenis, ModalDeportesVoley } from '../../Templates/Deportes/ModalEscuelas';

const Escuelas = () => {
    return (
        <div className="text-center ">
            <h2>Escuelas Deportivas</h2>
            <div className="row g-0">
                <div className="col"><ModalDeportesAcrobacias /></div>
                <div className="col"><ModalDeportesAtletismo /></div>
            </div>
            <div className="row g-0">
                <div className="col"><ModalDeportesBamp /></div>
                <div className="col"><ModalDeportesBasquet /></div>
            </div>
            <div className="row g-0">
                <div className="col"><ModalDeportesBoxeo /></div>
                <div className="col"><ModalDeportesFutbol /></div>
            </div>
            <div className="row g-0">
                <div className="col"><ModalDeportesGimnasia /></div>
                <div className="col"><ModalDeportesHandball /></div>
            </div>
            <div className="row g-0">
                <div className="col"><ModalDeportesHockey /></div>
                <div className="col"><ModalDeportesKarate /></div>
            </div>
            <div className="row g-0">
                <div className="col"><ModalDeportesNewcom /></div>
                <div className="col"><ModalDeportesVoley /></div>
            </div>
            <div className="row g-0">
                <div className="col"><ModalDeportesTenis /></div>
                <div className="col"></div>
            </div>
        </div >
    );
}

export { Escuelas };