import React from 'react';

const Stats = () => {
    return (
        <div className='bg-gradient-to-r from-[#4F39F6] to-[#9514FA] md:h-[247px] flex items-center w-full mt-14 md:mt-0'>
            <div className='w-[90%] md:w-70% md:max-w-[1200px] mx-auto p-15 md:p-0'>
                <div className='flex justify-around items-center text-center flex-col md:flex-row gap-8'>
                    <div>
                        <h1 className='text-white font-extrabold text-6xl mb-3'>50K+</h1>
                        <p className='text-[#ffffffcc] font-medium text-2xl'>Active Users</p>
                    </div>
                    <div className='border-t-2 md:border-t-0 md:border-l-2 border-b-2 md:border-b-0 md:border-r-2 border-[#ffffff50] md:px-[123px] py-10 md:py-0'>
                        <h1 className='text-white font-extrabold text-6xl mb-3'>200+</h1>
                        <p className='text-[#ffffffcc] font-medium text-2xl'>Premium Tools</p>
                    </div>
                    <div>
                        <h1 className='text-white font-extrabold text-6xl mb-3'>4.9</h1>
                        <p className='text-[#ffffffcc] font-medium text-2xl'>Rating</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Stats;