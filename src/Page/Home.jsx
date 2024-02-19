import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import Navbar from '../Component/Nabar/Navbar';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import Serch from '../Component/Nabar/Serch/Serch';
const Home = () => {
  const auth = getAuth();
  const [verify,setVerify]=useState(false)
  const navigate =useNavigate();
  const data =useSelector((state)=> state.userLogininfo.userInfo);
  console.log(data);
  useEffect(()=>{
    if(!data){
console.log('ok');
navigate('/login')
    }
  });

  onAuthStateChanged(auth, (user) => {
    if (user.emailVerified) {
  setVerify(true)
    }
  });
  return (
    <div>
      {
        verify ?
        <div className='flex gap-24 mt-9'>
      <div className='w-[186px] ml-8 '>
      <Navbar/>
       </div>
      <div  className='w-[427px]'>
      <Serch/>
      </div>
      <div className='w-[344px]'>box 2</div>
      <div className='w-[344px]'>box 3</div>
    </div>
    :
    <h1 className='h-screen w-full bg-comon flex justify-center items-center font-bold text-5xl text-white'>Please Verify Your Email</h1>
      }
    </div>
  )
}

export default Home