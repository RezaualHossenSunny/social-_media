import React from 'react'
import { FaSearch } from "react-icons/fa";
import { HiOutlineDotsVertical } from "react-icons/hi";
const Serch = () => {

  return (
    <div>
        <div className='relative '>
            <input type='text ' className='shadow-gray-700 rounded-b-2xl w-full h-[59px] bg-white border-2 border-slate-950 py-4 px-14 text-xl font-bold' placeholder='Search'/>
           <div className='flex justify-between'>
          
           <FaSearch className='absolute top-6 left-1 text-xl text-gray-800 ' />
           <HiOutlineDotsVertical className='absolute top-6 right-1 text-xl text-gray-800 ' />
           </div>
        </div>
    </div>
  )
}

export default Serch