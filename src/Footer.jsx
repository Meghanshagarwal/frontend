import React from "react";

const Footer = () => {
  return (
    <footer className='bg-footercol text-white py-10 font-roboto overflow-hidden scroll-m-0 '>
      <div className='container mx-auto px-10'>
        <div className='grid grid-cols-4 gap-8'>
          {/* Teams */}
          <div>
            <h3 className='text-xl font-bold mb-4'>Teams</h3>
            <ul className='space-y-2 cursor-pointer'>
              <li className='hover:text-hoverYellow'>Lyca Kovai Kings</li>
              <li className='hover:text-hoverYellow'>Nellai Royal Kings</li>
              <li className='hover:text-hoverYellow'>Chepauk Super Gillies</li>
              <li className='hover:text-hoverYellow'>Dindigul Dragons</li>
              <li className='hover:text-hoverYellow'>Siechem Madurai Panthers</li>
              <li className='hover:text-hoverYellow'>Idream Tiruppur Tamizhans</li>
              <li className='hover:text-hoverYellow'>Trichy Grand Cholas</li>
              <li className='hover:text-hoverYellow'>SKM Salem Spartans</li>
            </ul>
          </div>

          {/* Latest Updates */}
          <div>
            <h3 className='text-xl font-bold mb-4'>Latest Updates</h3>
            <ul className='space-y-2 cursor-pointer'>
              <li className='hover:text-hoverYellow'>Videos</li>
              <li className='hover:text-hoverYellow'>Photos</li>
              <li className='hover:text-hoverYellow'>News</li>
            </ul>
          </div>

          {/* Guidelines */}
          <div>
            <h3 className='text-xl font-bold mb-4'>Guidelines</h3>
            <ul className='space-y-2 cursor-pointer'>
              <li className='hover:text-hoverYellow'>TNPL Code Of Conduct</li>
              <li className='hover:text-hoverYellow'>Governing Council</li>
              <li className='hover:text-hoverYellow'>Anti Corruption Policy</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className='text-xl font-bold mb-4'>Contact</h3>
            <ul className='space-y-2 cursor-pointer'>
              <li className='hover:text-hoverYellow'>Contact Us</li>
              <li className='hover:text-hoverYellow'>Privacy Policy</li>
              <li className='hover:text-hoverYellow'>Terms Of Use</li>
            </ul>
          </div>
        </div>
      </div>
      <div className=' w-full  mt-16'>
        <p className='text-center font-semibold'>Copyright © TNPL 2024 All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
