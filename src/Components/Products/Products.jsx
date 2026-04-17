import React from 'react';

const Products = ({productInfo}) => {
    return (
        <div className='rounded-2xl border shadow-sm p-6'>
            <h2>{productInfo.name}</h2>
            <p>{productInfo.description}</p>
            <p>${productInfo.price}<span>/Mo</span></p>

            <div>
                {
                    productInfo.features.map(feature => 
                        <p>{feature}</p>
                    )
                }
            </div>
        </div>
    );
};

export default Products;