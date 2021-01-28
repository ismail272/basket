import React from 'react';
import CardButton from './CardButton';


function Card(props) {
    return (
        <div className="card">
            <div className="card-image">
                <img src={props.product.image} alt="img"/>
            </div>
            <div className="card-info">
                <div className="card-name">{props.product.name}</div>
                <div className="card-rating">{props.product.rating}</div>
                <div className="card-price">{props.product.price} ₽</div>
                <CardButton setBought={props.setBought}  />
            </div>
        </div>
    );
}

export default Card;