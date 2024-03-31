import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { styles } from '../styles';
import { navLinks } from '../constants';
import resume from '../assets/resume.pdf';
import {logo, menu, close } from '../assets';



const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);



  return (
    <nav
      className={`${
        styles.paddingX
      } w-full flex items-center py-5 fixed top-0 z-20 ${
        scrolled ? "bg-primary" : "bg-transparent"
      }`}
    >
      <div className='w-full flex justify-between items-center max-w-6xl mx-auto'>
        <Link
          to='/'
          className='flex items-center gap-2'
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt='logo' className='w-9 h-9 object-contain' />
          <p className='text-white text-[18px] font-bold cursor-pointer flex'>
            Tanay Chakraborty &nbsp;
            <span className='sm:block hidden'> | Software Developer</span>
          </p>
        </Link>


        <ul className='list-none hidden sm:flex flex-row gap-16'>
          <button className='button  text-[17px] font-medium cursor-pointer'>
          <a className='button bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 inline-block text-transparent bg-clip-text hover:text-violet-400' href={resume} download="resume.pdf">Resume</a>
          </button>
          
          
          {navLinks.map((nav) => (
            

            <li 
              key={nav.id}
              className={`${
                active ==nav.title
                  ? "text-white"
                  :"text-secondary"
              } hover:text-violet-400 text-[18px] font-medium cursor-pointer`}
              onClick={()=> setActive(nav.title)}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>


        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <img src={toggle ? close :menu} 
          alt='menu'
          className='w-[18px] h-[18px] object-contain cursor-pointer'
          onClick={() => setToggle(!toggle)}
          />

          <div className={`${!toggle ? 'hidden' : 'flex'} p- black-gradient absolute top-10 right-0 mx-5 my-2 min-w-[140px] z-10 rounded-xl p-4`}>
          <ul className='list-none flex justify-end items-start flex-1 flex-col gap-5'>
          {navLinks.map((nav) => (
            <li
            key={nav.id}
            className={`font-poppins font-medium cursor-pointer text-[16px] ${
              active === nav.title ? "text-white" : "text-secondary"
            }`}
              onClick={()=> {
                setToggle(!toggle);
                setActive(nav.title);
              }}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
          </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}


export default Navbar;