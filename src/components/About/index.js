import React, { useEffect, useState } from 'react';
import './index.scss';
import CarouselPage from '../Carousel';
import AnimatedLetters from '../AnimatedLetters';



const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate');

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 500);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
      <div className="about-page">
        <div className="text-zone">
          <h1>
            <div id="animationContainer">
                <span className={letterClass}><AnimatedLetters strArray={['A', 'b', 'o', 'u', 't', ' ', 'M', 'e']}idx={15} /></span>
            </div>
          </h1>
          <div>
            <p>I am a passionate and dedicated Software Engineer with a strong drive for continuous learning and a deep-rooted curiosity for the world of technology. With a recent entry into the field, I bring a fresh perspective and an eagerness to explore innovative solutions to complex problems.</p>
            <p>Throughout my career, I have consistently demonstrated confident leadership, leveraging my skills and knowledge to guide teams towards successful outcomes. I thrive in collaborative environments, embracing diverse perspectives and working together to achieve shared goals.</p>
            <p>In my role as a Software Engineer, I am continuously on the lookout for effective ways to solve challenging problems. I enjoy the process of dissecting complex issues, analyzing requirements, and designing robust solutions that meet both technical and business objectives. I am experienced in utilizing a wide range of programming languages and frameworks, and I am always eager to explore emerging technologies to stay at the forefront of the industry.  </p>
            <p>On a personal note, I find joy in raising my family and exploring various artistic hobbies. One of my most cherished experiences was marching with the Arizona State University Sun Devil Marching Band, where I played the trumpet. This not only honed my musical skills but also instilled in me discipline, teamwork, and the importance of synchronicity—an ethos that I carry into my professional endeavors.</p>
            <p>I am driven by a desire to make a meaningful impact through software engineering. I believe in the power of technology to shape our world for the better, and I am excited to contribute my skills, knowledge, and passion to projects that drive innovation, improve lives, and create lasting value.</p>
            
             {/* <p>I am a passionate and dedicated Software Engineer with a fresh perspective and an eagerness to explore innovative solutions to complex problems. I have a track record of confident leadership, guiding teams towards successful outcomes in collaborative environments. I continuously seek effective ways to solve challenging problems, utilizing a wide range of programming languages and frameworks.</p>
             <p>On a personal note, I find joy in raising my family and exploring various artistic hobbies. One of my most cherished experiences was marching with the Arizona State University Sun Devil Marching Band, where I played the trumpet. This not only honed my musical skills but also instilled in me discipline, teamwork, and the importance of synchronicity—an ethos that I carry into my professional endeavors.</p>
             <p>I am driven by the desire to make a meaningful impact through software engineering, contributing to projects that drive innovation, improve lives, and create lasting value.</p>
           */}
          </div>
        <CarouselPage />  
        </div>    
        </div>
  );
};

export default About;
