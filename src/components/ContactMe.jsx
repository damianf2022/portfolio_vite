import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesUp } from "@fortawesome/free-solid-svg-icons";
import { Fade, Slide, Bounce, JackInTheBox, Flip, Hinge, Zoom, AttentionSeeker } from "react-awesome-reveal";


const ContactMe = () => {
  return (
    <section id='contact'>
      <div className='container mx-auto px-4 py-40 gap-10'>
        <div className='flex flex-col gap-10 text-center max-w-3xl mx-auto'>
            <h2 className='text-3xl font-bold lg:text-5xl'>Contáctame</h2>
          <Fade delay={800}>
            <p className='text-slate-300'>Si le gusta mi trabajo o quiere contratarme, no dude en enviarme un correo electrónico a <span className='bg-cyan-900 px-1 py-1'>damianf2022@gmail.com</span> o simplemente presione el botón a continuación.</p>
              <AttentionSeeker delay={1500} effect='shakeX' >
                <a href="mailto:damianf2022@gmail.com"
                  className="bg-gray-200 text-black font-bold px-10 py-4 rounded hover:bg-cyan-800 hover:text-white duration-200">¡Entrevístame!</a>
              </AttentionSeeker>
          </Fade>
        </div>
        <div className='text-right'>
          <a href="#home" className='shadow-xl'><FontAwesomeIcon icon={faAnglesUp} className='animate-bounce text-2xl lg:text-4xl bg-gray-900 rounded-full p-2 hover:bg-sky-700 duration-200' /></a>
        </div>
      </div>
    </section>)
}

export default ContactMe