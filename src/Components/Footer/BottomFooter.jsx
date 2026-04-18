import React from 'react';

const BottomFooter = () => {
    return (
        <div className='bg-[#101727] flex items-center w-full pt-30'>

            <div className='w-[90%] md:w-70% md:max-w-[1200px] mx-auto'>
                <div className="container flex flex-col md:flex-row justify-between text-white mb-20 gap-10 md:gap-0">
                    <div className="left w-full md:w-[30%] text-center md:text-left">
                        <h1 className='text-[40px] font-bold mb-4'>DigiTools</h1>
                        <p className='text-white/80 text-[16px] leading-6'>Premium digital tools for creators, professionals, and businesses. Work smarter with our suite of powerful tools.</p>
                    </div>

                    <div className="middle flex gap-12 justify-center md:justify-start text-center md:text-left flex-col sm:flex-row">
                        <ul className='flex flex-col gap-4'>
                            <li className='font-medium text-[20px] leading-7'>Product</li>
                            <a href=""><li className='text-[16px] leading-6 text-white/80'>Features</li></a>
                            <a href=""><li className='text-[16px] leading-6 text-white/80'>Pricing</li></a>
                            <a href=""><li className='text-[16px] leading-6 text-white/80'>Templates</li></a>
                            <a href=""><li className='text-[16px] leading-6 text-white/80'>Integrations</li></a>
                        </ul>
                        <ul className='flex flex-col gap-4'>
                            <li className='font-medium text-[20px] leading-7'>Company</li>
                            <a href=""><li className='text-[16px] leading-6 text-white/80'>About</li></a>
                            <a href=""><li className='text-[16px] leading-6 text-white/80'>Blog</li></a>
                            <a href=""><li className='text-[16px] leading-6 text-white/80'>Careers</li></a>
                            <a href=""><li className='text-[16px] leading-6 text-white/80'>Press</li></a>
                        </ul>
                        <ul className='flex flex-col gap-4'>
                            <li className='font-medium text-[20px] leading-7'>Resources</li>
                            <a href=""><li className='text-[16px] leading-6 text-white/80'>Documentation</li></a>
                            <a href=""><li className='text-[16px] leading-6 text-white/80'>Help Center</li></a>
                            <a href=""><li className='text-[16px] leading-6 text-white/80'>Community</li></a>
                            <a href=""><li className='text-[16px] leading-6 text-white/80'>Contact</li></a>
                        </ul>
                        
                    </div>

                    <div className="right text-center md:text-left">
                        <p className='font-medium text-[20px] leading-7 mb-3'>Social Links</p>
                        <div className='text-2xl flex gap-1.5 justify-center md:justify-start'>
                            <a href=""><i className="fa-brands fa-instagram"></i></a>
                            <a href=""><i className="fa-brands fa-square-facebook"></i></a>
                            <a href=""><i className="fa-brands fa-x-twitter"></i></a>
                            
                            
                            
                        </div>
                    </div>
                </div>

                <hr className="border-t border-[#FAFAFA]/20 mb-7" />

                <div className='text-[#FAFAFA]/50 text-[16px] leading-6 flex justify-between mb-7 flex-col md:flex-row'>
                    <div className="left text-center md:text-left">
                        <p>© 2026 Digitools. All rights reserved.</p>
                    </div>

                    <div className="right">
                        <ul className='flex gap-5 justify-center md:justify-start'>
                            <a href=""><li>Privacy Policy</li></a>
                            <a href=""><li>Terms of Service</li></a>
                            <a href=""><li>Cookies</li></a>
                            
                            
                        </ul>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default BottomFooter;