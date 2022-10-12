import React from 'react';
import './TShirt.css'

const TShirt = ({ tshirt, handleAddtoCart }) => {

    const { picture, name, price } = tshirt;

    return (
        <div className='t-shirt'>
            <img src={picture} alt="" />
            <h2>Name: {name}</h2>
            <h3>Price: ${price}</h3>
            <button onClick={() => handleAddtoCart(tshirt)}>Buy Now</button>
        </div >
    );
};

export default TShirt;