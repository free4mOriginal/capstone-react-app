import React from 'react';
import './Profile.css';

// Renders the Profile section;
class Profile extends React.Component {
    render() {
        return (
            <div>
                <img src={require('../images/profile-photo.png')} alt="profile" />
                <h2>About Me</h2>
                <div id="aboutBox">
                    <p>I received my formal training from the Erevan Art Academy, Armenia in Fine Art and Ceramics and worked and exhibited in the US, Europe and the Middle East. My work is a unique blend of organic design and sculptural jewelry, using both precious and semi-precious stones hand-picked for quality clarity and uniqueness.</p>
                </div>
            </div>
        );
    }
}

export default Profile;