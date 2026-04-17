import React, { useState } from 'react';

const MainSection = () => {
    const [toggle, setToggle] = useState('products');

    return (
        <div className='w-[90%] md:w-70% md:max-w-[1200px] mx-auto my-15 md:my-30'>
            
            <div className='text-center w-[90%] lg:w-[50%] mx-auto'>
                <h1 className='text-[#101727] text-5xl font-extrabold mb-4'>Premium Digital Tools</h1>
                <div>
                    <p className='text-[16px] leading-5 text-[#627382] mb-4'>Choose from our curated collection of premium digital products designed to boost your productivity and creativity.</p>
                </div>
            </div>
            <div className='flex justify-center mb-10'>
                <button onClick={() => setToggle('products')} 
                    className={`${toggle==="products"? 'btn-primary' : 'btn-outline'} btn  btn-primary rounded-r-none rounded-l-full`}>
                Products</button>
                <button onClick={() => setToggle('cart')} 
                    className={`${toggle==="cart"? 'btn-primary' : 'btn-outline'} btn  btn-primary rounded-l-none rounded-r-full`}>
                Cart (0)</button>
            </div>

            <div className="products">

            </div>
            <p>cards</p>
        </div>
    );
};

export default MainSection;