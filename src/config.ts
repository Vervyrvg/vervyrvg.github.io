// config.ts - Archivo de configuración corregido
export const SITE = {
    website: "https://vervyrvg.github.io/", // replace this with your deployed domain
    title: "Portafolio",
    description: "Especialista, Gestión Administración e Implementación de Soluciones en Ciberseguridad - SOC Senior",
    tags: ["portfolio"],
    ogImage: "/og-image.webp",
    logo: "logo",
    logoText: "Portafolio",
    lang: "es", // Cambiado a español
    favicon: "/favicon.png",
    repository: "https://github.com/Vervyrvg/vervyrvg.github.io",
    author: "Ing. Victor Eduardo Resendiz Villegas",
    profile: "https://vervyrvg.github.io/",
}

export const ME = {
    name: "Victor Eduardo Resendiz Villegas",
    profession: "Especialista, Gestión Administración e Implementación de Soluciones en Ciberseguridad - SOC Senior",
    profileImage: "pp2.png",
    profileFacts: [
        {
            value: 8,
            description: "Años de Experiencia"
        },
        {
            value: 34,
            description: "Proyectos Concluidos" // Corregido: "Cloncluidos" -> "Concluidos"
        },
        {
            value: 45,
            description: "Clientes Atendidos"
        },
        {
            value: 18,
            description: "Talleres Impartidos"
        },
        {
            value: 4,
            description: "Herramientas o Scripts Desarrollados" // Corregido: "Script's" -> "Scripts"
        }
    ],
    contactInfo: {
        email: "victorresendizv@outlook.com",
        linkedin: "https://www.linkedin.com/in/victor-eduardo-resendiz-villegas-910a80290",
        github: "https://github.com/Vervyrvg/vervyrvg.github.io",
        whatsapp: "5632078947",
        resumeDoc: "resume.pdf",
        cartaDoc: "carta.pdf",
    },
    aboutMe: "Soy un ingeniero titulado en Tecnologías de la Información y Comunicación, con +8 años de experiencia especializada en administración e implementación de soluciones en Ciberseguridad. Mi enfoque profesional se basa en automatizar y optimizar procesos para ofrecer soluciones innovadoras que fortalezcan la protección de sistemas críticos. Durante mi carrera, he liderado proyectos que integran seguridad como un habilitador estratégico de innovación, transformando cada componente de protección en un valor agregado que impulsa el crecimiento sostenible. Con una mentalidad orientada a resultados y una pasión por la tecnología, estoy preparado para enfrentar los desafíos del entorno actual. Mis soluciones combinan análisis predictivo avanzado con marcos de respuesta proactivos, garantizando un nivel de seguridad adaptable y eficiente que potencia la competitividad.",
}

export const SOCIALS = [
    {
        name: "WhatsApp",
        url: "https://wa.me/5632078947",
        icon: "whatsapp-fill",
        show: true
    },
    {
        name: "Email",
        url: "mailto:victorresendizv@outlook.com",
        icon: "email-fill",
        show: true
    },
    {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/victor-eduardo-resendiz-villegas-910a80290",
        icon: "linkedin-fill",
        show: true
    },
    {
        name: "GitHub",
        url: "https://github.com/Vervyrvg/vervyrvg.github.io",
        icon: "github-fill",
        show: true
    },
    {
        name: "Facebook",
        url: "https://www.facebook.com/vicbox.dev",
        icon: "facebook-fill",
        show: false
    },
    {
        name: "Instagram",
        url: "https://www.instagram.com/vicbox.dev",
        icon: "instagram-fill",
        show: false
    },
    {
        name: "YouTube",
        url: "https://www.youtube.com/vicbox.dev",
        icon: "youtube-fill",
        show: false
    },
    {
        name: "TikTok",
        url: "https://tiktok.com/vicbox.dev",
        icon: "tiktok-fill",
        show: false
    }
]
