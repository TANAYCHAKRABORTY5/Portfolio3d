import React from 'react';
import { CiLinkedin } from "react-icons/ci";
import { BsGithub } from "react-icons/bs";

import { styles } from "../styles";


const Footer = () => {
  return (
    <div className= "w-full flex   justify-center">
        <div className='w-[150px] h-[38px] flex flex-wrap items-center justify-center bg-tertiary gap-8 p-[12px]  rounded-xl'>

            <a className='scale-[2]' href="https://www.linkedin.com/in/tanay-chakraborty-a84a99226/"><CiLinkedin /></a>
            <a className='scale-[2]' href="https://github.com/TANAYCHAKRABORTY5"><BsGithub /></a>
        </div>
    </div>
    
  )
}

export default Footer