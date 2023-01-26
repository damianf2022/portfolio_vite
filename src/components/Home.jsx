import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesDown } from "@fortawesome/free-solid-svg-icons";
import SocialMediaIcons from "./small-components/SocialMediaIcons";
import LinkBtn from "./small-components/LinkBtn";
import resume from "../Assets/DamianFerrera.pdf";
import { Fade, Slide, Bounce, JackInTheBox, Flip, Hinge, Zoom, AttentionSeeker } from "react-awesome-reveal";


export default function Home() {
    return (
        <section id="hero" className='bg-gradient-to-r from-gray-600 via-gray-700 to-gray-800'>
            <div className="container mx-auto px-4 py-56">
                <div className='text-center lg:text-left flex flex-col lg:justify-center'>
                    <div className='flex flex-col gap-6 my-auto lg:pl-20'>
                        <div>
                            <span className='lg:text-5xl mb-6 mt-6'><AttentionSeeker effect="shakeX">👋</AttentionSeeker></span>
                            <h4 className='lg:text-3xl mb-4'>Hola, soy </h4>
                            <h1 className="text-5xl font-bold md:text-6xl lg:text-7xl xl:text-8xl">Damian Ferrera</h1>
                            <h2 className="lg:text-xl mt-4 text-slate-300">Estoy buscando mi primera oportunidad en el <span className="text-cyan-400">desarrollo web</span> </h2>
                        </div>
                        <SocialMediaIcons />
                        <LinkBtn link={resume} linkText="Mira mi Curriculum" classes="mx-auto lg:mx-0 bg-slate-900 rounded shadow-xl px-8 py-4 w-60 hover:bg-sky-800 hover:scale-105 duration-200" />
                    </div>
                </div>
                <a href='#skills'><FontAwesomeIcon icon={faAnglesDown}
                    className="bg-gray-800 rounded-full p-2 text-2xl lg:text-4xl animate-bounce hover:bg-sky-700 duration-200" /></a>
            </div>
        </section>
    )
}