import React from 'react';
import Card from './Card';


function Content(props) {

    const newDatabase = props.products.map((item) => {
        return <Card products={item} setBought={props.setBought}/>;
    });

    return (
        <div>
            {newDatabase}
        </div>
    )

}




export default Content;