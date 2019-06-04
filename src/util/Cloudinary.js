import React from "react";
import ReactDOM from "react-dom";

import { image } from 'cloudinary-react';

import "./styles.css";

class Upload extends React.Component {
  processFile = async e => {
    var file = e.target.files[0];
    var formdata = new FormData();

    formdata.append("file", file);
    formdata.append("cloud_name", "shirly");
    formdata.append("upload_preset", "my-preset");

    let res = await fetch(
      "https://api.cloudinary.com/v1_1/shirly/auto/upload",
      {
        method: "post",
        mode: "cors",
        body: formdata
      }
    );

    let json = await res.json();
    console.log(JSON.stringify(json.secure_url));
  };

  render() {
    return (
      <div>
        <h3>Upload</h3>
        <input type="file" onChange={this.processFile} />
      </div>
    );
  }
}
ReactDOM.render(<Upload />, document.getElementById("container"));
