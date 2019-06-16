import React from 'react';
import './Contact.css';

class Contact extends React.Component {

    //Renders the Contact Me box elements;
    render() {
        return (
            <div id="contactBox">
                <ul>
                    <li>5 1 0 . 3 3 3 . 5 4 4 0</li>
                    <li>KarinaLiner @ gmail</li>
                    <li id="social">
                        <a href="https://www.linkedin.com/in/karina-liner-5530a03a/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a> . <a href="https://www.instagram.com/karinaliner/" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a> . <a href="https://www.facebook.com/linerart/" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook"></i></a>
                    </li>
                </ul>
            </div>
        );
    }
}

export default Contact;