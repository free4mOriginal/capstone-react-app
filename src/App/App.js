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
      loading: true,
      category: '',
    };
    this.populateState = this.populateState.bind(this);
  }

  // Dynamically populate the empty assets array with Cloundinary's live account content through API GET call, and then sort the returned array so that newest three items always show first;
  populateState(stateName) {
    Cloudinary.imageLoading(stateName).then(returnedArray => {
      let first = returnedArray.shift();
      let randomArray = returnedArray.sort(() => Math.random() - 0.5);
      this.setState({
        assets: [first, ...randomArray],
        loading: false,
        category: stateName,
      });
    });
  }

  // Initial Feed population after all other commonents have loaded;
  componentDidMount() {
    this.populateState('all');
  }

  // Main render method that takes in rendered elements from Feed.js and other Components;
  render() {
    return (
      <div className="App" id="backgroundContainer">

        <header id="top">
          <Upload populateState={this.populateState} />
        </header>

        <aside>
          <div id="aside-container">
            <Profile />
            <Contact />
            <Buttons populateState={this.populateState} />
          </div>
        </aside>

        <main>
          {this.state.loading ? <div id="spinner"></div> : <Feed currentState={this.state.assets} category={this.state.category} />}
        </main>

        <footer>
          <Credits />
        </footer>

      </div>
    );
  }
};

export default App;