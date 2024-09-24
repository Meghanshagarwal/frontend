import React from "react";

const Teams = () => {
  return (
    <div>
      <div className='pb-6 text-white font-semibold text-2xl leading-7 bg-[#19093e] tracking-wide clear-both overflow-hidden'>
        <h3 className='text-left mt-20 font-roboto px-44 text-2xl font-bold text-white bg-AboutCol h-12'>
          Teams
        </h3>
      </div>
      <div className='h-screen bg-[#321E5F] relative '>
      <img 
    src="https://tnpl.cricket/halfCircle-pattern.84086dd1d172df94.png" 
    className="absolute left-0 transform -translate-x-5 scale-x-[-1] w-[300px] h-[550px] z-10 mt-14" 
    alt="" 
  />
  <img 
    src="https://tnpl.cricket/halfCircle-pattern.84086dd1d172df94.png" 
    className="absolute right-0 w-[300px] h-[550px] z-10 mt-14" 
    alt="" 
  />

<div className="flex justify-center align-middle flex-wrap gap-5 rounded-lg	 " >
    <div className="w-[250px] h-[325px] bg-[linear-gradient(#3ac1c1,#076296)] " >
    <img 
  src="https://tnplmcfeeds.s3.ap-south-1.amazonaws.com/teamlogos/153.png?v=2"
  className="relative mt-0 w- left-12 top-16 h-36 rounded-md overflow-hidden transition-all duration-300 ease-in-out flex justify-center items-center  "
  alt="" 
/>
        <img src="https://tnpl.cricket/fullCircle-pattern.1596f8f750208dee.png" className="-mt-32 opacity-60 w-[500px] " />
    </div>


      </div>
      </div>

    </div>
  );
};

export default Teams;
