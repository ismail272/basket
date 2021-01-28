import React from 'react';
import CardButton from './CardButton';


function Card(props) {
    return (
        <div className="card">
            <div className="card-image">
                <img src={props.products.image} alt="img"/>
            </div>
            <div className="card-info">
                <div className="card-name">{props.products.name}</div>
                <div className="card-rating">{props.products.rating}</div>
                <div className="card-price">{props.products.price} ₽</div>
                <CardButton  setBought={props.setBought} id={props.products.id} bought={props.products.bought}/>
            </div>
        </div>
    );
}

export default Card;