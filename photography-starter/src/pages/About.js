import React, { useContext } from 'react';

import WomanImg from '../img/about/woman.png'

import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { transition1 } from '../transitions';
import { CursorContext } from '../context/CursorContext'

const About = () => {
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext)

  return (
    <motion.section
      initial={{ opacity: 0, y: '100%' }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: '100%' }}
      transition={transition1}
      className='section'
    >
      <motion.div
        onMouseEnter={mouseEnterHandler}
        onMouseLeave={mouseLeaveHandler}
        className='container mx-auto h-full relative'>
        <div
          className='flex flex-col lg:flex-row h-full items-center justify-center gap-x-24 text-center lg:text-left lg:pt-16'>
          <div className='flex-1 max-h-96 lg:max-h-max order-2 lg:order-none overflow-hidden'>
            <img src={WomanImg} alt='' />
          </div>
          <motion.div
            initial={{ opacity: 0, y: '-80%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-80%' }}
            transition={transition1}
            className='flex-1 pt-36 pb-14 lg:pt-0 lg:w-auto z-10 flex flex-col justify-center lg:items-start'>
            <h1 className='h1'>About me</h1>
            <p className='mb-12 max-w-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit ratione quaerat corporis sapiente saepe ipsum
              nulla iusto cumque nobis, commodi vitae illo harum eveniet tempora aut repellat incidunt fuga quibusdam.
              <br />
              <br />
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos odio, ad ullam qui aspernatur cum.
            </p>

            <Link className='btn' to={'/portfolio'}>View my work</Link>
          </motion.div>
        </div>
      </motion.div>
    </motion.section>
  )
};

export default About;