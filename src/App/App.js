import React, { Component } from 'react';
import './App.css';
import Feed from '../Feed/Feed';
import images from '../util/FeedStaticObj';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: images,
    }
  }

  render() {
    return (
      <div className="App" id="backgroundContainer">

        <header>
          <img src={require('../assets/images/logo-white.png')} width="250" alt="Karina Liner" />
        </header>

        <aside>
          <div id="aboutDiv">
            <img src={require('../assets/images/profile-photo.png')} alt="profile" />
            <h2>About Me</h2>
            <div id="aboutBox">
              <p>I received my formal training from the Erevan Art Academy, Armenia in Fine Art and Ceramics and worked and exhibited in the US, Europe and the Middle East. My work is a unique blend of organic design and sculptural jewelry, using both precious and semi-precious stones hand-picked for quality clarity and uniqueness.</p>

              <div id="filter">
                <button type="Handmade">Handmade Collection</button>
                <button type="Traditional">Traditional Custom Jewelry</button>
                <button type="ZBrush">ZBrush Modeling</button>
              </div>
              <p></p>
            </div>

            <div id="contactBox">
              <ul>
                <li><h3>Contact</h3></li>
                <li>5 1 0 . 3 3 3 . 5 4 4 0</li>
                <li>KarinaLiner @ gmail</li>
                <li id="social"><p><a href="https://www.linkedin.com/in/karina-liner-5530a03a/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a> . <a href="https://www.instagram.com/karinaliner/" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a> . <a href="https://www.instagram.com/karinaliner/" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook"></i></a></p>
                </li>
              </ul>
            </div>
          </div>
        </aside>

        <main>
          <Feed img={this.state.images} />
        </main>

      </div>
    );
  }
};

export default App;