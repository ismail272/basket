import React from 'react';
import Card from './Card';


function Content(props) {

    const newDatabase = props.products.map((item) => {
        return <Card products={item} setBought={props.setBought} id={props.products.id}/>;
    });

    return (
        <div className="content">
            {newDatabase}
        </div>
    )

}




export default Content;