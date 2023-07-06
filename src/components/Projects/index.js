import React from 'react';
import { Link } from 'react-router-dom';
import './index.scss'


const linkStyle = {
   margin: "1rem",
   textDecoration: "none",
   color: '#ffd700',
 };

function Projects() {
   return (   
   <div className = 'planProj'>
        <h1>Your Treatment, Your Plan</h1>
        <h2>This is an application designed to improve the treatment planning process for clients and professionals while still meeting requirements of insurance providers.<br />
        <br />A full stack application developed using the MERN (Mongoose, Express, React, and Node.js) stack. Your Treatment, Your Plan adhered to the MVC (Models, Views and Controllers) file structure on the backend. Developers applied full CRUD to the form page. </h2>
        <h3>Select the Github link in the Nav Bar for more details</h3>
        <img src = {require('/Users/amandabarlow/Desktop/PostCourse/portfolio2/src/assets/plan1.jpeg')} alt='My Treatment, My Plan Home Page'style={{ maxWidth: '25em', maxHeight: '25em' }}/>
        <img src = {require('/Users/amandabarlow/Desktop/PostCourse/portfolio2/src/assets/plan2.jpeg')} alt='Show Page'style={{ maxWidth: '25em', maxHeight: '25em' }}/> 
        <img src = {require('/Users/amandabarlow/Desktop/PostCourse/portfolio2/src/assets/plan3.jpeg')} alt='Show Page'style={{ maxWidth: '25em', maxHeight: '25em' }}/>     
     
       <div className = 'lingoProj'>
       <h1>LINGO Game</h1>
       <h2>This is a game modeled after the popular gameshow LINGO.<br />
       <br />Lingo is a word guessing game. Players get five guesses to correctly guess a five letter word. The initial game can be played with two players. Any letters that are guessed correctly in the correct spot will turn green. Any letter guessed correctly, but in the wrong spot will turn yellow. Any incorrect letter will turn red. Players win when they are the player that correctly guesses the word. </h2>
       <img src = {require('/Users/amandabarlow/Desktop/PostCourse/portfolio2/src/assets/Lingo.jpeg')} alt='LINGO Game'style={{ maxWidth: '25em', maxHeight: '25em' }}/>
      
       <h4><Link to='https://barlow-lingo.netlify.app/' style={linkStyle} relative='path'>Click to Play Lingo</Link></h4>
       </div>  
   </div> 
   )
};

export default Projects;