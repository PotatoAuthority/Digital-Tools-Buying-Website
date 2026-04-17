import React, { use, useState } from 'react';
import Products from '../Products/Products';
import Cart from '../Cart/Cart'

const MainSection = ({productsPromise, setSelectedProducts, selectedProducts}) => {
    const productsData = use(productsPromise);
    console.log(productsData);

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
                Cart ({selectedProducts.length})</button>
            </div>

            {
                toggle==="products"?
                <div className="products grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7.5">
                    {productsData.map(productInfo => 
                    <Products productInfo={productInfo} selectedProducts={selectedProducts} setSelectedProducts={setSelectedProducts}
                        
                    ></Products>)}
                    {/* <Products></Products> */}
                </div>
                :
                <Cart selectedProducts={selectedProducts}></Cart>
            }
            
            
        </div>
    );
};

export default MainSection;