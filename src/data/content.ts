import type { Service, Product, Step, Testimonial } from '../types';
import { PHOTOS } from './photos';

export const SERVICES: Service[] = [
  {
    id: 'cremacion-individual',
    name: 'Cremación Individual Garantizada',
    description: 'Realizamos cremación individual, asegurando que las cenizas correspondan únicamente a tu mascota.',
    features: [
      'Proceso 100% individual y garantizado',
      'Video inicial del proceso de cremación',
      'Certificado de cremación incluido',
      'Acompañamiento respetuoso'
    ],
    highlighted: true,
    icon: 'flame',
  },
  {
    id: 'traslado',
    name: 'Servicio de Traslado 24 Horas',
    description: 'Recogemos a tu mascota desde tu domicilio o veterinaria, en cualquier momento del día.',
    features: [
      'Cobertura 24 horas',
      'Autorización de traslado y cremación',
      'Vehículo preparado y digno',
      'Atención en todo Quito y alrededores'
    ],
    icon: 'truck',
  },
  {
    id: 'entrega-urna',
    name: 'Memoriales Personalizados',
    description: 'Las cenizas se entregan en la urna elegida (Bonsái, Terrario o MDF) en un periodo de 48 horas.',
    features: [
      'Bonsái natural o artificial',
      'Terrarios vivos con suculentas',
      'Urnas en MDF personalizables',
      'Entrega personalizada según tu elección'
    ],
    icon: 'heart',
  },
];

export const PRODUCTS: Product[] = [
  {
    id: 'bonsai-natural',
    name: 'Bonsái Natural',
    description: 'Memorial vivo (Guayacán, Frutos rojos, Pino, Jade) con fotografía y dedicatoria.',
    image: PHOTOS.bonsaiRedondo.src,
    category: 'Bonsái Natural',
  },
  {
    id: 'terrario-memorial',
    name: 'Terrario Memorial',
    description: 'Espacio natural con suculentas, disponible en pecera o frasco de vidrio.',
    image: PHOTOS.suculentas.src,
    category: 'Terrario Memorial',
  },
  {
    id: 'bonsai-artificial',
    name: 'Bonsái Artificial',
    description: 'Recuerdo permanente sin cuidados, del color que el cliente desee. Entrega máxima en 10 días.',
    image: PHOTOS.floral.src,
    category: 'Bonsái Artificial',
  },
  {
    id: 'urna-mdf',
    name: 'Urnas en MDF',
    description: 'Diseños delicados y personalizables con frase en honor y fotografía.',
    image: PHOTOS.urnaLuz.src,
    category: 'Urnas en MDF',
  },
];

export const STEPS: Step[] = [
  {
    number: '01',
    title: 'Contacto y Retiro 24h',
    description: 'Llámanos o escríbenos por WhatsApp. Recogemos a tu mascota directamente en tu hogar o veterinaria.',
  },
  {
    number: '02',
    title: 'Elección del Memorial',
    description: 'Elige el modelo (Urna, Bonsái o Terrario) y personalízalo con fotos, frases o colores. Te enviaremos un presupuesto personalizado.',
  },
  {
    number: '03',
    title: 'Cremación Certificada',
    description: 'Al aprobar el presupuesto, iniciamos la cremación individual (enviamos un video inicial del proceso) con total transparencia.',
  },
  {
    number: '04',
    title: 'Entrega del Recuerdo',
    description: 'En aproximadamente 48 horas, recibirás las cenizas en el memorial elegido junto con su certificado.',
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    name: 'Piaeo',
    pet: 'Memorial vivo',
    text: 'Cada familia puede dejar un mensaje, una foto y una planta que siga creciendo en casa.',
    image: PHOTOS.piaeo.src,
    alt: PHOTOS.piaeo.alt,
  },
  {
    name: 'Osa',
    pet: 'Certificado de cremación',
    text: 'El certificado, la foto y un pequeño recuerdo ayudan a cerrar el proceso con claridad y respeto.',
    image: PHOTOS.osa.src,
    alt: PHOTOS.osa.alt,
  },
  {
    name: 'Romita',
    pet: 'Bonsái del recuerdo',
    text: 'Un memorial sencillo, personalizado y hecho para honrar la historia que compartieron.',
    image: PHOTOS.romita.src,
    alt: PHOTOS.romita.alt,
  },
];

export const GALLERY_IMAGES = [
  PHOTOS.piaeo,
  PHOTOS.romita,
  PHOTOS.memorialVerde,
  PHOTOS.urnaLuz,
  PHOTOS.urnaMadera,
  PHOTOS.suculentas,
  PHOTOS.memorialFoto,
  PHOTOS.bonsaiRedondo,
  PHOTOS.lucas,
  PHOTOS.floral,
  PHOTOS.arbol,
  PHOTOS.osa,
  PHOTOS.melody,
  PHOTOS.marco,
  PHOTOS.suculentas2,
  PHOTOS.urnaFoto,
];
