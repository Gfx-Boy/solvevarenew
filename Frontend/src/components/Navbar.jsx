import React, { useState } from 'react';
import { solvevare, menu, close, blackhole } from '../assets/assets/index.js';
import { navLinks } from '../constants/index.js';

const Navbar = () => {
  const [toggle, settoggle] = useState(false);

  return (
    <nav id='navbar' className='z-[1] h-[70px] rounded-full p-5 shadow-[0_20px_50px_rgba(0,_0,_0,_0.7)] mt-5 flex justify-between items-center navbar backdrop-filter backdrop-blur-xl bg-opacity-50 border border-gray-700 bg-black fixed top-0 left-1/2 transform -translate-x-1/2'>
      <img src={solvevare} alt="Solvevare Logo" className="w-[121px] h-[122px] sticky pt-12"/>
      <ul className='list-none sm:flex hidden justify-end items-center flex-1'>
        {navLinks.map((nav, index) => (
          <li key={nav.id} className={`font-poppins font-normal cursor-pointer text-[16px] ${index === navLinks.length - 1 ? 'mr-0' : 'mr-5'} text-white`}>
            <a href={`#${nav.id}`}>
              {nav.title}
            </a>
          </li>
        ))}
      </ul>
      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img 
          src={toggle ? close : menu} 
          alt='menu' 
          className='w-[28px] h-[28px] object-contain' 
          onClick={() => settoggle(prev => !prev)}
        />
      </div>
      <div className={`${toggle ? 'flex' : 'hidden'} p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}>
        <ul className='list-none flex flex-col justify-end items-center flex-1'>
          {navLinks.map((nav, index) => (
            <li key={nav.id} className={`font-poppins font-normal cursor-pointer text-[16px] ${index === navLinks.length - 1 ? 'mb-0' : 'mb-4'} text-white`}>
              <a onClick={() => settoggle(prev => !prev)} href={`#${nav.id}`}>
                {nav.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
