import React from 'react';
import './Cart.css'


const Cart = ({ cart, handleRemoveCart }) => {
    let message;

    if (cart.length === 0) {
        message = <p className='s'><strong>
            Please Buy at least one item!!!
        </strong></p>
    }
    return (
        <div>
            <h3>Orders Summary {cart.length}</h3>
            {
                cart.map(tshirt => <p
                    key={tshirt._id}
                > <b>Name:</b> {tshirt.name}
                    <button onClick={() => handleRemoveCart(tshirt)}>X</button>
                </p>
                )
            }
            {
                message
            }
        </div>

    );
};

export default Cart;