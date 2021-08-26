export const servicios = [
  {
    title: 'Budget',
    subtitle:"Cotizacion estimada",
    description: "El servicio de BUDGET (propuesta) es uno de los servicios mas rapidos el cual ofrece una lista de materiales de controles estimado",
     subdescriptions: [ '' ], 
    image: '/images/budget1.jpg',
      tags: ['BOM', 'Documentos Trabajados'],
    source: 'https://google.com',
    visit: 'https://google.com',
    leadTime: '24-48 horas',
    id: 0,
  },
  {
    title: 'BOM',
    subtitle:"Lista de Materiales",
    description:"El servicio de BOM (Lista de Materiales) ofrece una lista de materiales precisa a los planos eléctricos, especificaciones y secuencia de operación del proyecto",
    subdescriptions: [ ''  ],
    image: '/images/BOM1.jpg',
    tags: ['BOM', 'Documentos Trabajados'],
    source: 'https://google.com',
    visit: 'https://google.com',
    leadTime: '2-3 dias',
    id: 1,
  },
  {
    title: 'Layout',
    subtitle:"Diseño de controles",
    description: "El servicio de Layout este servicio incluye la lista de materiales, los planos con todos los detalles sobre el producto, notas e instrucciones de instalación",
     subdescriptions: [ ''  ], 
    image: '/images/Layout1.jpg',
      tags: ['BOM', 'Diseño de control (Planos)', 'Documentos Trabajados' ],
    source: 'https://google.com',
    visit: 'https://google.com',
    leadTime: '2-3 dias',
    id: 2,
  },
  {
    title: 'Submittal',
    subtitle:"Paquete de envío",
    description: "El servicio de Submittal Package este servicio es normalmente solicitado en las fases finales del proyecto donde se requiere incluir toda información sobre el proyecto",
    subdescriptions: [ 'Secuencia de operacion', 'Diagramas de risers ', 'Fichas tecnicas'  ],
    image: '/images/submittal1.jpg',
    tags: ['BOM', 'Diseño de control (Planos)', 'Documentos Trabajados'],
    source: 'https://google.com',
    visit: 'https://google.com',
    leadTime: '3-4 dias',
    id: 3,
  },
    {
      title: 'Diagramas',
      subtitle:"Cableados e Instrucciones",
    description: "This is a code repository for the corresponding video tutorial. In this video, we will create a full Realtime Chat Application",
    subdescriptions: [ ''  ],
      image: '/images/diagrams1.jpg',
    tags: ['React', 'ChatEngine', 'Firebase'],
    source: 'https://google.com',
      visit: 'https://google.com',
    leadTime: '24-48 horas',
    id: 3,
  },
      {
        title: 'QC',
        subtitle:"Control de Calidad",
    description: "This is a code repository for the corresponding video tutorial. In this video, we will create a full Realtime Chat Application",
    subdescriptions: [ ''  ],
        image: '/images/QC1.jpg',
    tags: ['React', 'ChatEngine', 'Firebase'],
    source: 'https://google.com',
        visit: 'https://google.com',
    leadTime: '24-48 horas',
    id: 3,
  },
];

export const RequestForAssistance = [
  { year: "Cliente", text: 'Gather information', },
  { year: "Agencia", text: 'Compile information', },
  { year: "DAS", text: 'Design controls', },
  { year: "RFA", text: 'Upload file and Create BOM', },
  { year: "QUOTE", text: 'Submit for pricing and order', },
];

export const tools = [
  {
    id: 0,
    title: "Visual Controls",
    subtitle:'Engineered for Productivity',
    descriptions: 'El software Visual Controls facilita el diseño y la especificación de Acuity Controls.' ,
    features: ['PDF', 'Design', 'Quote'],
    image: '',
    link:'https://visual-3d.com/software/downloadvisualcontrols.aspx',
  },
  {
    id: 1,
    title: "Visual Lighting",
    subtitle:'Engineered for Productivity',
    descriptions: 'El software Visual Controls facilita el diseño y la especificación de Acuity Luminarias.' ,
    features: ['PDF', 'Design', 'Quote'],
    image: '',
    link:'https://visual-3d.com/software/visualhome.aspx',
  },
    {
    id: 2,
      title: "SOO",
    subtitle:'Secuencia de Operacion',
    descriptions: 'Se recomienda seguir una secuencia de operaciones que indique exactamente cómo quiere el cliente que funcione el sistema. ' ,
    features: ['PDF', 'Design', 'Quote'],
      image: '',
    link:'/Form',
  },
];

export const contactos = [
  { team: "Conyers DAS", members: ['Roger', 'Chris', 'Ty'], id: 0},
  { team: "Ontario DAS", members: [''], id: 1 },
  { team: "Chicago DAS", members: [''], id: 2 },
  { team: "Field Services", members: [''], id: 3 }
 
];

export const downloads = [

{
    id: 0,
    title: "SOO",
    subtitle:'Secuencia de Operacion',
    descriptions: 'Complete el formulario de secuencia de operación para proporcionar al equipo del DAS todos los detalles relacionados con su proyecto de controles.' ,
    features: ['PDF', 'Design', 'Quote'],
    image: '/images/DownloadForm.jpg',
    link:'/documents/dummy.pdf',
  },
  
{
    id: 1,
    title: "RFA Request",
    subtitle:'Instruciones para Ingresa un RFA',
    descriptions: 'Siga las instrucciones sobre cómo crear y RFA, ¡descargue la guía hoy!' ,
    features: ['PDF', 'Design', 'Quote'],
    image: '/images/DownloadForm.jpg',
    link:'/documents/dummy.pdf',
  },
  
{
    id: 2,
    title: "RFA Revision",
    subtitle:'Instruciones para Ingresar una revision',
    descriptions: 'Siga los pasos ilustrados en esta guía para ingresar una solicitud de revisión para su proyecto.' ,
    features: ['PDF', 'Design', 'Quote'],
    image: '/images/DownloadForm.jpg',
    link:'/documents/dummy.pdf',
  },
  {
    id: 3,
    title: "Secuencia de Operaciones",
    subtitle:'Engineered for Productivity',
    descriptions: 'El software Visual Controls facilita el diseño y la especificación de Acuity Controls.' ,
    features: ['PDF', 'Design', 'Quote'],
    image: '/images/DownloadForm.jpg',
    link:'/documents/dummy.pdf',
  },

];