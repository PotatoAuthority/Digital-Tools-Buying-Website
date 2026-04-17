
import { Check } from 'lucide-react';
import React from 'react';
import ProductCard from './ProductCard';

const Products = ({productInfo, setSelectedProducts, selectedProducts}) => {

    const handleBuy =(productInfo) =>{
        setSelectedProducts([...selectedProducts, productInfo]);
    }
    console.log("cart", selectedProducts)
    return (
        <ProductCard productInfo={productInfo} handleBuy={handleBuy}></ProductCard>
    );
};

export default Products;