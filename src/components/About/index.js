import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGitAlt, faAngular, faHtml5, faCss3, faReact, faJsSquare } from '@fortawesome/free-brands-svg-icons';
import Loader from 'react-loaders';

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate');

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 500);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <>
      <div className="about-page">
        <div className="text-zone">
          <h1>
            <div id="animationContainer">
                <span className="animated-letter">A</span>
                <span className="animated-letter">b</span>
                <span className="animated-letter">o</span>
                <span className="animated-letter">u</span>
                <span className="animated-letter">t</span>
                <span className="animated-letter"> </span>
                <span className="animated-letter">M</span>
                <span className="animated-letter">e</span>
            </div>
          </h1>
          <p>
            I am a dedicated learner who strives to gain a deeper understanding of the world through technology. Although
            I have recently joined the field, I have been a confident leader throughout my career.
          </p>
          <p>As a Software Engineer, I am continuously looking for effective ways to solve challenging problems.</p>
          <p>
            Personally, I enjoy raising my family and trying out new artistic hobbies. My favorite was marching with the
            Arizona State University Sun Devil Marching Band (Trumpet).
          </p>
        </div>
        
        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faAngular} color="#DD0031" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED44F" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  );
};

export default About;
