import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Product from '../Product/Product';

const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect( () => {
        fetch('data.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, [])

    return (
        <div className='container mx-auto'>
            <h1 className='text-center text-2xl font-bold my-6'>Total Porducts: {products.length}</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-4'>
                {
                    products.map(product => <Product product={product} key={product.id} />)
                }
            </div>
        </div>
    );
};

export default Products;