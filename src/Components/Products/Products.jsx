
import { Check } from 'lucide-react';
import React from 'react';

const Products = ({productInfo}) => {
    return (
        <div className='rounded-2xl border-2 border-[#f2f2f290] shadow-sm p-6 flex flex-col gap-4 relative'>
            <div className='rounded-full border border-[#f2f2f290] border-2 w-[60px] h-[60px] p-1 flex items-center justify-center'>
                <img className='h-[32px] w-[32px]' src={productInfo.icon} alt={productInfo.name} />
            </div>
            <div className={`
                ${productInfo.tagType==='hot'? 'badge-error' : ''}
                ${productInfo.tagType==='popular'? 'badge-primary' : ''}
                ${productInfo.tagType==='best'? 'badge-success' : ''}
                ${productInfo.tagType==='new'? 'badge-info' : ''}
                ${productInfo.tagType==='deal'? 'badge-accent' : ''}
                ${productInfo.tagType==='special'? 'badge-warning' : ''}
                badge badge-soft badge-accent absolute top-2.5 right-2.5 font-bold`}>
            
            
            {productInfo.tag}</div>


            <h2 className='font-bold text-2xl text-[#001931]'>{productInfo.name}</h2>
            <p className='text-[16px] text-[#627382] leading-5'>{productInfo.description}</p>
            <p className='font-bold text-2xl text-[#001931]'>${productInfo.price}<span className='text-[16px] text-[#627382] leading-5 font-normal'>/{productInfo.period}</span></p>

            <div>
                {
                    productInfo.features.map(feature => 
                        <div className='flex'>
                            <Check color="#30B868" /><p className='text-[16px] text-[#627382] leading-5 font-medium'>{feature}</p>
                        </div>
                    )
                }
            </div>

            <button className="text-white w-full btn bg-gradient-to-r from-[#4F39F6] to-[#9514FA] rounded-full inter font-semibold text-[16px] h-13">Buy Now</button>
        </div>
    );
};

export default Products;