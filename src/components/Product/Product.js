import React from 'react';
import { addToDb, removeFromDb } from '../../utilities/storage';

const Product = (props) => {
    const {id,name,image,price} = props.product;

    const addToCart = (id) => {
        addToDb(id);
    }

    const removeFromCart = (id) => {
        removeFromDb(id);
    }

    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={image} alt="Shoes" className='w-full h-80' /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>Price : ${price}</p>
                <div className="card-actions justify-end">
                <button onClick={() => addToCart(id)} className="btn btn-primary">Add to Cart</button>
                <button onClick={() => removeFromCart(id)} className="btn btn-primary">Remove</button>
                </div>          
            </div>
            </div>
        </div>
    );
};

export default Product;