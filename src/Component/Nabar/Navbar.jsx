import React from "react";
import profile from "../../assets/Ellipse 1.png";
import { FaHome,FaFacebookMessenger  } from "react-icons/fa";
import { IoIosNotifications } from "react-icons/io";
import { IoSettings } from "react-icons/io5";
import { CiLogin } from "react-icons/ci";
import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { userLogininfo } from "../../Slices/Userslice";
const Navbar = () => {
  const auth = getAuth();
  const navigate= useNavigate();
  const dispatch =useDispatch();

  const handlelogout =()=>{
    signOut(auth).then(() => {
      dispatch(userLogininfo(null));
      localStorage.removeItem('userLogininfo');
      navigate('/login')
    }).catch((error) => {
      console.log(error);
    });
  }
  return (
    <div>
      <div className="bg-comon h-[763px] rounded-lg">
        <img src={profile} alt="profie" className="mx-auto pt-[38px]" />

        <div className='relative pt-5 pb-[25px] after:absolute after:content-[""] after:top-0 after:right-0 after:bg-slate-100 after:w-[161px] after:h-full after:z-[-1] z-[1] after:rounded-l-lg  before:absolute before:content-[""] before:top-0 before:right-0 before:bg-comon before:w-[8px] before:h-full before:rounded-l-lg mt-12 '>
          <FaHome className="mx-auto text-5xl bg-white text-comon text-center" />
        </div>

        <div className='relative pt-5 pb-[25px] mt-8 '>
          <FaFacebookMessenger  className="mx-auto text-5xl  text-white text-center" />
        </div>
        <div className='relative pt-5 pb-[25px] mt-8 '>
          <IoIosNotifications    className="mx-auto text-5xl  text-white text-center" />
        </div>
        <div className='relative pt-5 pb-[25px] mt-8 '>
          <IoSettings     className="mx-auto text-5xl  text-white text-center" />
        </div>

        <div className='relative pt-5 pb-[25px] mt-4 '>
          <CiLogin onClick={handlelogout} className="mx-auto text-5xl font-bold  text-white text-center" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
