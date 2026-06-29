import { CategoryId } from './categories';

export interface WebSiteItem {
  id: string;
  title: string;
  descriptionEs: string;
  descriptionEn: string;
  url: string;
  category: Exclude<CategoryId, 'ALL' | 'ABOUT'>; 
  verified: boolean;
}

export const DIRECTORY_DATA: WebSiteItem[] = [
  {
    id: '1',
    title: 'Venezuela Reporta',
    descriptionEs: 'Plataforma comunitaria para reportar personas desaparecidas y actualizar su estado o ubicación exacta tras el sismo.',
    descriptionEn: 'Community platform to report missing persons and update their status or exact location following the earthquake.',
    url: 'https://venezuelareporta.org/',
    category: 'EMERGENCY',
    verified: true
  },
  {
    id: '2',
    title: 'Búsqueda Vzla (Bot)',
    descriptionEs: 'Bot de Telegram diseñado específicamente para agilizar y centralizar la búsqueda de personas desaparecidas.',
    descriptionEn: 'Telegram bot specifically designed to streamline and centralize the search for missing persons.',
    url: 'https://t.me/busqueda_vzla_temblor_bot',
    category: 'EMERGENCY',
    verified: true
  },
  {
    id: '3',
    title: 'Registro de Pacientes y Hospitales',
    descriptionEs: 'Directorio compartido de acceso público con información actualizada sobre pacientes ingresados en hospitales.',
    descriptionEn: 'Public shared directory with updated information on patients admitted to various hospitals.',
    url: 'https://drive.google.com/drive/u/0/folders/1o36ifaRz45kAs5rKzci49aD0mP5JB_YI',
    category: 'EMERGENCY',
    verified: true
  },
  {
    id: '4',
    title: 'Desaparecidos Terremoto Venezuela',
    descriptionEs: 'Portal para el reporte ciudadano de personas extraviadas, permitiendo actualizar estatus a "Encontrado".',
    descriptionEn: 'Citizen portal for reporting missing persons, allowing users to update status to "Found".',
    url: 'https://desaparecidosterremotovenezuela.com/',
    category: 'EMERGENCY',
    verified: true
  },
  {
    id: '5',
    title: 'Dateas Venezuela',
    descriptionEs: 'Herramienta de base de datos útil para la consulta rápida de nombres y números de cédula de identidad.',
    descriptionEn: 'Database tool useful for quick querying of names and national identity numbers.',
    url: 'https://www.dateas.com/es/consulta_venezuela',
    category: 'EMERGENCY',
    verified: false
  },
  {
    id: '6',
    title: 'Red Ayuda Venezuela',
    descriptionEs: 'Sistema impulsado por Inteligencia Artificial para buscar y cruzar datos de personas en hospitales o listas de rescate.',
    descriptionEn: 'AI-powered system to search and cross-reference data of individuals in hospitals or rescue lists.',
    url: 'https://redayudavenezuela.com/',
    category: 'EMERGENCY',
    verified: true
  },
  {
    id: '7',
    title: 'Números de Emergencia Vzla',
    descriptionEs: 'Directorio de teléfonos de emergencia. Permite marcación directa; si una línea está colapsada, redirige a la siguiente.',
    descriptionEn: 'Directory of emergency phone numbers. Features direct dialing and routes to the next line if busy.',
    url: 'https://voluntariosvenezuela.org/emergencias',
    category: 'EMERGENCY',
    verified: true
  },
  {
    id: '8',
    title: 'Venezuela Te Busca',
    descriptionEs: 'Portal dedicado exclusivamente a la recepción de reportes y difusión masiva de perfiles de personas perdidas.',
    descriptionEn: 'Portal dedicated exclusively to receiving reports and mass broadcasting profiles of lost individuals.',
    url: 'https://venezuelatebusca.com/',
    category: 'EMERGENCY',
    verified: true
  },
  {
    id: '9',
    title: 'Encuéntralos Tecnosoft',
    descriptionEs: 'Herramienta ciudadana gratuita y sin registro para ayudar a localizar desaparecidos. El reporte se publica al instante.',
    descriptionEn: 'Free, registration-less citizen tool to help locate missing persons. Reports are published instantly.',
    url: 'https://encuentralos.tecnosoft.dev/',
    category: 'EMERGENCY',
    verified: true
  },
  {
    id: '10',
    title: 'NexoSignal Niños',
    descriptionEs: 'Iniciativa enfocada en reunir con sus familias a los niños que fueron rescatados solos de los escombros.',
    descriptionEn: 'Initiative focused on reuniting children rescued alone from the rubble with their respective families.',
    url: 'https://busca.nexosignal.co/',
    category: 'EMERGENCY',
    verified: true
  },
  
  {
    id: '11',
    title: 'Conectando Venezuela',
    descriptionEs: 'Hub que centraliza enlaces de iniciativas ciudadanas, organizaciones y fuentes oficiales para compartir información vital.',
    descriptionEn: 'Hub centralizing links from citizen initiatives, organizations, and official sources to share vital information.',
    url: 'https://conectando-venezuela.vercel.app/',
    category: 'NEWS',
    verified: true
  },
  {
    id: '12',
    title: 'Amastech - Ayuda Vzla',
    descriptionEs: 'Portal integral con información y enlaces para buscar personas, pedir ayuda, donar y reportar daños.',
    descriptionEn: 'Comprehensive portal with information and links to search for people, request aid, donate, and report damage.',
    url: 'https://amastech.tech/ayuda-venezuela',
    category: 'NEWS',
    verified: true
  },

  {
    id: '13',
    title: 'Mi Gente Ve (Mascotas)',
    descriptionEs: 'Red comunitaria para registrar mascotas perdidas, encontradas o con necesidad de atención médica urgente.',
    descriptionEn: 'Community network to register lost, found, or medically needy pets following the earthquake.',
    url: 'https://migenteve.com/',
    category: 'VOLUNTEERING',
    verified: true
  },
  {
    id: '14',
    title: 'Patitas a Salvo',
    descriptionEs: 'Plataforma para reportar mascotas extraviadas o contactar refugios para proveer insumos veterinarios.',
    descriptionEn: 'Platform to report lost pets or contact shelters to provide veterinary supplies.',
    url: 'https://patitasasalvovenezuela.org/',
    category: 'VOLUNTEERING',
    verified: true
  },
  {
    id: '15',
    title: 'Mascotas por Venezuela',
    descriptionEs: 'Directorio enfocado en reunir a animales domésticos rescatados con sus dueños legítimos.',
    descriptionEn: 'Directory focused on reuniting rescued domestic animals with their rightful owners.',
    url: 'https://www.mascotasporvenezuela.com/',
    category: 'VOLUNTEERING',
    verified: true
  },
  {
    id: '16',
    title: 'Raíz Consciente - Transporte',
    descriptionEs: 'Directorio de transportistas y motorizados que ofrecen su vehículo para movilizar heridos o ayuda humanitaria.',
    descriptionEn: 'Directory of drivers and motorcyclists offering their vehicles to transport the injured or humanitarian aid.',
    url: 'http://ayuda.espacioraizconsciente.com/',
    category: 'VOLUNTEERING',
    verified: true
  },
  {
    id: '17',
    title: 'Interp-Aid',
    descriptionEs: 'Sistema para conectar intérpretes y traductores voluntarios con las brigadas de rescate internacionales.',
    descriptionEn: 'System to connect volunteer interpreters and translators with international rescue brigades.',
    url: 'https://interp-aid.lovable.app/',
    category: 'VOLUNTEERING',
    verified: true
  },
  {
    id: '18',
    title: 'Sismo Ayuda VE (Evaluación)',
    descriptionEs: 'Ingenieros civiles y arquitectos voluntarios evalúan fotografías de viviendas para generar informes rápidos de riesgo.',
    descriptionEn: 'Volunteer civil engineers and architects evaluate home photographs to generate rapid risk reports.',
    url: 'https://www.sismoayudave.com/',
    category: 'VOLUNTEERING',
    verified: true
  },
  {
    id: '19',
    title: 'Grupo Ávila Inspecciones',
    descriptionEs: 'Inspecciones técnicas gratuitas realizadas por profesionales para corroborar la integridad de estructuras urbanas.',
    descriptionEn: 'Free technical inspections conducted by professionals to verify the structural integrity of urban buildings.',
    url: 'https://grupo-avila-inspecciones.vercel.app/',
    category: 'VOLUNTEERING',
    verified: true
  },

  {
    id: '20',
    title: 'Habitable (Reporte de Daños)',
    descriptionEs: 'Herramienta geolocalizada para reportar edificios dañados y coordinar con ingenieros voluntarios de la zona.',
    descriptionEn: 'Geolocated tool to report damaged buildings and coordinate with local volunteer engineers.',
    url: 'https://habitable.lovable.app/',
    category: 'MAPS',
    verified: true
  },
  {
    id: '21',
    title: 'Impacto Catia La Mar 3D',
    descriptionEs: 'Visualizador cartográfico avanzado y en 3D (ArcGIS) de las zonas críticas y afectaciones en Catia La Mar.',
    descriptionEn: 'Advanced 3D cartographic viewer (ArcGIS) of critical zones and damages in Catia La Mar.',
    url: 'https://www.arcgis.com/home/webscene/viewer.html?webscene=c01ef4b6b74b4d25a39f7a1e4865be58',
    category: 'MAPS',
    verified: true
  },
  {
    id: '22',
    title: 'Terremoto Vzla (Estructuras)',
    descriptionEs: 'Mapa interactivo que lista y permite a los ciudadanos reportar de forma visual el colapso de edificios.',
    descriptionEn: 'Interactive map that lists and allows citizens to visually report building collapses.',
    url: 'https://terremotovenezuela.com/',
    category: 'MAPS',
    verified: true
  },
  {
    id: '23',
    title: 'Acopio Venezuela',
    descriptionEs: 'Mapa nacional actualizado en tiempo real con las ubicaciones, rutas y contactos de los centros de acopio activos.',
    descriptionEn: 'Nationwide map updated in real-time featuring locations, routes, and contacts of active collection centers.',
    url: 'https://acopiovenezuela.org/',
    category: 'MAPS',
    verified: true
  },

  {
    id: '24',
    title: 'Ayuda para Venezuela',
    descriptionEs: 'Listado exhaustivo de centros de acopio y requerimientos específicos (insumos médicos, alimentos, ropa).',
    descriptionEn: 'Exhaustive list of collection centers and specific requirements (medical supplies, food, clothing).',
    url: 'https://ayudaparavenezuela.com/',
    category: 'DONATIONS',
    verified: true
  },
  {
    id: '25',
    title: 'Dona Yummy',
    descriptionEs: 'Iniciativa logística de Yummy para procesar donaciones de alimentos y enviarlas directamente a zonas afectadas.',
    descriptionEn: 'Logistics initiative by Yummy to process food donations and deliver them directly to affected zones.',
    url: 'https://dona.yummyrides.com/',
    category: 'DONATIONS',
    verified: true
  },
  {
    id: '26',
    title: 'Cruz Roja Colombiana',
    descriptionEs: 'Fondo oficial internacional para proveer alimentos, agua potable, refugio y atención médica urgente.',
    descriptionEn: 'Official international fund to provide food, drinking water, shelter, and urgent medical care.',
    url: 'https://ayuda.cruzrojacolombiana.org/',
    category: 'DONATIONS',
    verified: true
  },
  {
    id: '27',
    title: 'MercadoLibre Solidario',
    descriptionEs: 'Permite comprar artículos de necesidad en la plataforma y marcarlos como donación para su logística gratuita.',
    descriptionEn: 'Allows users to purchase essential items on the platform and mark them as donations for free logistics.',
    url: 'https://www.mercadolibre.com.ve/',
    category: 'DONATIONS',
    verified: true
  },
  {
    id: '28',
    title: 'Hogar Bambi Vzla',
    descriptionEs: 'Recepción de ayuda para proveer atención y refugio a menores separados de sus familias por la tragedia.',
    descriptionEn: 'Receiving aid to provide care and shelter for minors separated from their families due to the tragedy.',
    url: 'https://hogarbambi.org/',
    category: 'DONATIONS',
    verified: true
  }
];