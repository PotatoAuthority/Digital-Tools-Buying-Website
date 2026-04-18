import React, { use } from 'react';
import PricingCard from './PricingCard';

const PricingCardContainer = ({pricingPromise}) => {
    const pricingData = use(pricingPromise)
    console.log(pricingData);
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-7.5'>
            {
                pricingData.map(priceInfo => <PricingCard key={priceInfo.id} priceInfo={priceInfo}></PricingCard>)
            }
            
        </div>
    );
};

export default PricingCardContainer;