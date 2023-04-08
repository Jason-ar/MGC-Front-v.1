import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Layout } from '../Containers/Layout';
import { Home } from '../Pages/Home';
import { ConcejoDeliberante } from '../Pages/ConcejoDeliberante/ConcejoDeliberante';
//Cultura
import { Cultura } from '../Pages/Cultura/Cultura';
import { CineMunicipal } from '../Pages/Cultura/Cine';
import { Biblioteca } from '../Pages/Cultura/Biblioteca';
import { Eventos } from '../Pages/Cultura/Eventos';
import { Museo } from '../Pages/Cultura/Museo';
import { PuntoDigital } from '../Pages/Cultura/PuntoDigital';
import { Talleres } from '../Pages/Cultura/Talleres';
//Deportes
import { Deportes } from '../Pages/Deportes/Deportes';
import { Escuelas } from '../Pages/Deportes/Escuelas';
import { EventosDeportivos } from '../Pages/Deportes/Eventos';
//FiestaDelCaballo
import { FiestaDelCaballo } from '../Pages/FiestaDelCaballo/FiestaDelCaballo';
//Inspeccion
import { Inspeccion } from '../Pages/Inspeccion/Inspeccion';
import { GuardiaUrbana } from '../Pages/Inspeccion/GuardiaUrbana';
import { JuzgadoDeFaltas } from '../Pages/Inspeccion/JuzgadoDeFaltas';
import { Transito } from '../Pages/Inspeccion/Transito';
//Produccion
import { Obras } from '../Pages/Produccion/Obras';
import { PlantaDeFaena } from '../Pages/Produccion/PlantaDeFaena';
//Rentas
import { Rentas } from '../Pages/Rentas/Rentas';
//Social
import { Social } from '../Pages/Social/Social';
import { AdultosMayores } from '../Pages/Social/AdultosMayores';
import { Infancia } from '../Pages/Social/Infancia';
//Turismo
import { Turismo } from '../Pages/Turismo/Turismo';
import { Hospedajes } from '../Pages/Turismo/Hospedajes';
//Error
import { NotFound } from '../Pages/NotFound';
//import {  } from '../Pages/';

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path='/' element={<Home />} />;
          <Route path='/concejo-deliberante' element={<ConcejoDeliberante />} />;
          <Route path='/cultura' element={<Cultura />} />;
          <Route path='/cultura/talleres' element={<Talleres />} />;
          <Route path='/cultura/biblioteca' element={<Biblioteca />} />;
          <Route path='/cultura/cine' element={<CineMunicipal />} />;;
          <Route path='/cultura/eventos' element={<Eventos />} />;
          <Route path='/cultura/museo' element={<Museo />} />;
          <Route path='/cultura/punto-digital' element={<PuntoDigital />} />;
          <Route path='/deportes' element={<Deportes />} />;
          <Route path='/deportes/escuelas' element={<Escuelas />} />;
          <Route path='/deportes/eventos' element={<EventosDeportivos />} />;
          <Route path='/fiesta-del-caballo' element={<FiestaDelCaballo />} />;
          <Route path='/guardia-urbana' element={<GuardiaUrbana />} />;
          <Route path='/inspeccion' element={<Inspeccion />} />;
          <Route path='/juzgado-de-faltas' element={<JuzgadoDeFaltas />} />;
          <Route path='/transito' element={<Transito />} />;
          <Route path='/obras' element={<Obras />} />;
          <Route path='/planta-de-faena' element={<PlantaDeFaena />} />;
          <Route path='/rentas' element={<Rentas />} />;
          <Route path='/social' element={<Social />} />;
          <Route path='/social/infancia' element={<Infancia />} />;
          <Route path='/social/adultos' element={<AdultosMayores />} />;
          <Route path='/turismo' element={<Turismo />} />;
          <Route path='/turismo/hospedajes' element={<Hospedajes />} />;
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Layout>                                                                                                                                     
    </BrowserRouter>
  );
};

export { App };
