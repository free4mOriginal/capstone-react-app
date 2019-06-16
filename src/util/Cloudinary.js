import React from "react";
import cloudinary from 'cloudinary-core';
import Form from '../Form/Form';
import Logo from '../Logo/Logo';

// import { AxiosProvider, Request, Get, Delete, Head, Post, Put, Patch, withAxios } from 'react-axios';

export class Upload extends React.Component {
    constructor(props) {
        super(props);
        this.state = { showForm: false };
        this.handleClick = this.handleClick.bind(this);
        this.toggle = this.toggle.bind(this);
    }

    // Toggles the form visibility variable on and off;
    toggle() {
        this.setState({ showForm: !this.state.showForm });
    }

    // Turns on toggling after click;
    handleClick = (e) => {
        this.toggle();
    }

    // Main upload form functionality; API POST;
    processFile = async e => {
        let file = e.target.files[0];
        let myForm = document.querySelector('#mainForm');
        let formData = new FormData(myForm);
        let formValues = [];

        for (let value of formData.values()) {
            formValues.push(value);
        };

        const tagID = formValues[0];
        const description = formValues[1];

        formData.append('file', file);
        formData.append("cloud_name", "free4m");
        formData.append("upload_preset", "free4m");
        formData.append("tags", [tagID, 'all']);
        formData.append("context", `caption=${description}`);

        let res = await fetch(
            "https://api.cloudinary.com/v1_1/free4m/auto/upload",
            {
                method: "post",
                mode: "cors",
                body: formData
            }
        );

        let json = await res.json();
        console.log(JSON.stringify(json.secure_url));

        // after form submition toggles form OFF and repopulates main Feed with new items;
        this.toggle();
        this.props.populateState('all');
    }

    // Renders <Form /> or <Logo /> depending on showForm variable trutiness;
    render() {
        return (
            <div>
                {this.state.showForm ? <Form processFile={this.processFile} /> : <Logo /> }
                <button id="upload" onClick={this.handleClick}>New</button>
            </div>
        )
    }
};

// Main Cloudinary GET request, returns a populated array of items from the Cloudinary server;
export const Cloudinary = {
    imageLoading(stateName) {
        return fetch(`https://res.cloudinary.com/free4m/image/list/${stateName}.json`).then(resp => resp.json().then(jsonResp => {
            if (jsonResp.resources) {
                return jsonResp.resources.map(item => {
                    if (item.context) {
                        return {
                            tag: `${stateName}`,
                            public_id: item.public_id,
                            description: item.context.custom.caption,
                            version: item.version,
                        }
                    } else {
                        return {
                            tag: `${stateName}`,
                            public_id: item.public_id,
                            description: 'N/A',
                            version: item.version,
                        }
                    }
                });
            } else {
                return [];
            }
        }));
    }
};

// Sample image Component
const cloudinaryCore = new cloudinary.Cloudinary({ cloud_name: 'free4m' });

export class SampleImg extends React.Component {
    render() {
        return (
            <img src={cloudinaryCore.url('biruza-big_ljgv9v')} alt="test" width="100px" />
        )
    }
}


// Post a request for a user with a given ID
/*
render() {
    return (
      <div>
        <Get url="/api/user" params={{id: "12345"}}>
          {(error, response, isLoading, makeRequest, axios) => {
            if(error) {
              return (<div>Something bad happened: {error.message} <button onClick={() => makeRequest({ params: { reload: true } })}>Retry</button></div>)
            }
            else if(isLoading) {
              return (<div>Loading...</div>)
            }
            else if(response !== null) {
              return (<div>{response.data.message} <button onClick={() => makeRequest({ params: { refresh: true } })}>Refresh</button></div>)
            }
            return (<div>Default message before request is made.</div>)
          }}
        </Get>
      </div>
    )
  } */
