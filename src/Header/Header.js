import React from 'react';
import './Header.css';
import { Upload } from '../util/Cloudinary';

class Header extends React.Component {

    render() {
        return (
            <header id="top">
                <Upload />
                <img src={require('../images/logo-white.png')} width="250" alt="Karina Liner" />
            </header>
        );
    }
}

export default Header;