import React, { Component } from 'react';
import './App.css';
import Feed from '../Feed/Feed';

import logo from '../assets/images/logo-white.png';
import profile from '../assets/images/profile-photo.png';

// import biruza from '../assets/images/handmade/biruza-big.png';
// import dot from '../assets/images/handmade/dot-neckalce-small.png';
// import garnet from '../assets/images/handmade/garnet-necklace-small.png';
// import gosha from '../assets/images/zbrush/gosha.jpg';
// import one from '../assets/images/traditional/fingerprint-ring.jpg';
// import two from '../assets/images/traditional/1122.jpg';
// import three from '../assets/images/traditional/1133.jpg';
// import pearl from '../assets/images/handmade/pearl-upright.png';
// import square from '../assets/images/handmade/square-tourmaline-small.png';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [
        {
          name: 'biruza',
          src: 'https://picsum.photos/200/300/',
          description: 'Biruza ring, sterling silver, tourquoise',
        },
        {
          name: 'biruza',
          src: 'https://picsum.photos/200/300/',
          description: 'Biruza ring, sterling silver, tourquoise',
        },
        {
          name: 'biruza',
          src: 'https://picsum.photos/200/300/',
          description: 'Biruza ring, sterling silver, tourquoise',
        },
      ],
    }
  }

  render() {
    return (
      <div className="App" id="backgroundContainer">

        <header>
          <img src={logo} width="250" alt="Karina Liner" />
        </header>

        <aside>
          <div id="aboutDiv">
            <img src={profile} alt="profile" />
            <h2>About Me</h2>
            <div id="aboutBox">
              <p>I received my formal training from the Erevan Art Academy, Armenia in Fine Art and Ceramics and worked and exhibited in the US, Europe and the Middle East. My work is a unique blend of organic design and sculptural jewelry, using both precious and semi-precious stones hand-picked for quality clarity and uniqueness.</p>
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

            <div id="filter">
              <p>FILTER FEED BY:</p>
              <select name="filtering" id="filtering">
                <option value="Handmade">Handmade</option>
                <option value="Traditional">Traditional</option>
                <option value="Sculpted">Sculpted</option>
              </select>
            </div>
          </div>
        </aside>

        <main>
            <Feed
              img={this.state.images}
            />
        </main>

      </div>
    );
  }
};

export default App;