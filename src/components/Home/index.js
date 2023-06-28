import { Link } from 'react-router-dom';
import './index.scss';
import React, { useState, useEffect } from 'react';
import AnimatedLetters from '../AnimatedLetters';

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    const nameArray = ['A', 'm', 'a', 'n', 'd', 'a', ' ', 'B', 'a', 'r', 'l', 'o', 'w'];
    const jobArray = ['W', 'e', 'b', ' ', 'D', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r'];

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 500);
    
        return () => clearTimeout(timeoutId);
    }, []);
    

    return (
        <div className="container home-page">
            <div className="text-zone">
                <h1>
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={nameArray}
                        idx={15}
                    />
                </h1>
                <h2>
                    <br />
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={jobArray}
                        idx={22}
                    />
                    <br />
                </h2>
                    
                
                <h2>Software Engineer</h2>
                <Link to="/contact" className="flat-button">
                    CONTACT ME
                </Link>
            </div>
        </div>
    );
};

export default Home;
