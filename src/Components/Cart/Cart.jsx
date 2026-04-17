import React from 'react';
import ProductCard from '../Products/ProductCard';
import CartCard from './CartCard';
import { toast } from 'react-toastify';

const cart = ({selectedProducts, setSelectedProducts}) => {

    const handlePayment = () =>{
        setSelectedProducts([]);
        toast.success('Purchase Successful!');
        // console.log(selectedProducts);
    } 
    const totalCost = () =>{
        let sum = 0;
        for (const prod of selectedProducts){
            sum+=prod.price;
        }
        return sum;
    }
    return (
        <div className='rounded-2xl shadow-sm border-2 border-[#F2F2F2]'>
            <div className='p-10'>
                <h2 className='font-bold text-2xl text-[#101727] mb-6'>Your Cart</h2>

                {
                    selectedProducts.length === 0? 
                    <p>Please add Products</p>
                    :
                    <div>
                        <div className='flex flex-col gap-4 '>
                            {
                                selectedProducts.map(selectedProd => <CartCard selectedProd={selectedProd} setSelectedProducts={setSelectedProducts} selectedProducts={selectedProducts}></CartCard>)
                            }
                        </div>

                        <div className='flex justify-between items-center mt-6 mb-6'>
                            <p className='text-[16px] text-[#627382]'>Total:</p>
                            <p className='font-bold text-2xl text-[#101727]'>${totalCost()}</p>
                        </div>
                        <button onClick={handlePayment} className="text-white w-full btn bg-gradient-to-r from-[#4F39F6] to-[#9514FA] rounded-full inter font-semibold text-[16px] h-13">Proceed to Checkout</button>
                    </div>
                }
               
            </div>
        </div>
    );
};

export default cart;