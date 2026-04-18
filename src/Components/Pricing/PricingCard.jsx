import { Check } from 'lucide-react';
import React from 'react';

const PricingCard = ({priceInfo}) => {
    return (
        <div className='border flex flex-col justify-between p-6 rounded-2xl shadow-sm gap-6 bg-[#F9FAFC] border-[#F2F2F2] border-2 relative'>
            {
                priceInfo.popular===true?
                    <div className='bg-[#FEF3C6] absolute -top-4 left-1/2 -translate-x-1/2 rounded-full px-3 py-1.5'>
                        <p className='text-[#BB4D00] font-medium text[14px]'>{priceInfo.badge}</p>
                    </div>
                    :
                    ''
                
            }
            
            <div className='flex flex-col text-left'>
                <h1 className='text-2xl font-bold mb-2'>{priceInfo.name}</h1>
                <p className='text-[16px] leading-5 text-[#627382] mb-6'>{priceInfo.description}</p>
                <p className='text-4xl font-bold mb-6'>${priceInfo.price}<span className='text-[20px] font-normal text-[#627382]'>/{priceInfo.billing}</span></p>
                {
                    priceInfo.features.map(feature => 
                    <div className='flex gap-1'>
                        <Check color="#30B868"></Check>
                        <p className='text-[16px] font-medium leading-5 text-[#627382]'>{feature}</p>
                    </div>)
                }
            </div>
            <button className="text-white w-full btn bg-gradient-to-r from-[#4F39F6] to-[#9514FA] rounded-full inter font-semibold text-[16px] h-13">{priceInfo.cta}</button>
        </div>
    );
};

export default PricingCard;