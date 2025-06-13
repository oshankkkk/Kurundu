import React from 'react';
import '../styles/Home.css';
import cinnamonImg from '../assets/hero_image.png';
import Scroller from '../components/scroller/scroller';

function Home() {
  return (
    <>
    <section className="hero-section" id='home'>
      <div className="hero-text">
        <h1>ANCIENT FLAVOUR,<br/>MODERN LIVING</h1>
        <p>Experience the warmth and richness of pure Ceylon cinnamon.</p>
        <button className="explore-btn">Explore Now!</button>
      </div>
      <div className="hero-image">
        <img src={cinnamonImg} alt="Ceylon Cinnamon Pack" />
      </div>
    </section>
    <Scroller></Scroller>
    </>
  );
};

export default Home;
