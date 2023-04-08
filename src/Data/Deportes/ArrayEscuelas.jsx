//import React from 'react';
//Images Imports

import Gimnasia from '../../Assets/img/talleres-deportes/1gimnasia.jpg';
import Newcom1 from '../../Assets/img/talleres-deportes/newcom2.jpg';
import NewcomSUM from '../../Assets/img/talleres-deportes/newcom2.jpg';

import Bamp from '../../Assets/img/talleres-deportes/1gimnasia.jpg';
import KarateInfantil from '../../Assets/img/talleres-deportes/taekwondo1.jpg';
import KarateLibre from '../../Assets/img/talleres-deportes/taekwondo1.jpg';
import Boxeo from '../../Assets/img/talleres-deportes/boxeo1.jpg';

import Basquet4a5 from '../../Assets/img/talleres-deportes/basquet-pre-mini1.jpg';
import Basquet6a8 from '../../Assets/img/talleres-deportes/basque-mini1.jpg';
import Basquet11a15 from '../../Assets/img/talleres-deportes/basquet-sub13-1.jpg';
import Basquetlibre from '../../Assets/img/talleres-deportes/basquet-sub15-1.jpg';
import BasquetU13 from '../../Assets/img/talleres-deportes/basquet-sub13-1.jpg';
import BasquetU15yU17 from '../../Assets/img/talleres-deportes/basquet-sub15-1.jpg';
import Basquetlibre2 from '../../Assets/img/talleres-deportes/basquet-sub15-1.jpg';

import Voley6a8 from '../../Assets/img/talleres-deportes/voley2.jpg';
import Voley9a11 from '../../Assets/img/talleres-deportes/voley2.jpg';
import VoleyS15yS18 from '../../Assets/img/talleres-deportes/voley3.jpg';
import VoleyS13yS14yS18 from '../../Assets/img/talleres-deportes/voley3.jpg';
import Voleyllibre from '../../Assets/img/talleres-deportes/voley2.jpg';

import Acrobacias6a8 from '../../Assets/img/talleres-deportes/acrobacias9a11.JPG';
import Acrobacias9a11 from '../../Assets/img/talleres-deportes/acrobacias9a11.JPG';
import Acrobacias12a14 from '../../Assets/img/talleres-deportes/acrobacias12a14.JPG';
import Acrobacias15 from '../../Assets/img/talleres-deportes/acrobacias15.JPG';
import Atletismo from '../../Assets/img/talleres-deportes/atletismo1.jpg';

import Handballlibre from '../../Assets/img/talleres-deportes/handball-masculino1.jpg';

import Hockey5a13 from '../../Assets/img/talleres-deportes/hockey1.jpg';
import Hockey15 from '../../Assets/img/talleres-deportes/hockey1.jpg';
import HockeyLibre from '../../Assets/img/talleres-deportes/hockey1.jpg';

import FutbolFemenino from '../../Assets/img/talleres-deportes/futbol-femenino1.jpg';
import Futbol4a6 from '../../Assets/img/talleres-deportes/futbol-infantil.jpg';
import Futbol7a10 from '../../Assets/img/talleres-deportes/futbol-infantil.jpg';

import FutbolCacarita6a8 from '../../Assets/img/talleres-deportes/futbol-infantil.jpg';
import FutbolCacarita9a11 from '../../Assets/img/talleres-deportes/futbol-infantil.jpg';
import FutbolCacarita12a13 from '../../Assets/img/talleres-deportes/futbol-infantil.jpg';

//Arrays imports
const ArrayAcrobacias = [
    {
        id: 1,
        image: Acrobacias6a8,
        area: 'Deportes',
        disciplina: 'Acrobacias Aéreas',
        edad: '6 a 8',
        rama: 'mixto',
        lugar: 'Gimnasio',
        dias: 'Lu Mi',
        horario: '17:00 - 18:00',
        inicio: 'A confirmar',
        profesor: 'Agustina Perez',
        contacto: '2945 687760'
    },
    {
        id: 2,
        image: Acrobacias9a11,
        area: 'Deportes',
        disciplina: 'Acrobacias Aéreas',
        edad: '9 a 11',
        rama: 'mixto',
        lugar: 'Gimnasio',
        dias: 'Mi Vi',
        horario: '18:00 - 19:00',
        inicio: 'A confirmar',
        profesor: 'Agustina Perez',
        contacto: '2945 687760'
    },
    {
        id: 3,
        image: Acrobacias12a14,
        area: 'Deportes',
        disciplina: 'Acrobacias Aéreas',
        edad: '12 a 14',
        rama: 'mixto',
        lugar: 'Gimnasio',
        dias: 'Lu Vi',
        horario: '18:00 - 19:00',
        inicio: 'A confirmar',
        profesor: 'Agustina Perez',
        contacto: '2945 687760'
    },
    {
        id: 4,
        image: Acrobacias15,
        area: 'Deportes',
        disciplina: 'Acrobacias Aéreas',
        edad: '+15',
        rama: 'mixto',
        lugar: 'Gimnasio',
        dias: 'Lu',
        horario: '19:00 - 20:00',
        inicio: 'A confirmar',
        profesor: 'Agustina Perez',
        contacto: '2945 687760'
    }
];
const ArrayAtletismo = [
    {
        id: 5,
        image: Atletismo,
        area: 'Deportes',
        disciplina: 'Mini Atletismo',
        edad: '7 a 12 años',
        rama: 'mixto',
        lugar: 'Gimnasio',
        dias: 'Ma Ju',
        horario: '17:00 - 18:00',
        inicio: 'Iniciado',
        profesor: 'Johana Antilef',
        contacto: '2945 533505'
    }, 
    {
        id: 5,
        image: Atletismo,
        area: 'Deportes',
        disciplina: 'Atletismo',
        edad: '+13 años',
        rama: 'mixto',
        lugar: 'Gimnasio',
        dias: 'lu mi vi',
        horario: '19:00 - 20:00',
        inicio: 'Iniciado',
        profesor: 'Johana Antilef',
        contacto: '2945 533505'
    }, 
];
const ArrayBamp = [
    {
        id: 6,
        image: Bamp,
        area: 'Deportes',
        disciplina: 'Bamp',
        edad: 'Adultos',
        rama: 'mixto',
        lugar: 'Salón CIC',
        dias: 'Lu a Ju',
        horario: '15:00 - 16:00',
        inicio: 'A confirmar',
        profesor: 'Milagros Gonzalo',
        contacto: '2945 687760'
    }
];
const ArrayBasquet = [
    {
        id: 5,
        image: Basquet6a8,
        area: 'Deportes',
        disciplina: 'Mini Basquet',
        edad: 'cat 2015 a 2018',
        rama: 'mixto',
        lugar: 'Gimnasio',
        dias: 'Mi Vi',
        horario: '16:30 - 18:00',
        inicio: 'Iniciado',
        profesor: 'Mónica Quilodrán',
        contacto: ''
    },
    {
        id: 4,
        image: Basquet4a5,
        area: 'Deportes',
        disciplina: 'Mini Basquet',
        edad: 'cat 2012 a 2014',
        rama: 'mixto',
        lugar: 'Gimnasio',
        dias: 'Lu Ma',
        horario: '16:30 - 18:00',
        inicio: 'Iniciado',
        profesor: 'Mónica Quilodrán',
        contacto: ''
    },
    {
        id: 1,
        image: BasquetU15yU17,
        area: 'Deportes',
        disciplina: 'Basquet',
        edad: 'U13, U15 y U17',
        rama: 'mixto',
        lugar: 'Gimnasio',
        dias: 'Ma Ju',
        horario: '19:00 - 22:00',
        inicio: 'Iniciado',
        profesor: 'Marcos Quilodrán',
        contacto: '2945 687760'
    },
];
const ArrayBoxeo = [
    {
        id: 6,
        image: Boxeo,
        area: 'Deportes',
        disciplina: 'Boxeo',
        edad: 'Libre',
        rama: 'mixto',
        lugar: 'Escuela de Box',
        dias: 'Lu a Vi',
        horario: '19:00 - 21:00',
        inicio: 'A confirmar',
        profesor: 'Cholo Julian',
        contacto: '2945 687760'
    },
];
const ArrayFutbol = [
    {
        id: 6,
        image: FutbolFemenino,
        area: 'Deportes',
        disciplina: 'Futbol',
        edad: '11 a 13',
        rama: 'Femenimo',
        lugar: 'SUM B° Malvinas',
        dias: 'Lu Mi Vi',
        horario: '16:00 - 18:00',
        inicio: 'A confirmar',
        profesor: 'Esther Julian',
        contacto: '2945 687760'
    },
    {
        id: 5,
        image: Futbol4a6,
        area: 'Deportes',
        disciplina: 'Futbol',
        edad: '4 a 6',
        rama: 'mixto',
        lugar: 'SUM B° Malvinas',
        dias: 'Lu Mi',
        horario: '18:00 - 19:00',
        inicio: 'A confirmar',
        profesor: 'Luis Lazo',
        contacto: '2945 687760'
    },
    {
        id: 6,
        image: Futbol7a10,
        area: 'Deportes',
        disciplina: 'Futbol',
        edad: '7 a 10',
        rama: 'mixto',
        lugar: 'SUM B° Malvinas',
        dias: 'Lu Mi',
        horario: '19:00 - 20:00',
        inicio: 'A confirmar',
        profesor: 'Luis Lazo',
        contacto: '2945 687760'
    },
    {
        id: 6,
        image: FutbolCacarita6a8,
        area: 'Deportes',
        disciplina: 'Futbol',
        edad: '6 a 8',
        rama: 'mixto',
        lugar: 'SUM B° Malvinas',
        dias: 'Ma Ju',
        horario: '17:00 - 18:00',
        inicio: 'A confirmar',
        profesor: 'Club Chacarita',
        contacto: '2945 687760'
    },
    {
        id: 6,
        image: FutbolCacarita9a11,
        area: 'Deportes',
        disciplina: 'Futbol',
        edad: '9 a 11',
        rama: 'mixto',
        lugar: 'SUM B° Malvinas',
        dias: 'Ma Ju',
        horario: '18:00 - 19:00',
        inicio: 'A confirmar',
        profesor: 'Club Chacarita',
        contacto: '2945 687760'
    },
    {
        id: 6,
        image: FutbolCacarita12a13,
        area: 'Deportes',
        disciplina: 'Futbol',
        edad: '11 a 13',
        rama: 'mixto',
        lugar: 'SUM B° Malvinas',
        dias: 'Ma Ju',
        horario: '19:00 - 20:00',
        inicio: 'A confirmar',
        profesor: 'Club Chacarita',
        contacto: '2945 687760'
    },
];
const ArrayGimnasia = [
    {
        id: 1,
        image: Gimnasia,
        area: 'Deportes',
        disciplina: 'Gimnasia Mujeres',
        edad: '+18',
        rama: 'Mujeres',
        lugar: 'Gimnasio',
        dias: 'Ma Ju',
        horario: '09:30 - 10:30',
        inicio: 'Iniciado',
        profesor: 'Mónica Quilodrán',
        contacto: '2945'
    }
];
const ArrayHandball = [
    {
        id: 3,
        image: Handballlibre,
        area: 'Deportes',
        disciplina: 'Handball Infantil',
        edad: '7 a 12',
        rama: 'Mixto',
        lugar: 'SUM Raúl Torres',
        dias: 'Ma Ju',
        horario: '19:00 - 20:00',
        inicio: 'Iniciado',
        profesor: 'Gonzalo Pichiñan',
        contacto: '2945 696135'
    },
    {
        id: 3,
        image: Handballlibre,
        area: 'Deportes',
        disciplina: 'Handball cadetes',
        edad: '14 a 16',
        rama: 'masculino',
        lugar: 'Gimnasio',
        dias: 'Ma Ju',
        horario: '22:00 - 23:00',
        inicio: 'Iniciado',
        profesor: 'Manuel Remolcoy',
        contacto: '2945 687760'
    },
    {
        id: 3,
        image: Handballlibre,
        area: 'Deportes',
        disciplina: 'Handball Juveniles',
        edad: '16 a 18',
        rama: 'masculino',
        lugar: 'Gimnasio',
        dias: 'Ma Ju',
        horario: '22:00 - 23:00',
        inicio: 'Iniciado',
        profesor: 'Manuel Remolcoy',
        contacto: '2945 687760'
    },
    {
        id: 3,
        image: Handballlibre,
        area: 'Deportes',
        disciplina: 'Handball',
        edad: 'Sub 13 y S17',
        rama: 'Femenino',
        lugar: 'SUM Raúl Torres',
        dias: 'Ma Ju',
        horario: '21:00 - 22:00',
        inicio: 'Iniciado',
        profesor: 'Gonzalo Pichiñan',
        contacto: '2945 696135'
    },
    {
        id: 3,
        image: Handballlibre,
        area: 'Deportes',
        disciplina: 'Handball Libre',
        edad: '+ 18',
        rama: 'mixto',
        lugar: 'Gimnasio',
        dias: 'Ma Ju',
        horario: '23:00 - 00:30',
        inicio: 'Iniciado',
        profesor: 'Manuel Remolcoy',
        contacto: '2945 687760'
    }
];
const ArrayHockey = [
    {
        id: 6,
        image: Hockey5a13,
        area: 'Deportes',
        disciplina: 'Hockey',
        edad: '5 a 13',
        rama: 'mixto',
        lugar: 'SUM Esc. N°68',
        dias: 'Ma Ju',
        horario: '20:00 - 21:00',
        inicio: 'A confirmar',
        profesor: 'Agustin Narváez',
        contacto: '2945 687760'
    },
    {
        id: 4,
        image: Hockey15,
        area: 'Deportes',
        disciplina: 'Hockey',
        edad: '+15 años',
        rama: 'mixto',
        lugar: 'Gimnasio',
        dias: 'Lu Mi Vi',
        horario: '15:00 - 16:00',
        inicio: 'A confirmar',
        profesor: 'Agustin Narváez',
        contacto: '2945 687760'
    },
    {
        id: 6,
        image: HockeyLibre,
        area: 'Deportes',
        disciplina: 'Hockey',
        edad: 'Libre',
        rama: 'mixto',
        lugar: 'SUM B° Malvinas',
        dias: 'Lu Ma Ju',
        horario: '21:00 - 22:00',
        inicio: 'A confirmar',
        profesor: 'Profesor',
        contacto: '2945 687760'
    }
];
const ArrayKarate = [
    {
        id: 6,
        image: KarateInfantil,
        area: 'Deportes',
        disciplina: 'Karate',
        edad: '+5 años',
        rama: 'mixto',
        lugar: 'Salón CIC',
        dias: 'Lu Mi Vi',
        horario: '20:00 - 21:00',
        inicio: 'Iniciado',
        profesor: 'Favio Saria',
        contacto: '280 4975669'
    },
    {
        id: 6,
        image: KarateInfantil,
        area: 'Deportes',
        disciplina: 'Karate',
        edad: '+18 años',
        rama: 'mixto',
        lugar: 'Salón CIC',
        dias: 'Lu Mi Vi',
        horario: '21:00 - 22:00',
        inicio: 'Iniciado',
        profesor: 'Favio Saria',
        contacto: '280 4975669'
    },
    {
        id: 6,
        image: KarateLibre,
        area: 'Deportes',
        disciplina: 'Karate',
        edad: '+12 años',
        rama: 'mixto',
        lugar: 'Salón CIC',
        dias: 'Lu Mi Vi',
        horario: '22:00 - 23:00',
        inicio: 'Iniciado',
        profesor: 'Alfredo Jiménez',
        contacto: '2945 533792'
    }
];
const ArrayNewcom = [
    {
        id: 3,
        image: Newcom1,
        area: 'Deportes',
        disciplina: 'Newcom',
        edad: 'Adultos',
        rama: 'mixto',
        lugar: 'Gimnasio',
        dias: 'Lu Mi',
        horario: '16:00 - 17:00',
        inicio: 'A confirmar',
        profesor: 'Gonzalo Pichiñan',
        contacto: '2945 687760'
    },
    {
        id: 6,
        image: NewcomSUM,
        area: 'Deportes',
        disciplina: 'Newcom',
        edad: 'Adultos',
        rama: 'mixto',
        lugar: 'SUM B° Malvinas',
        dias: 'Ma Ju',
        horario: '16:00 - 17:00',
        inicio: 'A confirmar',
        profesor: 'Gonzalo Pichiñan',
        contacto: '2945 687760'
    }
];
const ArrayTenis = [
    {
        id: 3,
        image: Newcom1,
        area: 'Deportes',
        disciplina: 'Tenis,PingPong y Badminton',
        edad: '7 a 13',
        rama: 'mixto',
        lugar: 'Gimnasio',
        dias: 'Lu Mi Vi',
        horario: '19:00 - 20:00',
        inicio: 'Iniciado',
        profesor: 'Gonzalo Pichiñan',
        contacto: '2945 687760'
    }
];
const ArrayVoley = [
    {
        id: 6,
        image: Voley6a8,
        area: 'Deportes',
        disciplina: 'Voley infantil',
        edad: '5 a 7',
        rama: 'mixto',
        lugar: 'Gimnasio',
        dias: 'Lu Mi Vi',
        horario: '18:00 - 19:00',
        inicio: 'Iniciado',
        profesor: 'Marcos Quilodrán',
        contacto: ''
    },
    {
        id: 1,
        image: Voley9a11,
        area: 'Deportes',
        disciplina: 'Voley intermedio',
        edad: '9 a 12',
        rama: 'mixto',
        lugar: 'Gimnasio',
        dias: 'Mi Vi',
        horario: '18:00 - 19:00',
        inicio: 'Iniciado',
        profesor: 'Johana Antilef',
        contacto: '2945 533505'
    },
    {
        id: 2,
        image: VoleyS15yS18,
        area: 'Deportes',
        disciplina: 'Voley',
        edad: '+ 12',
        rama: 'Femenino',
        lugar: 'Gimnasio',
        dias: 'Lu Mi',
        horario: '20:00 - 21:30',
        inicio: 'Iniciado',
        profesor: '',
        contacto: '2945'
    },
    {
        id: 3,
        image: VoleyS13yS14yS18,
        area: 'Deportes',
        disciplina: 'Voley',
        edad: '+12',
        rama: 'Masculino',
        lugar: 'Gimnasio',
        dias: 'Lu Mi',
        horario: '21:30 - 23:00',
        inicio: 'Iniciado',
        profesor: '',
        contacto: '2945'
    },
];








export { ArrayAcrobacias };
export { ArrayAtletismo };
export { ArrayBamp };
export { ArrayBasquet };
export { ArrayBoxeo };
export { ArrayFutbol };
export { ArrayGimnasia };
export { ArrayHandball };
export { ArrayHockey };
export { ArrayKarate };
export { ArrayNewcom};
export { ArrayTenis }
export { ArrayVoley };



