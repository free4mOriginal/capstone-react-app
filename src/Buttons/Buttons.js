import React from 'react';
import './Buttons.css';

class Buttons extends React.Component {

    render() {
        return (
            <div id="filter">
                <button id="handmade" onClick={() => this.props.populateState('handmade')}>Contemporary Collection</button>
                <button id="traditional" onClick={() => this.props.populateState('traditional')}> Custom Jewelry Design</button>
                <button id="zbrush" onClick={() => this.props.populateState('zbrush')}>3D Sculpted Jewelry</button>
                <button id="all" onClick={() => this.props.populateState('all')}>ALL</button>
            </div>
        );
    }
}

export default Buttons;