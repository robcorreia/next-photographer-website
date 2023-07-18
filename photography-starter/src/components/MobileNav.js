import React, { useState } from 'react';

import { IoMdClose } from 'react-icons/io'
import { CgMenuRight } from 'react-icons/cg'

import { Link } from 'react-router-dom'

import { motion } from 'framer-motion';

const menuVariants = {
  hidden: {
    x: '100%',
  },
  show: {
    x: 0,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.9]
    }
  }
}

const MobileNav = () => {
  const [openMenu, setOpenMenu] = useState(false)

  const handleOpenMenu = () => setOpenMenu(true)
  const handleCloseMenu = () => setOpenMenu(false)


  return (
    <nav className='text-primary xl:hidden'>
      <div
        className='text-3xl cursor-pointer'
        onClick={handleOpenMenu}
      >
        <CgMenuRight />
      </div>
      <motion.div
        variants={menuVariants}
        initial='hidden'
        animate={openMenu ? 'show' : ''}
        className='bg-white shadow-2xl w-full absolute top-0 right-0 max-w-xs h-screen z-20'
      >
        <div
          className='text-4xl absolute z-30 top-14 left-4 text-primary cursor-pointer'
          onClick={handleCloseMenu}
        >
          <IoMdClose />
        </div>
        <ul className='h-full flex flex-col justify-center items-center gap-y-8 text-primary font-primary font-bold text-3xl'>
          <li>
            <Link to="/" onClick={handleCloseMenu}>Home</Link>
          </li>
          <li>
            <Link to="/about" onClick={handleCloseMenu}>About</Link>
          </li>
          <li>
            <Link to="/portfolio" onClick={handleCloseMenu}>Portfolio</Link>
          </li>
          <li>
            <Link to="/contact" onClick={handleCloseMenu}>Contact</Link>
          </li>
        </ul>
      </motion.div>
    </nav>
  )
};

export default MobileNav;
