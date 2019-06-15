import React from 'react';
import './Header.css';

class Header extends React.Component {

    render() {
        return (
            <header id="top">
                <img src={require('../images/logo-white.png')} width="250" alt="Karina Liner" />
            </header>
        );
    }
}

export default Header;