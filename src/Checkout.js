import React from 'react';
import Basket from './Basket.svg'

function Checkout(props) {

    const newBought = props.products.filter(item => {
        return item.bought;
    });

    return (
        <div className="checkout">
            <a href="#/checkout">
                <img src={Basket} alt="checkout"/>
                <span className="counter">
                    {newBought.length}
        </span>
            </a>
        </div>
    );
}

export default Checkout;