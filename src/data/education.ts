interface Education {
    title: string;
    startDate: string;
    endDate?: string;
    school: string;
    location: string;
    description: string;
    currentUni: boolean;
}

const  education: Education[] = [
    {
        title: "Universidad Tecnológica de Nezahualcóyotl",
        startDate: "2013-02-05",
        endDate: "2017-06-14",
        school: "Ing. Tecnologías de la información y comunicación",
        location: "Cto. Rey Nezahualcóyotl Mz 010, Benito Juarez, Nezahualcóyotl Estado de México,",
        description: "Developed and maintained web applications using React, NodeJs, and MongoDB.",
        currentUni: true,
    },
    
];

export default education;
