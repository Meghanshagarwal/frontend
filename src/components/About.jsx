import React from "react";

const About = () => {
  return (
    <div className='mt-20'>
      <h1 className='text-left font-roboto px-44 text-2xl font-bold text-white bg-AboutCol h-12'>
        About TNPL
      </h1>
      <img 
  src="https://tnpl.cricket/halfCircle-pattern.84086dd1d172df94.png" 
  className="absolute left-0 transform -translate-x-5 scale-x-[-1] h-1/2 w-auto" 
  alt="" 
/>

<img 
  src="https://tnpl.cricket/halfCircle-pattern.84086dd1d172df94.png" 
  className="absolute right-0 transform translate-x-5 h-1/2 w-auto" 
  alt="" 
/>



      <div className="px-40 py-10  bg-Aboutwhite text-black">

        <pre className="font-roboto" >
          {`The Executive Committee of the Tamil Nadu Cricket Association (TNCA), in its meeting held on April 10, 2016, decided to launch the Tamil Nadu Premier League
(TNPL) in August-September, 2016.

The objectives of the TNPL are as under:

1. To develop Tamil Nadu players to play competitive T20 matches
2. To provide a platform for Tamil Nadu players to exhibit their talent
3. To have a sustainable model for developing infrastructure in districts, and
4. To bring in new audiences to the grounds.
The TNPL is a franchise-based T20 tournament comprising eight teams. The tender process for the Media Rights and Franchisee Rights was finalised in the 
Executive Committee Meeting held on April 20, 2016.`}
        </pre>
      </div>
    </div>
  );
};

export default About;
