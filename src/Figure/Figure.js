import React from 'react';
import './Figure.css';

class Figure extends React.Component {
    render() {
        return (
            <figure>
                <img src={this.props.src} alt={this.props.alt} />
                <figcaption>{this.props.description}</figcaption>
            </figure>
        );
    }
};

export default Figure;