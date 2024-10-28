import React from 'react'
import logo from '../assets/images/logo.png'
import { TbCoinTakaFilled } from "react-icons/tb";

export default function NavBar({clamCoin}) {
  const navItem =<>
   <li><a>Home</a></li>
   <li><a>Fixture</a></li>
   <li><a>Teams</a></li>
   <li><a>Schedules</a></li>
  </>
  return (
    <div className="navbar bg-base-100 ">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
           {navItem}
          </ul>
        </div>
        
          <img src={logo} alt="" />
        
      </div>
      <div className="navbar-center hidden lg:flex">
       
      </div>
      <div className="navbar-end">
      <ul className="menu menu-horizontal px-1">
          {navItem}
        </ul>
        <button className="btn btn-outline hover:bg-transparent hover:text-black">{clamCoin} Coin
          <TbCoinTakaFilled className='text-xl text-[#F39E09]'/>
        </button>
      </div>
    </div>
  )
}
