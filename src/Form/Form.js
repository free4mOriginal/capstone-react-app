import React from 'react';
import './Form.css';

class Form extends React.Component {

    render() {
        return (
            <form name="mainForm" id="mainForm">
                <select name="jewelryType" id="jewelryType">
                    <option value="handmade">Handmade</option>
                    <option value="traditional">Traditional</option>
                    <option value="zbrush">ZBrush</option>
                </select>
                <input type="file" onChange={this.processFile} />
            </form>
        );
    }
}

export default Form;