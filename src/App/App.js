import React, { Component } from 'react';
import './App.css';
import Feed from '../Feed/Feed';
import Buttons from '../Buttons/Buttons';
import Contact from '../Contact/Contact';
import Credits from '../Credits/Credits';
import Profile from '../Profile/Profile';
import { Upload, Cloudinary } from '../util/Cloudinary';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      assets: [],
    };
    this.populateState = this.populateState.bind(this);
  }

  populateState(stateName) {
    Cloudinary.imageLoading(stateName).then(returnedArray => {
      this.setState({ assets: this.sort(returnedArray) });
    });
  }

  componentDidMount() {
    this.populateState('all');
  }

  sort(array) {
    return array.sort(() => Math.random() - 0.5);
  }

  // Main render method that takes in rendered elements from Feed.js:
  render() {
    return (
      <div className="App" id="backgroundContainer">

        <header id="top">
          <Upload />
        </header>

        <aside>
          <div id="aside-container">
            <Profile />
            <Contact />
            <Buttons populateState={this.populateState} />
          </div>
        </aside>

        <main>
          <Feed currentState={this.state.assets} />
          <Credits />
        </main>

      </div>
    );
  }
};

export default App;