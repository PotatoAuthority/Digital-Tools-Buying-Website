import React from 'react';
import NavLogo from '../../assets/DigiTools (1).png'

const Navbar = () => {
    return (
        <div>
            <div className="bg-base-200 shadow-sm w-full rounded-md md:h-[92px]">
                <div className='max-lg:collapse lg:mb-48 w-full md:w-[75%] md:max-w-[1200px] mx-auto border'>
            <input id="navbar-1-toggle" className="peer hidden" type="checkbox" />
            <label htmlFor="navbar-1-toggle" className="fixed inset-0 hidden max-lg:peer-checked:block"></label>
            <div className="collapse-title navbar">
                <div className="navbar-start">
                    <label htmlFor="navbar-1-toggle" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    {/* <button className="btn btn-ghost text-xl">daisyUI</button> */}
                    <img className='w-[70%] md:w-[180px] md:h-[40px]' src={NavLogo} alt="" />
                </div>
                <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><button>Products</button></li>
                    <li><button>Features</button></li>
                    <li><button>Pricing</button></li>
                    <li><button>Testimonials</button></li>
                    <li><button>FAQ</button></li>
                </ul>
                </div>
                <div className="navbar-end">
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

            <div className="collapse-content lg:hidden z-1">
                <ul className="menu">
                <li><button>Item 1</button></li>
                <li>
                    <button>Parent</button>
                    <ul>
                    <li><button>Submenu 1</button></li>
                    <li><button>Submenu 2</button></li>
                    </ul>
                </li>
                <li><button>Item 3</button></li>
                </ul>
            </div>
                </div>
            
            </div>
        </div>
    );
};

export default Navbar;