import React, { Component } from 'react';
import './App.css';
import Feed from '../Feed/Feed';
import imagesALL from '../util/FeedStaticObj';

const initialState = [...imagesALL.Handmade, ...imagesALL.Traditional, ...imagesALL.ZBrush];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: initialState,
    }
  }

  // Filtering method that sets the current state of images to only the selected category
  // sent from the onClick method in the buttons;
  filterFnx(toFilter) {
    this.setState({ images: [...toFilter] })
  }

  // Main render method that takes in rendered elements from Feed.js:
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
            </div>

            <div id="contactBox">
              <ul>
                <li>5 1 0 . 3 3 3 . 5 4 4 0</li>
                <li>KarinaLiner @ gmail</li>
                <li id="social">
                  <a href="https://www.linkedin.com/in/karina-liner-5530a03a/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a> . <a href="https://www.instagram.com/karinaliner/" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a> . <a href="https://www.instagram.com/karinaliner/" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook"></i></a>
                </li>
              </ul>
            </div>

            <div id="filter">
              <button type="Handmade" onClick={() => this.filterFnx(imagesALL.Handmade)}>Contemporary Collection</button>
              <button type="Traditional" onClick={() => this.filterFnx(imagesALL.Traditional)}> Custom Jewelry</button>
              <button type="ZBrush" onClick={() => this.filterFnx(imagesALL.ZBrush)}>ZBrush 3D Modeling</button>
              <button type="All" onClick={() => this.setState({ images: initialState })}>ALL</button>
            </div>
          </div>
        </aside>

        <main>
          <Feed img={this.state.images} />
          <p id="copyright">&copy; 2019 Karina Liner | Zhana Liner, Web Development</p>
        </main>
      </div>
    );
  }
};

export default App;