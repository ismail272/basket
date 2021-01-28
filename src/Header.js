import React from 'react';
import Logo from './Logo';
import Menu from './Menu';
import Checkout from './Checkout';


function Header(props, {database}) {
    return (
        <div className="header">
            <Logo />
            <Menu />
            <Checkout database={database} />
            <a href="#" className="logout">
                выход
            </a>
        </div>
    );
}

export default Header;