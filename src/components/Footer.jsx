import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact } from '@fortawesome/free-brands-svg-icons';
import SocialMediaIcons from './small-components/SocialMediaIcons';
import { Fade, Slide, Bounce, Hinge } from "react-awesome-reveal";



const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className='bg-gray-900'>
      <div className='container mx-auto px-4 py-20 text-center flex flex-col gap-4'>
        <div className='flex flex-col gap-4 md:flex-row md:justify-between md:items-center md:gap-0'>
          <Bounce >
            <p>Creado por Damian © {year} </p>
          </Bounce>
          <SocialMediaIcons />
        </div>
        <hr className='opacity-30' />
        <>
          <p className='text-sm text-gray-300'>Echo con <a href="https://reactjs.org/"><FontAwesomeIcon icon={faReact} />(React)</a></p>
        </>
      </div>
    </footer>)
}

export default Footer