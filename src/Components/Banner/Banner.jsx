import React from 'react';
import badgeImg from '../../assets/badge.png'
import BannerImg from '../../assets/banner.png'
import PlayImg from '../../assets/Play.png'

const Banner = () => {
    return (
        <div className='w-[90%] md:w-70% md:max-w-[1200px] mx-auto my-4 md:my-[85px]'>
            <div className='flex flex-col md:flex-row gap-10 lg:gap-15 items-center justify-between'>
                <div className="left md:max-w-[53%]">
                    {/* badge */}
                    <div className=" flex md:g-[5px] rounded-full px-4 py-2 items-center max-w-[200px] md:max-w-[294px] justify-between bg-[#E1E7FF] mb-4 mx-auto md:mx-0">
                        <img className='h-3 md:h-4 w-3 md:w-4' src={badgeImg} alt="" />
                        <p className='text-[10px] md:text-[16px] font-medium bg-gradient-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent'>New: AI-Powered Tools Available</p>
                    </div>

                    <div>
                        <h1 className='font-extrabold text-4xl md:text-5xl lg:text-7xl lg:leading-21 text-center md:text-left'>Supercharge Your</h1>
                        <h1 className='font-extrabold text-4xl md:text-5xl lg:text-7xl lg:leading-21 text-center md:text-left'>Digital Workflow</h1>
                        <p className='text-[#627382] text-[14px] md:text-[18px] leading-5 mt-4 text-center md:text-left'>Access premium AI tools, design assets, templates, and productivity software—all in one place. Start creating faster today.</p>
                        <p className='text-[#627382] text-[14px] md:text-[18px] leading-5 mt-4 text-center md:text-left'>Explore Products</p>
                        
                    </div>
                    <div className='flex gap-4 mt-3 lg:mt-8 justify-center md:justify-start'>
                        <button className="text-white btn bg-gradient-to-r from-[#4F39F6] to-[#9514FA] rounded-full inter font-semibold text-[13px] md:text-[16px]">Explore Products</button>

                        <button className="bg-gradient-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent btn rounded-full inter font-semibold text-[13px] md:text-[16px] border-[#9514FA]">
                            <img src={PlayImg} alt="" />
                            Watch Demo</button>
                    </div>
                </div>

                <div className="right">
                    <img src={BannerImg} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Banner;