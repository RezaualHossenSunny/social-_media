import React, { useState } from "react";
import logo from "../assets/sign.gif";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
const Login = () => {
  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const [emailer, setEmailer] = useState("");
  const [passworder, setpasworder] = useState("");
 
  const [show,setshow]=useState(false);



  const handleEmail = (e) => {
    setEmail(e.target.value);
    setEmailer("");
  };


  const handlepasswoord = (e) => {
    setPassword(e.target.value);
    setpasworder("");
  };

  const handlesubmit = () => {
    if (!email) {
      setEmailer("please enter your email");
    } else {
      if(! /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)){
        setEmailer("please enter your valid email")
      }
    }
   
    if (!password) {
      setpasworder("please enter your password");
    }
    
  };

  return (
    <div>
      <div className="flex">
        <div className="w-2/4 flex justify-end">
          <div className=" mr-14 mt-40">
            <h1 className="font-inter text-3xl font-bold not-italic text-[#32375C]">
            Login to your account!
            </h1>
          <div className="flex cursor-pointer">
          <FcGoogle className="mt-3 text-3xl"/>
          <h2 className="font-inter font-bold not-italic text-2xl mt-3 ml-2">
          Login with Google
            </h2>
           
          </div>

            <div className="mt-6 font-semibold text-base text-[#222]">
              <div>
                <p className="font-inter ml-2">Email</p>
                <input
                  onChange={handleEmail}
                  className="w-[492px] py-4 px-1 rounded-md  border border-2 border-[#808080] "
                  placeholder="Youraddres@email.com "
                  type="text"
                />
                <p className="font-inter text-red-700">{emailer}</p>
              </div>

           

              <div className="relative">
                <p className="font-inter ml-2 mt-6 ">Password</p>
                <input
                  onChange={handlepasswoord}
                  className="w-[492px] py-4 px-1 rounded-md  border border-2 border-[#808080] relative "
                  placeholder="Enter your Password "
                  type={show ? 'text' :'password'}
                />
               
                <p className="font-inter text-red-700">{passworder}</p>

              {
                show ? <FaEye onClick={()=> setshow(!show)} className="absolute top-12 right-4 "/>  
                :<FaEyeSlash onClick={()=> setshow(!show)} className="absolute top-12 right-4"/>
              }


               



              </div>

              <div
                onClick={handlesubmit}
                className="font-inter  text-2xl font-semibold bg-[#32375C] text-white py-5 text-center rounded-[86px] mt-6 cursor-pointer"
              >
                Login to Continue
              </div>
              <p className="text-center font-inter mt-6 text-[#03014C] text-base font-normal not-italic">
                Already have an account ?{" "}
                <span className="text-[#EA6C00] font-bold"> Sign Up</span>
              </p>
            </div>
          </div>
        </div>

        <div className="w-2/4 ">
          <img className="h-screen object-cover" src={logo} />
        </div>
      </div>
    </div>
  );
};

export default Login;
