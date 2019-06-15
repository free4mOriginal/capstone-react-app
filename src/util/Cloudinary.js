import React from "react";
import cloudinary from 'cloudinary-core';
import Form from '../Form/Form';

// import { AxiosProvider, Request, Get, Delete, Head, Post, Put, Patch, withAxios } from 'react-axios';

class UploadButton extends React.Component {
    render() {
        return <button id="upload">Upload</button>
    }
}

export class Upload extends React.Component {
    constructor(props) {
        super(props);
        this.state = { showForm: false }
    }

    handleClick = ev => {
        this.setState({ showForm: !this.state.showForm })
    }

    processFile = async e => {
        let file = e.target.files[0];
        let myForm = document.querySelector('#mainForm');
        let formData = new FormData(myForm);
        let formValues = [];

        for (let value of formData.values()) {
            formValues.push(value);
        };

        let tagID = formValues[0];

        formData.append('file', file);
        formData.append('cloud_name', 'free4m');
        formData.append("upload_preset", "free4m");
        formData.append("tags", tagID);

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
    }

    render() {
        return (
            <div>
                {this.state.showForm ? <span>Graph View!</span> : <UploadButton />}
                <button onClick={this.handleClick}>Switch me !</button>
            </div>
        )
    }
};

export const Cloudinary = {
    imageLoading(stateName) {
        return fetch(`https://res.cloudinary.com/free4m/image/list/${stateName}.json`).then(resp => resp.json().then(jsonResp => {
            if (jsonResp.resources) {
                return jsonResp.resources.map(item => ({
                    tag: `${stateName}`,
                    public_id: item.public_id,
                    description: item.context.custom.caption,
                    version: item.version,
                }));
            } else {
                return [];
            }
        }));
    }
};

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
