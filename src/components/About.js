// About.js
import React from 'react';
import { FaCode, FaDatabase, FaTools } from 'react-icons/fa';
import '../styles/About.css';

const About = () => {
  return (
    <section id="about">
      <div className='about'>
        <h2>About</h2>
        <p>I started web development two years ago, initially to find out what was wrong with my employer's website, then I decided to make it my profession shortly afterwards. I've always liked building things, first Lego, then songs and now websites and applications.
          The course I took in 2022/2023 taught me the rudiments of web development in a professional way and gave me the keys to improving every day.
          My first assignment with the Reunion-based start-up Crowdaa, as a full remote, gave me the chance to prove myself and reassure myself of the expertise I had acquired.
          I'm now looking for a company in which I can grow. If your aim is to make the web more accessible, innovative and fair, don't hesitate to contact me.
        </p>
      </div>
      <div className='skills'>
        <div className='column'>
          <h3><FaCode /></h3>
          <ul>
            <li> HTML / CSS / JS</li>
            <li> React / Angular</li>
            <li> Laravel / JQuery</li>
            <li> Tailwind / Bootstrap</li>
          </ul>
        </div>
        <div className='column'>
          <h3><FaDatabase /></h3>
          <ul>
            <li> PHP</li>
            <li> Laravel</li>
            <li> Node</li>
            <li> MySQL</li>
          </ul>
        </div>
        <div className='column'>
          <h3><FaTools /></h3>
          <ul>
            <li> Git</li>
            <li> Trello / Notion</li>
            <li> Figma</li>
            <li> Agile</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
