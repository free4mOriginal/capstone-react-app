import React from "react";

export default class Upload extends React.Component {
    processFile = async e => {
        let file = e.target.files[0];
        let formData = new FormData();

        formData.append('file', file);
        formData.append('cloud_name', 'free4m');
        formData.append("upload_preset", "karina");

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
            <div id="upload">
                <p>Upload</p>
                <input type="file" onChange={this.processFile} />
            </div>
        );
    }
}

