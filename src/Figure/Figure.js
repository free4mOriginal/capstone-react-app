import React from 'react';
import './Figure.css';

class Figure extends React.Component {
    render() {
        return (
            <figure className={this.props.category}>
                <img src={this.props.src} alt={this.props.alt} id={this.props.name} />
                <figcaption>{this.props.description}</figcaption>
            </figure>
        );
    }
};

export default Figure;