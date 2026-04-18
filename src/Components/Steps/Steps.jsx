import React from 'react';
import UserImg from '../../assets/user.png'
import RocketImg from '../../assets/rocket.png'
import PackImg from '../../assets/package.png'

const Steps = () => {
    return (
        <div className='bg-[#F9FAFC]'>
            <div className='w-[90%] md:w-70% md:max-w-[1200px] mx-auto py-30'>

                <div className='text-center w-[90%] lg:w-[50%] mx-auto mb-10'>
                    <h1 className='text-[#101727] text-5xl font-extrabold mb-4'>Get Started in 3 Steps</h1>
                    <div>
                        <p className='text-[16px] leading-5 text-[#627382] mb-4'>Start using premium digital tools in minutes, not hours.</p>
                    </div>
                </div>

                <div className="cards grid grid-cols-1 lg:grid-cols-3 gap-7.5 text-center">
                    <div className='border flex items-center justify-center flex-col px-6 py-22 bg-white border-[#F1F1F1] border-2 rounded-2xl shadow-sm gap-4 relative'>
                        <p className='rounded-full w-10 h-10 flex items-center justify-center absolute top-5 right-5 bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white font-bold text-[14px]'>01</p>
                        <div className='rounded-full p-5 bg-gradient-to-r from-[#4F39F6]/10 to-[#9514FA]/10'>
                            <img src={UserImg} alt="" />
                        </div>
                        <h2 className='font-bold text-2xl text-[#001931]'>Create Account</h2>
                        <p className='text-[#627382] leading-5 text-[16px]'>Sign up for free in seconds. No credit card required to get started.</p>
                    </div>
                    
                    <div className='border flex items-center justify-center flex-col px-6 py-22 bg-white border-[#F1F1F1] border-2 rounded-2xl shadow-sm gap-4 relative'>
                        <p className='rounded-full w-10 h-10 flex items-center justify-center absolute top-5 right-5 bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white font-bold text-[14px]'>02</p>
                        <div className='rounded-full p-5 bg-gradient-to-r from-[#4F39F6]/10 to-[#9514FA]/10'>
                            <img src={PackImg} alt="" />
                        </div>
                        <h2 className='font-bold text-2xl text-[#001931]'>Choose Products</h2>
                        <p className='text-[#627382] leading-5 text-[16px]'>Browse our catalog and select the tools that fit your needs.</p>
                    </div>

                    <div className='border flex items-center justify-center flex-col px-6 py-22 bg-white border-[#F1F1F1] border-2 rounded-2xl shadow-sm gap-4 relative'>
                        <p className='rounded-full w-10 h-10 flex items-center justify-center absolute top-5 right-5 bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white font-bold text-[14px]'>03</p>
                        <div className='rounded-full p-5 bg-gradient-to-r from-[#4F39F6]/10 to-[#9514FA]/10'>
                            <img src={RocketImg} alt="" />
                        </div>
                        <h2 className='font-bold text-2xl text-[#001931]'>Start Creating</h2>
                        <p className='text-[#627382] leading-5 text-[16px]'>Download and start using your premium tools immediately.</p>
                    </div>

                    
                </div>
            </div>
        </div>
    );
};

export default Steps;