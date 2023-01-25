import React from 'react'
import { education } from '../data'
import myImage from '../Images/Avatar-Profile-Vector.png';
import { Fade, Slide, Bounce, JackInTheBox, Flip, Hinge, Zoom, AttentionSeeker } from "react-awesome-reveal";


const About = () => {
  return (
    <section id='about' className='bg-gray-800'>
      <div className='container mx-auto px-4 py-44'>
        <h2 className='text-3xl lg:text-5xl font-bold text-center lg:text-left'>Sobre mi</h2>
        <div className='text-center lg:text-left flex flex-col lg:flex-row gap-16'>
          <div className='flex flex-col gap-6'>
            <p className='mt-8 px-4 text-center lg:text-left text-slate-300'>
              <span className='text-cyan-400'>Disfruto</span> del uso de la tecnología como herramienta creadora, y solucionadora de problemas.<br /> Lo que más me gusta de este mundo es que hay mucho por <span className='text-cyan-400'>aprender</span>, y eso es un gran disparador de motivación para mi curiosidad.<br /></p>
            <h3 className='text-xl md:text-2xl lg:text-3xl font-semibold'>Educacion</h3>
            <div className='flex flex-col gap-6'>
              {education.map(edu => {
                return (
                  <div className='lg:border-l lg:pl-4 text-slate-300'>
                    <strong className='text-white'>{edu.schoolName}</strong>
                    <p>{edu.specialization}</p>
                    <p>{edu.learning}</p>
                    <p>{edu.specialization}</p>
                  </div>
                )
              })}
            </div>
          </div>
          <div>
            <Slide direction='right'>
            <img className='bg-gray-900 p-4 mx-auto w-72 md:w-80 xl:w-96 rounded-md shadow-2xl hover:scale-105 duration-200' src={myImage} alt="no me gustan las fotos" />
            </Slide>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About