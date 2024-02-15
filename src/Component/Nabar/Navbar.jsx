import React from 'react'
import profile from '../../assets/Ellipse 1.png';
import { FaHome } from "react-icons/fa";
const Navbar = () => {
  return (
    <div>
        <div className='bg-comon h-[763px] rounded-lg'>
            <img src={profile} alt='profie' className='mx-auto pt-[38px]'/>

            <FaHome className='mx-auto text-5xl bg-white text-comon'/>
        </div>
    </div>
  )
}

export default Navbar