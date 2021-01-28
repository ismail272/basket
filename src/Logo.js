import React from 'react';
import intocode from './Intocode.svg'

function Logo(props) {
    return (
        <div className="logo">
            <img src={intocode} className="logo" />
        </div>
    );
}

export default Logo;