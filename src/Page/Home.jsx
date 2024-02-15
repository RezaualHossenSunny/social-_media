import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import Navbar from '../Component/Nabar/Navbar';

const Home = () => {
  const navigate =useNavigate();
  const data =useSelector((state)=> state.userLogininfo.userInfo);
  console.log(data);
  useEffect(()=>{
    if(!data){
console.log('ok');
navigate('/login')
    }
  })
  return (
    <div className='flex gap-24 mt-9'>
      <div className='w-[186px] ml-8 '>
      <Navbar/>
       </div>
      <div  className='w-[427px]'>box 1</div>
      <div className='w-[344px]'>box 2</div>
      <div className='w-[344px]'>box 3</div>
    </div>
  )
}

export default Home