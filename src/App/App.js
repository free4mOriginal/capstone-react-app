import React, { Component } from 'react';
import './App.css';
import Feed from '../Feed/Feed';
// import imagesALL from '../util/FeedStaticObj';
import { Upload, Cloudinary, SampleImg } from '../util/Cloudinary';

// let handmade = [];
// let traditional = [];
// let zbrush = [];
// let all = [handmade.concat(traditional).concat(zbrush)];

// populateState(handmade, 'handmade');
// populateState(traditional, 'traditional');
// populateState(zbrush, 'zbrush');

// const initialState = [...handmadeState, ...traditionalState, ...zbrushState];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      initialState: [],
      handmade: [],
      traditional: [],
      zbrush: [],
      filtered: [],
    };
    this.populateState = this.populateState.bind(this);
    this.filterFnx = this.filterFnx.bind(this);
  }

  // async populateStates(stateName) {
  //   return await fetch(`https://res.cloudinary.com/free4m/image/list/${stateName}.json`).then(resp => resp.json().then(json => {
  //     for (let i = 0; i < json.resources.length; i++) {
  //       console.log(this.state.assets)
  //       this.setState({ stateName: this.state.assets[stateName].push(json.resources[i]) });
  //     }
  //   }));
  // }

  // populateState() {
  //   let tags = ['handmade', 'traditional', 'zbrush'];
  //   let fullAssetsArray = [];

  //   for (let i=0; i<tags.length; i++) {
  //     Cloudinary.imageLoading(tags[i]).then(returnedArray => fullAssetsArray.push(...returnedArray));
  //   }
  // }

  populateState() {
    let tags = ['all', 'handmade', 'traditional', 'zbrush'];

    for (let i = 0; i < tags.length; i++) {
      Cloudinary.imageLoading(tags[i]).then(returnedArray => {
        if (tags[i] === 'all') {
          this.setState({ initialState: returnedArray.sort(() => Math.random() - 0.5) });
        } else {
          this.setState({ [tags[i]]: returnedArray });
        }
      });
    }
  }

  componentDidMount() {
    this.populateState();
  }

  // Filtering method that sets the current state of images to only the selected category
  // sent from the onClick method in the buttons;
  filterFnx(category) {
    if (category === 'all') {
      this.setState({ filtered: this.state.initialState });
    } else {
      this.setState({ filtered: this.state[category] });
    }
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

            <div id="filter">
              <button id="handmade" onClick={() => this.filterFnx('handmade')}>Contemporary Collection</button>
              <button id="traditional" onClick={() => this.filterFnx('traditional')}> Custom Jewelry Design</button>
              <button id="zbrush" onClick={() => this.filterFnx('zbrush')}>3D Sculpted Jewelry</button>
              <button id="all" onClick={() => this.filterFnx('all')}>ALL</button>
            </div>
          </div>
        </aside>

        <main>
          <Feed currentState={this.state.filtered} />
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