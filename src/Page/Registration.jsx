import React, { useState } from "react";
import logo from "../assets/regi.png";
const Registration = () => {
    const [email,setEmail]=useState('');
    const [name,setName]=useState('');
    const [password,setPassword]=useState('');
    
    const [emailer, setEmailer]=useState('');
    const [nameer, setnameer]=useState('');
    const [passworder, setpasworder]=useState('');


    const handleEmail=(e)=>{
      setEmail(e.target.value);
      setEmailer('')
    }

    const handlname=(e)=>{
        setName(e.target.value);;
        setnameer('');
      }
      const handlepasswoord=(e)=>{
        setPassword(e.target.value);
        setpasworder('')
      }

      const handlesubmit =()=>{
        if(!email){
            setEmailer('please enter your email');
        }
        if(!name){
            setnameer('please enter your name')
        }
        if(!password){
            setpasworder('please enter your password')
        }
      }

  return (
    <div>
      <div className="flex">
        <div className="w-2/4 flex justify-end">
          <div className=" mr-14 mt-32">
            <h1 className="font-inter text-3xl font-bold not-italic text-[#32375C]">
              Welcome To Social Media
            </h1>
            <h2 className="font-inter font-bold not-italic text-2xl mt-3">
              Log In
            </h2>

            <div className="mt-6 font-semibold text-base text-[#222]">
              <div>
                <p className="font-inter ml-2">Email</p>
                <input onChange={handleEmail}
                  className="w-[492px] py-4 px-1 rounded-md  border border-2 border-[#808080] "
                  placeholder="Enter your Email " type="text"
                />
                <p className="font-inter text-red-700">{emailer}</p>
              </div>

              <div>
                <p className="font-inter ml-2 mt-6">Full Name</p>
                <input onChange={handlname}
                  className="w-[492px] py-4 px-1 rounded-md  border border-2 border-[#808080] "
                  placeholder="Enter your Password "
                  type="text"
                />
                <p className="font-inter text-red-700">{nameer}</p>
              </div>

              <div>
                <p className="font-inter ml-2 mt-6">Password</p>
                <input onChange={handlepasswoord}
                  className="w-[492px] py-4 px-1 rounded-md  border border-2 border-[#808080] "
                  placeholder="Enter your Password "
                  type="password"
                />
                <p className="font-inter text-red-700">{passworder}</p>
              </div>

              <div onClick={handlesubmit} className="font-inter  text-2xl font-semibold bg-[#32375C] text-white py-5 text-center rounded-[86px] mt-6 cursor-pointer">
                Sign up
              </div>
              <p className="text-center font-inter mt-6 text-[#03014C] text-base font-normal not-italic">
                Already have an account ?{" "}
                <span className="text-[#EA6C00] font-bold"> Sign In</span>
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

export default Registration;
