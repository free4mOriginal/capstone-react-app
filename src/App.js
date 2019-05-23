import React from 'react';
import './App.css';
import logo from './logo-white.png';
import profile from './profile-photo2.png';

import biruza from './biruza-big.png';
import dot from './dot-neckalce-small.png';
import garnet from './garnet-necklace-small.png';
import gosha from './gosha.jpg';
import one from './1111.jpg';
import two from './1122.jpg';
import three from './1133.jpg';
import pearl from './pearl-upright.png';
import square from './square-tourmaline-small.png';


function App() {
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
            <p>I received my formal training from the Erevan Art Academy, Armenia in Fine Art & Ceramics and
                worked and exhibited in the US, Europe and the Middle East. My work is a unique blend of organic
                design and sculptural jewelry. I work in sliver, and in white, yellow and rose gold, setting
                semiprecious and precious stones and minerals that are hand-picked for quality clarity and
                        uniqueness.</p>
          </div>
          <div id="contactBox">
            <h3>Contact</h3>
            <p>5 1 0 . 3 3 3 . 5 4 4 0</p>
            <p>KarinaLiner @ gmail</p>
            <p id="social">
              <a href="https://www.linkedin.com/in/karina-liner-5530a03a/" target="_blank" rel="noopener noreferrer"><i
                class="fab fa-linkedin"></i></a> . <a href="https://www.instagram.com/karinaliner/" target="_blank" rel="noopener noreferrer"><i class="fab fa-instagram"></i></a> . <a href="https://www.instagram.com/karinaliner/" target="_blank" rel="noopener noreferrer"><i
                  class="fab fa-facebook"></i></a>
            </p>
          </div>
        </div>
      </aside>

      <main>
        <div className="flex--container">
          <figure>
            <img src={biruza} alt="tourquoise ring" />
            <figcaption>Biruza ring, sterling silver, tourquoise</figcaption>
          </figure>

          <figure>
            <img src={dot} alt="dot ring" />
            <figcaption>Dot Meditation ring, sterling silver</figcaption>
          </figure>

          <figure>
            <img src={garnet} alt="garnet ring" />
            <figcaption>Garnet necklace, sterling silver</figcaption>
          </figure>

          <figure>
            <img src={gosha} alt="sculpted ring" />
            <figcaption>Gosha, sculpted 3D pet ring</figcaption>
          </figure>

          <figure>
            <img src={one} alt="traditional style ring" />
            <figcaption>Traditional style ring, 14K yellow gold</figcaption>
          </figure>

          <figure>
            <img src={two} alt="traditional style ring" />
            <figcaption>Traditional style ring, 14K gold</figcaption>
          </figure>

          <figure>
            <img src={three} alt="traditional style ring" />
            <figcaption>Traditional style ring, 14K gold</figcaption>
          </figure>

          <figure>
            <img src={pearl} alt="pearl ring" />
            <figcaption>Pearl ring, with 14K gold pattination</figcaption>
          </figure>

          <figure>
            <img src={square} alt="tourmaline ring" />
            <figcaption>Square tourmaline ring, sterling silver</figcaption>
          </figure>
        </div>
      </main>

    </div>
  );
}

export default App;
