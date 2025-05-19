/**
 * Interface representing work experience details.
 *
 * @property {string} title - The job title of the position.
 * @property {string} startDate - The start date of the position in the format YYYY-MM-DD.
 * @property {string} [endDate] - The end date of the position in the format YYYY-MM-DD.
 *                                Optional, can be omitted if the position is current.
 * @property {string} company - The name of the company where the position was held.
 * @property {string} location - The geographic location of the company (e.g., city, state, country).
 * @property {string} description - A brief description of the roles and responsibilities
 *                                   associated with the position.
 * @property {string[]} goals - A list of professional goals achieved or targeted during the position.
 * @property {boolean} currentJob - Indicates whether the position is the current job.
 */
interface WorkExperience {
    title: string;
    startDate: string;
    endDate?: string;
    company: string;
    location: string;
    description: string;
    goals: string[];
    currentJob: boolean;
}

/**
 * Represents an array of work experiences.
 *
 * Each work experience object contains details about
 * a job position including the title, start and end dates,
 * company name, job location, description of the role,
 * a list of goals or achievements, and a flag indicating
 * if it is the current job.
 *
 * @type {Array<Object>}
 * @property {string} title - The job title.
 * @property {string} startDate - The start date of the job in YYYY-MM-DD format.
 * @property {string} [endDate] - The end date of the job in YYYY-MM-DD format. Optional for current jobs.
 * @property {string} company - The name of the company.
 * @property {string} location - The location of the job.
 * @property {string} description - A brief description of the job responsibilities.
 * @property {Array<string>} goals - A list of goals or achievements within the job.
 * @property {boolean} currentJob - A flag indicating if the job is the current one.
 */
const workExperience:WorkExperience[] = [
    {
        title: " Especialista en ciberseguridad: administración e implementación de soluciones de seguridad - Sentinel",
        startDate: "2024-07-10",
        endDate:   "2024-12-10",
        company: "IQsec S.A DE C.V",
        location: "Mexico",
        description: "Migración de infraestructura de seguridad en sector gubernamental",
        goals: [
            "De manera unificada y segmentando tanto por departamento y servicios unicados integro un ecosistema basado en la tecnología de Fortinet como nucleo en una red multicapa con unodades clave FortiGate, FortiAnalyzer (FAZ), FortiManager, FortiExtender, FortiSwitch, FortiAP, FortiClient, FortiWeb, FortiMail y FortiSandbox. Configuré políticas avanzadas de seguridad, VPNs, inspección profunda de paquetes (DPI), segmentación de red, control de acceso y autenticación multifactor. Personalicé la arquitectura para optimizar la protección, gestión centralizada, monitoreo en tiempo real y análisis avanzado de amenazas, asegurando alta disponibilidad y rendimiento en toda la infraestructura de red.",
            "Configure accesos privilegiados sin omitir la reguridad em base a la rotación diaria de credenciales, lo que redujo significativamente el riesgo de filtraciones y accesos no autorizados.  .",
            "Gestioné la distribución de instaladores a través de Ivanti, configurando políticas para la entrega automática de software en los dispositivos finales, optimizando recursos y garantizando instalaciones eficientes sin interrupciones..",
        ],
        currentJob: true,
    },
    {
        title: "Software Engineer",
        startDate: "2018-03-10",
        endDate: "2020-03-10",
        company: "Company Name",
        location: "United States",
        description: "Developed and maintained web applications using React, NodeJs, and MongoDB.",
        goals: [
            "Developed and maintained web applications using React, NodeJs, and MongoDB.",
            "Worked with the team to develop and maintain web applications using React, NodeJs, and MongoDB.",
            "Created and maintained web applications using React, NodeJs, and MongoDB.",
        ],
        currentJob: false,
    },
];
export default workExperience;
