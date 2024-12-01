import React from "react";

const Navbar = () => {
  return (
   <nav className="">
      <ul className="flex justify-around items-center bg-lime-950 text-white text-xl sm:text-2xl p-2">
         <li>&lt; Chat-Bot /&gt;</li>
         
         <a href="https://github.com/debojyoti-tantra" className='text-white bg-green-700 rounded-full flex my-auto justify-between items-center ring-white ring-1'>
            <img className='invert w-8 sm:w-9 p-1' src="/github.svg" alt="github logo" />
            <span className='my-auto text-sm sm:text-xl px-2'>GitHub</span>
         </a>
      </ul>
   </nav>
  );
};

export default Navbar;
