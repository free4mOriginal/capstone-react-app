import React from 'react';
import './Figure.css';

// Render individual <figure> items for the main feed:
class Figure extends React.Component {
    render() {
        return (
            <figure className={this.props.category}>
                <img src={this.props.src} alt={this.props.alt} id={this.props.alt} />
                <figcaption>{this.props.description}</figcaption>
            </figure>
        );
    }
};

export default Figure;