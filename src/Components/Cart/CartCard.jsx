import React from 'react';
import { Check, Trash } from 'lucide-react';
import { toast } from 'react-toastify';
const CartCard = ({selectedProd, selectedProducts, setSelectedProducts}) => {

    const handleRemove = (selectedProd) =>{
        // console.log(selectedProd.name);
        const filteredProducts = selectedProducts.filter( prod => prod.id !== selectedProd.id);
        setSelectedProducts([...filteredProducts]);
        toast.info(selectedProd.name+" has been removed");
        // console.log("filtered", selectedProducts);
        // console.log("filtered2", filteredProducts);

    }
    return (
        <div>
            <div>
                <div className='rounded-2xl border-2 border-[#f2f2f290] shadow-sm p-2 sm:p-5 flex flex-row items-center justify-between bg-base-200'>
                    <div className='flex gap-2 sm:gap-4 items-center'>
                        <div className='rounded-full border border-[#f2f2f290] border-2 w-[40px] sm:w-[60px] h-[40px] sm:h-[60px] p-1 flex items-center justify-center bg-white'>
                            <img className='h-[23px] sm:h-[32px] w-[23px] sm:w-[32px]' src={selectedProd.icon} alt={selectedProd.name} />
                        </div>

                        <div>
                            <h2 className='font-semibold text-[16px] sm:text-[20px] text-[#001931]'>{selectedProd.name}</h2>
                            <p className='font-medium text-[13px] sm:text-[16px] text-[#627382]'>${selectedProd.price}</p>
                        </div>
                    </div>
                    <button onClick={() => handleRemove(selectedProd)} className="btn btn-soft btn-error hidden sm:flex">Remove</button>
                    <button onClick={() => handleRemove(selectedProd)} className="btn btn-soft btn-error flex sm:hidden"><Trash /></button>
                </div>
            </div>
        </div>
    );
};

export default CartCard;