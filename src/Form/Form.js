import React from 'react';
import './Form.css';

class Form extends React.Component {

    render() {
        return (
            <form name="mainForm" id="mainForm">
                <span><select name="jewelryType" id="jewelryType">
                    <option value="handmade" defaultChecked>Handmade</option>
                    <option value="traditional">Traditional</option>
                    <option value="zbrush">ZBrush</option>
                </select>|  Category</span>
                <p>
                    <input type="text" id="caption" name="caption" required />
                    |  Description
                </p>
                <input type="file" onChange={this.props.processFile} />
            </form >
        );
    }
}

export default Form;
