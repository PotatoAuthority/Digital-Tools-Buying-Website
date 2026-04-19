
import { Check } from 'lucide-react';
import React from 'react';
import ProductCard from './ProductCard';
import { toast } from 'react-toastify';

const Products = ({productInfo, setSelectedProducts, selectedProducts}) => {

    const handleBuy =(productInfo) =>{

        const exists = selectedProducts.some(item => item.id === productInfo.id);

        if (exists) {
            toast.error(productInfo.name + " already in cart");
            return;
        }
        setSelectedProducts([...selectedProducts, productInfo]);
        toast.success(productInfo.name+" added to cart");
    }
    // console.log("cart", selectedProducts)
    return (
        <ProductCard productInfo={productInfo} handleBuy={handleBuy}></ProductCard>
    );
};

export default Products;