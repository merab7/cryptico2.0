import React, { useState } from 'react';
import picture from '../assets/lottie.json';
import { Link,  } from 'react-router-dom';
import Lottie from "lottie-react"
import animationData from '../assets/lottie.json'

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleDropdown() {
    setIsOpen(!isOpen);
  }

  return (
    <section className="  fixed navbar  top-0 right-0 left-0 p-5 flex flex-row justify-between  z-50 bg-gray-800 text-white  "  >
      <div className="flex" >
      <Link to="/">
        <Lottie className="w-24  mt-1 cursor-pointer" animationData={animationData} />
        </Link>
      </div>

      <div>
        <div className="dropdown dropdown-end lg:hidden opacity-1 mr-9 bg-gray-800 text-white ">
          <label tabIndex={0} className="btn m-1 bg-gray-900 text-white shadow-md shadow-blue-400  " onClick={toggleDropdown}>
            Menu
          </label>
          <ul
            tabIndex={0}
            className={isOpen ? 'dropdown-content menu p-2 shadow bg-base-100 rounded-box w-40  ' : 'hidden'}
          >
             <li>
             <Link to=".">
              <button>Home</button>
              </Link>
            </li>

            <li>
            <Link to="cryptoccurrencies" >
              <button>cryptoccurrencies</button>
              </Link>
            </li>
            
            <li>
            <Link to="news">
              <button>News</button>
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className=" hidden lg:flex flex-row gap-5  font-bold pr-5 pt-5 text-lg transition-colors bg-gray-800 text-white  ">
      <Link to=".">
       <button className="  btn btn-outline cursor-pointer shadow-md shadow-blue-400  ">Home</button>
       </Link>
       <Link to="cryptoccurrencies">
        <button className="   btn btn-outline cursor-pointer shadow-md shadow-blue-400   ">cryptocurrencies</button>
        </Link>
        <Link to="news">
        <button className="   btn btn-outline cursor-pointer shadow-md shadow-blue-400  ">News</button>
        </Link>
      </div>
    </section>
  );
}

export default Header