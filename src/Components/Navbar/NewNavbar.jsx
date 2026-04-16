import React from 'react';
import NavLogo from '../../assets/DigiTools (1).png'

const NewNavbar = () => {
    return (
        <div className='bg-base-200 shadow-sm'>
            <div className='md:h-[92px] flex items-center w-70% max-w-[1200px] mx-auto'>
<div className="navbar">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li><a>Products</a></li>
        <li><a>Features</a></li>
        <li><a>Pricing</a></li>
        <li><a>Testimonials</a></li>
        <li className='mt-1'><button className="btn btn-primary rounded-full btn-sm md:hidden">Get Started</button></li>
      </ul>
    </div>
    <div>
        <img className='w-[70%] md:w-[180px] md:h-[40px]' src={NavLogo} alt="" />
    </div>
    {/* <a className="btn btn-ghost text-xl">
        DaisyUI
    </a> */}
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><a>Products</a></li>
      <li><a>Features</a></li>
      <li><a>Pricing</a></li>
      <li><a>Testimonials</a></li>
    </ul>
  </div>
  <div className="navbar-end">
    {/* <a className="btn">Button</a> */}
    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                        <div className="indicator">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /> </svg>
                            <span className="badge badge-sm indicator-item">8</span>
                        </div>
                    </div>
                    <ul className="menu menu-horizontal px-1">
                        <li><button>Login</button></li>
                    </ul>
                    <button className="btn btn-primary rounded-full hidden md:flex">Get Started</button>
  </div>
</div>
            </div>
        </div>
    );
};

export default NewNavbar;