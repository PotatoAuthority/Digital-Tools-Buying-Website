import { Check } from 'lucide-react';
import React from 'react';

const PricingCard = ({priceInfo}) => {
    return (
        <div className='border flex flex-col justify-between p-6 rounded-2xl shadow-sm'>
            <div className='flex flex-col text-left'>
                <h1 className='text-2xl font-bold'>{priceInfo.name}</h1>
                <p className='text-[16px] leading-5 text-[#627382]'>{priceInfo.description}</p>
                <p className='text-4xl font-bold'>${priceInfo.price}<span className='text-[20px] font-normal text-[#627382]'>/{priceInfo.billing}</span></p>
                {
                    priceInfo.features.map(feature => 
                    <div className='flex'>
                        <Check color="#30B868"></Check>
                        <p className='text-[16px] font-medium leading-5 text-[#627382]'>{feature}</p>
                    </div>)
                }
            </div>
            <button className='btn btn-primary'>{priceInfo.cta}</button>
        </div>
    );
};

export default PricingCard;