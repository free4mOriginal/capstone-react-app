import React from 'react';
import './Form.css';

class Form extends React.Component {

    // Renders main upload form elements;
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
                {/* <span><button type="reset">Reset</button>
                <button type="submit" onSubmit={this.props.processFile}>Submit</button></span> */}
            </form >
        );
    }
}

export default Form;
