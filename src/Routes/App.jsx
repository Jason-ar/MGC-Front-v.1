import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Layout } from '../Containers/Layout';
import { Home } from '../Pages/Home';
import { ConcejoDeliberante } from '../Pages/ConcejoDeliberante/ConcejoDeliberante';
import { ComposicionHCD } from '../Pages/ConcejoDeliberante/ComposicionHCD';
//Cultura
import { Cultura } from '../Pages/Cultura/Cultura';
import { CineMunicipal } from '../Pages/Cine/Cine';
import { Biblioteca } from '../Pages/Biblioteca/Biblioteca';
import { Eventos } from '../Pages/Cultura/Eventos';
import { Museo } from '../Pages/Museo/Museo';
import { PuntoDigital } from '../Pages/PuntoDigital/PuntoDigital';
import { Talleres } from '../Pages/Cultura/Talleres';

//Deportes
import { Deportes } from '../Pages/Deportes/Deportes';
import { Escuelas } from '../Pages/Deportes/Escuelas';
import { EventosDeportivos } from '../Pages/Deportes/Eventos';
import { Profesores } from '../Pages/Deportes/Profesores';

//FiestaDelCaballo
import { FiestaDelCaballo } from '../Pages/FiestaDelCaballo/FiestaDelCaballo';
//FiestaDelAnimador
import { FiestaDelAnimador } from '../Pages/FiestaDelAnimador/FiestaDelAnimador';

//Inspeccion
import { Inspeccion } from '../Pages/Inspeccion/Inspeccion';
import { LicenciasMenores } from '../Pages/Inspeccion/Licencias/LicenciasMenores';
import { LicenciasPersonales } from '../Pages/Inspeccion/Licencias/LicenciasPersonales';
import { LicenciasProfesionales } from '../Pages/Inspeccion/Licencias/LicenciasProfesionales';


import { GuardiaUrbana } from '../Pages/GuardiaUrbana/GuardiaUrbana';
import { JuzgadoDeFaltas } from '../Pages/JuzgadoDeFaltas/JuzgadoDeFaltas';
import { Descargos } from '../Pages/JuzgadoDeFaltas/Descargos';
import { Transito } from '../Pages/Transito/Transito';

//Bromatologia
import { Bromatologia } from '../Pages/Bromatologia/Bromatologia';
import { Castraciones } from '../Pages/Bromatologia/Castraciones';
import { Vacunacion } from '../Pages/Bromatologia/Vacunacion';

//Produccion
import { Obras } from '../Pages/Obras/Obras';
import { ObrasFinalizadas } from '../Pages/Obras/ObrasFinalizadas';
import { PlantaDeFaena } from '../Pages/PlantaDeFaena/PlantaDeFaena';
import { Ambiente } from '../Pages/Ambiente/Ambiente';

//Rentas
import { Rentas } from '../Pages/Rentas/Rentas';
import { IngresosBrutos } from '../Pages/Rentas/IIBB';
import { Cuentas } from '../Pages/Rentas/Cuentas';
import { Alquileres } from '../Pages/Rentas/Alquileres';
import { PatenteAutomotriz } from '../Pages/Rentas/Patente';
import { VendedoresAmbulantes } from '../Pages/Rentas/Ambulantes';
import { HabilitacionComercial } from '../Pages/Rentas/HabilitacionComercial';
import { Atmosferico } from '../Pages/Rentas/Atmosferico';
import { InmobiliarioUrbano } from '../Pages/Rentas/Urbano';
import { InmobiliarioRural } from '../Pages/Rentas/Rural';
import { PublicidadViaPublica } from '../Pages/Rentas/Propaganda'

//Social
import { Social } from '../Pages/Social/Social';
import { AdultosMayores } from '../Pages/AdultosMayores/AdultosMayores';
import { Infancia } from '../Pages/Infancia/Infancia';
import { Derechos } from '../Pages/Derechos/Derechos';

//Turismo
import { Turismo } from '../Pages/Turismo/Turismo';
import { Hospedajes } from '../Pages/Turismo/Hospedajes';
import { CentroArtesanal } from '../Pages/CentroArtesanal/CentroArtesanal';
import { Gastronomia } from '../Pages/Turismo/Gastronomia';
import { Pesca } from '../Pages/Turismo/Pesca';

//Error
import { NotFound } from '../Pages/NotFound';
import { Institucional } from '../Pages/Institucional/Institucional';
import { Noticias } from '../Pages/Noticias/Noticias';
import { Gestion } from '../Pages/Gestion/Gestion';


import { Actividades } from '../Pages/Turismo/Actividades';
import { Contactos } from '../Pages/Institucional/Contactos';
import { Camping } from '../Pages/Turismo/CampingMunicipal';
import { Shops } from '../00CostaOnline/Pages/Shops';



const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path='/' element={<Home />} />;
          <Route path='/concejo-deliberante' element={<ConcejoDeliberante />} />;
          <Route path='/concejo-deliberante/concejales' element={<ComposicionHCD />} />;
          
          <Route path='/cultura' element={<Cultura />} />;
          <Route path='/cultura/talleres' element={<Talleres />} />;
          <Route path='/cultura/eventos' element={<Eventos />} />;

          <Route path='/biblioteca-popular' element={<Biblioteca />} />;
          <Route path='/cine' element={<CineMunicipal />} />;;
          <Route path='/museo' element={<Museo />} />;
          <Route path='/punto-digital' element={<PuntoDigital />} />;

          <Route path='/deportes' element={<Deportes />} />;
          <Route path='/deportes/escuelas' element={<Escuelas />} />;
          <Route path='/deportes/eventos' element={<EventosDeportivos />} />;
          <Route path='/deportes/profesores' element={<Profesores />} />;
          
          <Route path='/fiesta-del-caballo' element={<FiestaDelCaballo />} />;
          <Route path='/fiesta-del-animador' element={<FiestaDelAnimador />} />;
        
          <Route path='/inspeccion' element={<Inspeccion />} />;
          <Route path='/inspeccion/licencias-menores' element={<LicenciasMenores />} />;
          <Route path='/inspeccion/licencias-personales' element={<LicenciasPersonales />} />;
          <Route path='/inspeccion/licencias-profesionales' element={<LicenciasProfesionales />} />;

          <Route path='/juzgado-de-faltas' element={<JuzgadoDeFaltas />} />;
          <Route path='/juzgado-de-faltas/descargos' element={<Descargos />} />;
          <Route path='/transito' element={<Transito />} />;
          <Route path='/guardia-urbana' element={<GuardiaUrbana />} />;

          <Route path='/obras' element={<Obras />} />;
          <Route path='/obras/finalizadas' element={<ObrasFinalizadas />} />;
          <Route path='/planta-de-faena' element={<PlantaDeFaena />} />;
          <Route path='/ambiente' element={<Ambiente />} />;

          <Route path='/bromatologia' element={<Bromatologia />} />;
          <Route path='/bromatologia/castraciones' element={<Castraciones />} />;
          <Route path='/bromatologia/vacunacion' element={<Vacunacion />} />;
       

          <Route path='/rentas' element={<Rentas />} />;
          <Route path='/rentas/ingresos-brutos' element={<IngresosBrutos />} />;
          <Route path='/rentas/cuentas' element={<Cuentas />} />;
          <Route path='/rentas/alquileres' element={<Alquileres />} />;
          <Route path='/rentas/camion-atmosferico' element={<Atmosferico />} />;
          <Route path='/rentas/ambulantes' element={<VendedoresAmbulantes />} />;
          <Route path='/rentas/automotor' element={<PatenteAutomotriz />} />;
          <Route path='/rentas/habilitacion-comercial' element={<HabilitacionComercial />} />;
          <Route path='/rentas/inmobiliario-urbano' element={< InmobiliarioUrbano/>} />;
          <Route path='/rentas/inmobiliario-rural' element={<InmobiliarioRural />} />;
          <Route path='/rentas/publicidad' element={<PublicidadViaPublica/>} />;

          <Route path='/social' element={<Social />} />;
          <Route path='/derechos' element={<Derechos />} />;
          <Route path='/infancia' element={<Infancia />} />;
          <Route path='/adultos' element={<AdultosMayores />} />;

          <Route path='/turismo' element={<Turismo />} />;
          <Route path='/turismo/hospedajes' element={<Hospedajes />} />;
          <Route path='/turismo/gastronomia' element={<Gastronomia />} />;
          <Route path='/turismo/actividades' element={<Actividades />} />;
          <Route path='/turismo/pesca' element={<Pesca />} />;
          <Route path='/turismo/camping' element={<Camping />} />;
          <Route path='/centro-artesanal' element={<CentroArtesanal />} />;

          <Route path='/institucional' element={<Institucional />} />;
          <Route path='/institucional/contactos' element={<Contactos />} />;
          <Route path='/gestion' element={<Gestion />} />;
          <Route path='/noticias' element={<Noticias />} />;
          
          <Route path='*' element={<NotFound />} />

          <Route path='/costa-online/negocios' element={<Shops />} />
        </Routes>
      </Layout>                                                                                                                                     
    </BrowserRouter>
  );
};

export { App };
