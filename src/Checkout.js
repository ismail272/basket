import React from 'react';
import Basket from './Basket.svg'

function Checkout(props,{database}) {

    return (
        <div className="checkout">
            <a href="#/checkout">
                <img src={Basket} alt="checkout"/>
                <span className="counter">
          0
        </span>
            </a>
        </div>
    );
}

export default Checkout;