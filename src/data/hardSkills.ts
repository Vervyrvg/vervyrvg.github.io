interface HardSkill {
  name: string;
  description: string;
  icon: string;
  category: string;
  experienceYears: number;
  proficiencyLevel: 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert';
  technologies: string[];
  projectsBuilt: number;
  learningYear: number;
  officialDocs?: string;
  color: string;
  highlights: string[];
}

const hardSkills: HardSkill[] = [
  {
    name: "AstroJs",
    description: "Generador de sitios estáticos ultra-rápido con arquitectura de componentes y renderizado optimizado. Perfecto para sitios web modernos con excelente rendimiento y SEO.",
    icon: "astro_dark",
    category: "Frontend Framework",
    experienceYears: 2,
    proficiencyLevel: "Advanced",
    technologies: ["TypeScript", "Vite", "SSR", "SSG", "Web Components"],
    projectsBuilt: 8,
    learningYear: 2022,
    officialDocs: "https://docs.astro.build/",
    color: "from-orange-500 to-red-600",
    highlights: [
      "Sitios web ultra-rápidos",
      "Arquitectura de islas",
      "Múltiples frameworks soportados"
    ]
  },
  {
    name: "NextJs",
    description: "Framework de React para producción con renderizado híbrido, optimización automática y características empresariales. Mi elección principal para aplicaciones web modernas.",
    icon: "nextjs_icon_dark",
    category: "Full-Stack Framework",
    experienceYears: 4,
    proficiencyLevel: "Expert",
    technologies: ["React", "TypeScript", "Vercel", "API Routes", "Middleware"],
    projectsBuilt: 15,
    learningYear: 2020,
    officialDocs: "https://nextjs.org/docs",
    color: "from-gray-800 to-black",
    highlights: [
      "App Router & Server Components",
      "Edge Runtime optimizado",
      "Deployment automático"
    ]
  },
  {
    name: "NodeJs",
    description: "Runtime de JavaScript para backend robusto y escalable. Experiencia sólida desde 2018 construyendo APIs RESTful, microservicios y aplicaciones en tiempo real.",
    icon: "nodejs",
    category: "Backend Runtime",
    experienceYears: 6,
    proficiencyLevel: "Expert",
    technologies: ["Express", "Fastify", "Socket.io", "PM2", "Cluster"],
    projectsBuilt: 25,
    learningYear: 2018,
    officialDocs: "https://nodejs.org/docs/",
    color: "from-green-500 to-emerald-600",
    highlights: [
      "APIs RESTful escalables",
      "Microservicios modernos",
      "Aplicaciones en tiempo real"
    ]
  },
  {
    name: "MongoDB",
    description: "Base de datos NoSQL flexible y potente para aplicaciones modernas. Especializado en modelado de datos, agregaciones complejas y optimización de rendimiento.",
    icon: "mongodb",
    category: "Database",
    experienceYears: 5,
    proficiencyLevel: "Advanced",
    technologies: ["Mongoose", "Atlas", "Aggregation", "GridFS", "Transactions"],
    projectsBuilt: 20,
    learningYear: 2019,
    officialDocs: "https://docs.mongodb.com/",
    color: "from-green-600 to-lime-500",
    highlights: [
      "Agregaciones complejas",
      "Escalabilidad horizontal",
      "Transacciones ACID"
    ]
  }
];

export default hardSkills;
