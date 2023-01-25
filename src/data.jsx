import { faBootstrap, faCss3Alt, faFigma, faGitAlt, faHtml5, faJava, faJs, faPhp, faReact, faNode } from '@fortawesome/free-brands-svg-icons';
import ecommerce from './Images/img_ecommerce.gif'
import videogame from './Images/videogame.gif'
import HypeShop from './Images/HypeShop.png'
import portfolio from './Images/portfolio.gif'

const aboutMe = [
    {
        id: 1,
        para: "Mi nombre es Damian Ferrera y me gusta construir webs. Estoy buscando una oportunidad para mostrar mis habilidades como desarrollador web."
    }
];

const education = [
    {
        id: 1,
        schoolName: "Ulp universidad de la punta San Luis (Argentina)",
        specialization: "Tecnico en Desarrollo de software",
        learning: "Estructuras de datos y algoritmos, administración de bases de datos, ingeniería de software, Java, Php, Sql, C++, Javascript, Html, Css."

    },
    {
        id: 2,
        schoolName: "SoyHenry (Bootcamp)",
        specialization: "Desarrollador Full Stack",
        learning: "conocimientos adquiridos: Figma, HTML, CSS, JavaScript, React JS, Node.js, SQL, Express, PostgreSQL, Sequelize, MongoDB, Mongoose"

    }
];

const skills = [
    {
        id: 1,
        name: "React",
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
        id: 8,
        name: "Figma",
        icon: faFigma,
    },
    {
        id: 9,
        name: "Php",
        icon: faPhp,
    },
    {
        id: 10,
        name: "Java",
        icon: faJava,
    },
    {
        id: 11,
        name: "Node",
        icon: faNode,
    },

];

const projects = [
    {
        id: 1,
        imgSrc: ecommerce,
        alt: "ecommerce",
        projectName: "e-commerce Tech World",
        technologies: "JavaScript, Html, Tailwind, React.js, Redux, Node.js, Express, MongoDb y Mongoose.",
        description: "un e-commerce para la venta de diversos productos electrónicos. Ofrecemos un sistema de inicio de sesión y registro tanto local como a través de terceros.",
        projectLink: "https://www.techwolrd.store/",
        githubLink: "https://github.com/damianf2022/TechWorld"
    },
    {
        id: 2,
        imgSrc: portfolio,
        alt: "portfolio",
        projectName: "Portfolio",
        technologies: "JavaScript, Html, tailwind, React.js.",
        description: "mi portfolio hecho con vite & react.",
        projectLink: "https://damianf2022.github.io/portfolio_vite/",
        githubLink: "https://github.com/damianf2022/portfolio_vite"
    },
    {
        id: 3,
        imgSrc: videogame,
        alt: "videoGame",
        projectName: "Libreria de Video Juegos",
        technologies: "JavaScript, Html, css, React.js, Redux, Node.js, Express, PostgreSql y Sequelize.",
        description: "Una app de libreria de videojuegos que muestra diferentes tipos de juegos organizados por tarjetas.",
        projectLink: "",
        githubLink: "https://github.com/damianf2022/Videos-Juegos"
    },
    {
        id: 4,
        imgSrc: HypeShop,
        alt: "ecommerce",
        projectName: "e-commerce Hype Shop",
        technologies: "JavaScript, Html, css, React.js, Redux, Node.js, Express, PostgreSql y Sequelize.",
        description: "un e-commerce para la venta de diferentes tipos de calzados.",
        projectLink: "https://hype-gamma.vercel.app/",
        githubLink: "https://github.com/damianf2022/PF-Hype-Shop"
    },

    
]

export { aboutMe, education, skills };
export default projects;