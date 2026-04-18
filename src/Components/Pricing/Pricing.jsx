import React, { Suspense } from 'react';
import PricingCardContainer from './PricingCardContainer';

const fetchPrice = async() =>{
    const res = await fetch('cardsPricingData.json');
    return res.json();
}

const Pricing = () => {

    const pricingPromise = fetchPrice();
    console.log(pricingPromise);
    return (
        <div className='w-[90%] md:w-70% md:max-w-[1200px] mx-auto py-20 md:py-30'>
            <div className='text-center w-[90%] lg:w-[70%] mx-auto mb-10'>
                    <h1 className='text-[#101727] text-4xl md:text-5xl font-extrabold mb-4'>Simple, Transparent Pricing</h1>
                    <div>
                        <p className='text-[16px] leading-5 text-[#627382] mb-4'>Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
                    </div>

            </div>
                    <Suspense fallback={
                        <div className="flex justify-center items-center min-h-screen">
                            <span className="loading loading-bars loading-lg"></span>
                        </div>
                    }>
                        
                        <PricingCardContainer pricingPromise={pricingPromise}></PricingCardContainer>

                    </Suspense>
        </div>
    );
};

export default Pricing;