import React from 'react';
import '../../styles/components/layout/Header.css';

const Header = (props) => {
    return (
        <header>
            <div className="header">
                <h1><a>Fernando Blanco</a></h1>
                <h2>Cantante, músico, compositor y escritor argentino</h2>
            </div>
        </header>
    );
}

export default Header;