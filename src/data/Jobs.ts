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
        title: "Especialista Gestión, Administración e Implementación de Soluciones de ciberguridad  -  Sentínel",
        startDate: "2024-07-10",
        endDate:   "2024-12-10",
        company: "IQsec S.A DE C.V",
        location: "Mexico",
        description: "Integración de ecosistema Fortinet desplegando soluciones especializadas en Forcepoint, Forescout y BeyondTrust PAM.",
        goals: [
            "De manera unificada y segmentando tanto por departamento y servicios unicados integro un ecosistema basado en la tecnología de Fortinet como nucleo en una red multicapa con unodades clave FortiGate, FortiAnalyzer (FAZ), FortiManager, FortiExtender, FortiSwitch, FortiAP, FortiClient, FortiWeb, FortiMail y FortiSandbox. Configuré políticas avanzadas de seguridad, VPNs, inspección profunda de paquetes (DPI), segmentación de red, control de acceso y autenticación multifactor. Personalicé la arquitectura para optimizar la protección, gestión centralizada, monitoreo en tiempo real y análisis avanzado de amenazas, asegurando alta disponibilidad y rendimiento en toda la infraestructura de red.",
            "Configure accesos privilegiados sin omitir la reguridad em base a la rotación diaria de credenciales, lo que redujo significativamente el riesgo de filtraciones y accesos no autorizados.  .",
            "Desplegue CounterACT para monitorear tráfico en tiempo real, aplicando restricciones de ancho de banda y bloqueos de protocolos no esenciales en respuesta a indicadores de compromiso. Configuré Host Monitor para detectar amenazas en tráfico saliente y entrante, asegurando el bloqueo inmediato de dispositivos no autorizados a través de políticas NAC, escalamiento automático de incidentes al equipo de respuesta, optimizando la protección de la red y garantizando una operación segura y eficiente.",
        ],
        currentJob: false,
    },
    {
        title: "Logros",
        startDate: "2024-07-10",
        endDate:   "2024-12-10",
        company: "IQsec",
        location: "Ciudad de Mexico",
        description: "Integración de ecosistema Fortinet desplegando soluciones especializadas en Forcepoint, Forescout y BeyondTrust PAM.",
        goals: [
            "Colaboré directamente con cliente, logrando una mejora del 90% en la alineación de las soluciones a sus necesidades específicas de seguridad, incrementando su satisfacción y confianza.",
            "Se consolidó el 100% el ecosistema con un mayor control de privilegios y segmentación de la red como en defensa gradual en sus diferentes áreas de manera interna..",

],
        currentJob: false,
    },
    {
        title: "Especialista en Gestión, Implementación de ciberguridad  -  Senior.",
        startDate: "2023-09-12",
        endDate: "2024-07-10",
        company: "Circulo Daat S.A de C.V.",
        location: "Mexico",
        description: "Diseño e implementación de soluciones de ciberseguridad con WatchGuard, Palo Alto, Fortinet, CheckPoint en arquitecturas on-premise.",
        goals: [
            "Desarrolle de manera proactiva los sistemas internos Nextcloud en NAS nube local, sumando guías/Manuales de resolución de problemas troubleshooting, actualizaciones críticas.",
            "Planifiqué soluciones con Palo Alto Network en modelos PA-850, PA-3220, PA-5220 y PA-7080 en alta disponibilidad (HA) Active-Passive, failover, configurando VPN GlobalProtect, políticas de acceso basadas por usuario y por aplicación, monitoreo a través de administrador panorama, Inspección de certificados, IPsec VPN tunnels, protección de QoS, traffic shaping políticas en NAT y IPv4 dual-stack, zone protection profiles y DDoS/DoS.",
            "Migre tecnologías basasas en Pfsense a clusters watchGuard M370/T40 con FireCluster mediante interfaces HA1/HA2, en estanalone detectando amenazas proactivamente.",
            "Realicé implementaciones en sitios de máxima criticidad en Data Center en Telmex al conocer las normas y estructuras de Guadalajara, Querétaro, Monterrey y Cancún, tomando el liderazg para instalar unidades CheckPoint Security Gateways en modelos 5600/6700/15600/26000 en HA,, Smart-,1 405 y Smart- 15150 para gestión centralizada, SmartEvent R81.20 para correlación de eventos, SmartReporter para análisis de logs,  Check Point 1570R para sitios remotos, inspección mediante App Control, Web Filter, Threat Prevention y SandBlast VPN Site-to-Site, SmartConsole R81.20, SmartDashboard y SmartLog para administración.",
],
        currentJob: false,
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
