
import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Cart from '../Cart/Cart';
import TShirt from '../TShirt/TShirt';
import './Home.css'

const Home = () => {
    const tshirts = useLoaderData();

    const [cart, setCart] = useState([]);


    const handleAddtoCart = tshirt => {
        const exist = cart.find(ts => ts._id === tshirt._id);
        if (exist) {
            alert('T-shirt already added')
        }
        else {
            const newCart = [...cart, tshirt];
            setCart(newCart)
        }

    };

    const handleRemoveCart = (tshirt) => {
        const remaining = cart.filter(ts => ts._id !== tshirt._id);
        setCart(remaining);
    };

    return (
        <div className='home-container'>
            <div className='tshirt-container'>
                {
                    tshirts.map(tshirt => <TShirt
                        key={tshirt._id}
                        tshirt={tshirt}
                        handleAddtoCart={handleAddtoCart}

                    />)
                }
            </div>
            <div className='cart-container'>
                <Cart cart={cart}
                    handleRemoveCart={handleRemoveCart} />
            </div>
        </div>
    );
};

export default Home;