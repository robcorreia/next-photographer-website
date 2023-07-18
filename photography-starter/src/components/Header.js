import React, { useContext } from 'react';
import Socials from './Socials'
import Logo from '../img/header/logo.svg'
import MobileNav from './MobileNav'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion';
import { CursorContext } from '../context/CursorContext'

const Header = () => {
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext)

  return (
    <header className='flex items-center fixed w-full px-[30px] lg:px[100px] z-30 h-[100px] lg"h-[140px]'>
      <div className='flex flex-col lg:flex-row lg:items-center w-full justify-between'>

        <Link
          onMouseEnter={mouseEnterHandler}
          onMouseLeave={mouseLeaveHandler}
          to={'/'} className='max-w-[200px]'>
          <img src={Logo} alt='' />
        </Link>

        {/* nav - innitialy hidden - show on desktop mode */}
        <nav
          onMouseEnter={mouseEnterHandler}
          onMouseLeave={mouseLeaveHandler}
          className='hidden xl:flex gap-x-12 font-semibold'>
          <Link
            to={'/'}
            className='text-[#696c6d] hover:text-primary transition'
          >
            Home
          </Link>
          <Link
            to={'/about'}
            className='text-[#696c6d] hover:text-primary transition'
          >
            About
          </Link>
          <Link
            to={'/portfolio'}
            className='text-[#696c6d] hover:text-primary transition'
          >
            Portlofio
          </Link>
          <Link
            to={'/contact'}
            className='text-[#696c6d] hover:text-primary transition'
          >
            Contact
          </Link>
        </nav>
      </div>

      <Socials />

      <MobileNav />
    </header>
  )
};

export default Header;