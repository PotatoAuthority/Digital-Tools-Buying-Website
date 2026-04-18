import React from 'react';

const TopFooter = () => {
    return (
        <div className='bg-gradient-to-r from-[#4F39F6] to-[#9514FA] flex items-center w-full py-30'>
            <div className='text-center w-[90%] lg:w-[70%] mx-auto text-white'>
                    <h1 className='text-4xl md:text-[40px] font-extrabold mb-4'>Ready to Transform Your Workflow?</h1>
                    <div>
                        <p className='text-[16px] leading-6 mb-4 text-white/90'>Join thousands of professionals who are already using Digitools to work smarter. Start your free trial today.</p>
                    </div>

                    <div className='flex gap-4 items-center justify-center mt-10'>
                        <button className="text-[#9514FA] btn rounded-full inter font-semibold text-[16px]">Explore Products</button>
                        <button className="btn inter font-semibold text-[16px] text-white border-1 border-white bg-transparent rounded-full px-5 py-2">View Pricing</button>
                    </div>

                    <p className='text-[16px] leading-6 text-white/90 mt-4'>14-day free trial • No credit card required • Cancel anytime</p>

            </div>
        </div>
    );
};

export default TopFooter;