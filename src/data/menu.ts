// src/data/menu.js - Estructura actualizada con submenús
export const menu = [
    {
        href: '/',
        label: 'Inicio',
    },
    {
        label: 'Experiencia',
        hasDropdown: true,
        children: [
            {
                href: '/experiencia/profesional',
                label: 'Profesional',
            },
            {
                href: '/experiencia/academica',
                label: 'Académica',
            }
        ]
    },
    {
        label: 'Certificaciones',
        hasDropdown: true,
        children: [
            {
                href: '/certificaciones/tecnicas',
                label: 'Técnicas',
            },
            {
                href: '/certificaciones/profesionales',
                label: 'Profesionales',
            }
        ]
    },
    {
        href: '/Proyectos',
        label: 'Proyectos',
    },
];
