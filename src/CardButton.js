import React from 'react';

function CardButton(props) {
    return (
        <div className="card-button">
           <button className="btn" onClick={() =>  props.setBought(props.id)} disabled={props.bought}>
               {props.bought ? "Добавлено в корзину" : "Добавить в корзину"}
           </button>
        </div>
    );
}


export default CardButton;