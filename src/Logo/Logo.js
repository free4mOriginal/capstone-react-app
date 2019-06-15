import React from 'react';
import './Logo.css';

class Logo extends React.Component {
    render() {
        return (
            <img src={require('../images/logo-white.png')} width="250" alt="Karina Liner" />
        );
    }
}

export default Logo;