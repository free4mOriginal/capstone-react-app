import React from 'react';
import './Buttons.css';

class Buttons extends React.Component {

    // Render method calls populateState from it's props with a category name;
    render() {
        return (
            <div id="filter">
                <button id="handmade" onClick={() => this.props.populateState('handmade')}>Handmade</button>
                <button id="traditional" onClick={() => this.props.populateState('traditional')}>Traditional</button>
                <button id="zbrush" onClick={() => this.props.populateState('zbrush')}>Sculpted</button>
                <button id="all" onClick={() => this.props.populateState('all')}>Show All</button>
            </div>
        );
    }
}

export default Buttons;