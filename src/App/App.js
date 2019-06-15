import React, { Component } from 'react';
import './App.css';
import Feed from '../Feed/Feed';
import Buttons from '../Buttons/Buttons';
import { Upload, Cloudinary } from '../util/Cloudinary';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      assets: []
    };
    this.populateState = this.populateState.bind(this);
  }

  sort(array) {
    return array.sort(() => Math.random() - 0.5);
  }

  populateState(stateName) {
    Cloudinary.imageLoading(stateName).then(returnedArray => {
      this.setState({ assets: this.sort(returnedArray) });
    });
  }

  componentDidMount() {
    this.populateState('all');
  }

  // Main render method that takes in rendered elements from Feed.js:
  render() {
    return (
      <div className="App" id="backgroundContainer">

        <header id="top">
          <img src={require('../images/logo-white.png')} width="250" alt="Karina Liner" />
        </header>

        <aside>
          <div id="aboutDiv">
            <Upload />
            <img src={require('../images/profile-photo.png')} alt="profile" />
            <h2>About Me</h2>
            <div id="aboutBox">
              <p>I received my formal training from the Erevan Art Academy, Armenia in Fine Art and Ceramics and worked and exhibited in the US, Europe and the Middle East. My work is a unique blend of organic design and sculptural jewelry, using both precious and semi-precious stones hand-picked for quality clarity and uniqueness.</p>
            </div>

            <div id="contactBox">
              <ul>
                <li>5 1 0 . 3 3 3 . 5 4 4 0</li>
                <li>KarinaLiner @ gmail</li>
                <li id="social">
                  <a href="https://www.linkedin.com/in/karina-liner-5530a03a/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a> . <a href="https://www.instagram.com/karinaliner/" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a> . <a href="https://www.facebook.com/linerart/" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook"></i></a>
                </li>
              </ul>
            </div>
            <Buttons populateState={this.populateState} />
          </div>
        </aside>

        <main>
          <Feed currentState={this.state.assets} />
          <p><a href="#top">Back to top</a></p>
          <div className="credits">
            <span>&copy; 2019 <span className="white">Karina Liner</span> – Jewelry, Photography</span>
            <span><span className="white">Zhana Liner</span> – Design & Web Development</span>
            <span className="smaller">Brian Patrick Tagalog, wallpaper</span>
          </div>
        </main>
      </div>
    );
  }
};

export default App;

// let MyComponent = Loadable({
//   loader: () => import('./MyComponent'),
//   loading: () => <div>Loading...</div>
// });