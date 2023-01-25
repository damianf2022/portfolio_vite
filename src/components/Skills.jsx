import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { skills } from '../data';
import { Fade, Slide, Bounce, JackInTheBox, Flip, Hinge, Zoom, AttentionSeeker } from "react-awesome-reveal";


const Skills = () => {
  return (
    <section id="skills" className='bg-gray-900'>
      <div className='container mx-auto px-4 py-40'>
        <h2 className='text-3xl lg:text-5xl font-bold text-center lg:text-left pb-12'>Skills</h2>
        < Zoom>
          <ul className='grid gap-3 grid-cols-2 md:grid-cols-5 lg:grid-cols-5 xl:grid-cols-5'>
            {skills.map((skill) => {
              return (
                <li key={skill.id} className='shadow-lg rounded bg-gray-800 flex flex-col items-center gap-2 p-4 hover:scale-110 hover:bg-cyan-800 duration-200'>
                  <strong className='text-lg lg:font-bold'>{<span className='hover:text-sky-700'>{skill.name}</span>}</strong>
                  <FontAwesomeIcon icon={skill.icon} className='text-6xl lg:text-8xl' />
                </li>
              )
            })}
          </ul>
        </Zoom>
      </div>
    </section>)
}

export default Skills