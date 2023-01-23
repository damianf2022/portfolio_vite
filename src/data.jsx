import { faBootstrap, faCss3Alt, faFigma, faGitAlt, faHtml5, faJs, faMarkdown, faReact, faSass, faWordpress } from '@fortawesome/free-brands-svg-icons';


const aboutMe = [
    {
        id: 1,
        para: "Mi nombre es Damian Ferrera y me gusta construir webs. Estoy buscando una oportunidad para mostrar mis habilidades como desarrollador web."
    }
];

const education = [
    {
        id: 1,
        Universidad: "Ulp universidad de la punta San Luis (Argentina)",
        especialidad: "Tecnico en Desarrollo de software"

    },
    {
        id: 2,
        Cursos: "SoyHenry",
        especialidad: "Desarrollador Full Stack"

    }
];

const skills=[
    {
        id:1,
        name:"React",
        icon: faReact,
    },
    {
        id: 2,
        name: "JavaScript",
        icon: faJs,
    },
    {
        id: 3,
        name: "HTML",
        icon: faHtml5,
    },
    {
        id: 4,
        name: "CSS",
        icon: faCss3Alt,
    },
    {
        id: 5,
        name: "Bootstrap",
        icon: faBootstrap,
    },
    {
        id: 6,
        name: "Git",
        icon: faGitAlt,
    },
    {
        id: 7,
        name: "Sass",
        icon: faSass,
    },
    {
        id: 8,
        name: "Figma",
        icon: faFigma,
    },
];

const projects=[
    {
        
    }
]

export { aboutMe, education, skills };
export default projects;