import React from "react";
// import { AxiosProvider, Request, Get, Delete, Head, Post, Put, Patch, withAxios } from 'react-axios';

export default class Upload extends React.Component {
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
    };

    render() {
        return (
            <div>
                <form name="mainForm" id="mainForm">
                    <select name="jewelryType" id="jewelryType">
                        <option value="handmade">Handmade</option>
                        <option value="traditional">Traditional</option>
                        <option value="zbrush">ZBrush</option>
                    </select>
                    <input type="file" onChange={this.processFile} />
                </form>
            </div>
        );
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
