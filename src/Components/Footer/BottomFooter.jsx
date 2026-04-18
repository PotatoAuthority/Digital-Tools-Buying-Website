import React from 'react';

const BottomFooter = () => {
    return (
        <div className='bg-[#101727] flex items-center w-full pt-30'>

            <div className='w-[90%] lg:w-[70%] mx-auto'>
                <div className="container flex justify-between text-white mb-20">
                    <div className="left w-[30%]">
                        <h1 className='text-[40px] font-bold mb-4'>DigiTools</h1>
                        <p className='text-white/80 text-[16px] leading-6'>Premium digital tools for creators, professionals, and businesses. Work smarter with our suite of powerful tools.</p>
                    </div>

                    <div className="middle flex gap-12">
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

                    <div className="right">
                        <p className='font-medium text-[20px] leading-7'>Social Links</p>
                        <div></div>
                    </div>
                </div>

                <hr className="border-t border-[#FAFAFA]/20 mb-7" />

                <div>

                </div>
            </div>
            
        </div>
    );
};

export default BottomFooter;