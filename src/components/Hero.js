// Hero.js
import React from 'react';
import '../styles/Hero.css';

const Hero = () => {
    return (
        <section className="hero">
            <h1>Antoine Wurtz</h1>
            <p>Junior web developer</p>
            <span className='hello-button'><a href="#contact"></a></span>
        </section>
    );
}

export default Hero;
