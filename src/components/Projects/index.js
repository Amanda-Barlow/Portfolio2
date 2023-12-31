import React from 'react';
import { Link } from 'react-router-dom';
import './index.scss'
import Plan from '../Plan'
import Lingo from '../Lingo'
import Coin from '../Coin'
import ReelHappy from '../ReelHappy'

const linkStyle = {
   margin: "1rem",
   textDecoration: "none",
   color: '#ffd700',
 };

function Projects() {
   return (   
      <div className = 'reelHappyProj'>
         <h1>Reel Happy</h1>
         <h2>This application is a film review site with a twist: rate movies based on how happy they make you feel. We believe that films are more than just entertainment; they're a reflection of our lives. That's why we've created a platform where you can rate and review films based on your personal definition of happiness.<br />
         <br />A full stack application developed as a group using the MERN (Mongoose, Express, React, and Node.js) stack. Reel Happy adhered to the MVC (Models, Views and Controllers) file structure on the backend. Developers applied full CRUD to the movie review page. The site pulls from the server-side OMDB API to provide movie information. The application is deployed using Heroku. </h2>
         <ReelHappy />
         {/* <img src = {require('/Users/amandabarlow/Desktop/PostCourse/portfolio2/src/assets/ReelHome.jpeg')} alt='Reel Happy Home'style={{ maxWidth: '25em', maxHeight: '25em' }}/>
         <img src = {require('/Users/amandabarlow/Desktop/PostCourse/portfolio2/src/assets/ReelBrowse.jpeg')} alt='Reel Happy Browse'style={{ maxWidth: '25em', maxHeight: '25em' }}/>
         <img src = {require('/Users/amandabarlow/Desktop/PostCourse/portfolio2/src/assets/ReelShow.jpeg')} alt='Reel Happy Show Page 1'style={{ maxWidth: '25em', maxHeight: '25em' }}/> 
         <img src = {require('/Users/amandabarlow/Desktop/PostCourse/portfolio2/src/assets/ReelRating.jpeg')} alt='Reel Happy Show Page 2'style={{ maxWidth: '25em', maxHeight: '25em' }}/>     
         <img src = {require('/Users/amandabarlow/Desktop/PostCourse/portfolio2/src/assets/ReelComments.jpeg')} alt='Reel Happy Show Page 3'style={{ maxWidth: '25em', maxHeight: '25em' }}/> */}
      <h4><Link to='https://reel-happy.herokuapp.com//' style={linkStyle} relative='path'>Click to Rate Reel Happy Movies</Link></h4>
      <br />
      
      <div className = 'planProj'>
        <h1>Your Treatment, Your Plan</h1>
        <h2>This is an application designed to improve the treatment planning process for clients and professionals while still meeting requirements of insurance providers.<br />
        <br />A full stack application developed using the MERN (Mongoose, Express, React, and Node.js) stack. Your Treatment, Your Plan adhered to the MVC (Models, Views and Controllers) file structure on the backend. Developers applied full CRUD to the form page. </h2>
        <h3>Select the Github link in the Nav Bar for more details</h3>
        <Plan />
        {/* <img src = {require('/Users/amandabarlow/Desktop/PostCourse/portfolio2/src/assets/plan1.jpeg')} alt='My Treatment, My Plan Home Page'style={{ maxWidth: '25em', maxHeight: '25em' }}/>
        <img src = {require('/Users/amandabarlow/Desktop/PostCourse/portfolio2/src/assets/plan2.jpeg')} alt='Show Page'style={{ maxWidth: '25em', maxHeight: '25em' }}/> 
        <img src = {require('/Users/amandabarlow/Desktop/PostCourse/portfolio2/src/assets/plan3.jpeg')} alt='Show Page'style={{ maxWidth: '25em', maxHeight: '25em' }}/>     
      <br /> */}

      <div className = 'coinProj'>
        <h1>Coin Collector</h1>
        <h2>As a beginning coin collector, I have a stack of coins that I would like to catalog. I want to be able to see my coin collection from wherever I am and to be able to update the collection as I go. Coin Collector is a site where a user can display their coin collection..<br />
        <br />A full stack application using Node.js, Mongoose, Express and EJS to allow coin collectors to list all of the coins in their collection.  Users will be able to add, edit and delete items. </h2>
        <h3>Select the Github link in the Nav Bar for more details</h3>
        <Coin />
        {/* <img src = {require('/Users/amandabarlow/Desktop/PostCourse/portfolio2/src/assets/coinHome.jpeg')} alt='Coin Collector Home Page'style={{ maxWidth: '25em', maxHeight: '25em' }}/>
        <img src = {require('/Users/amandabarlow/Desktop/PostCourse/portfolio2/src/assets/coinShow.jpeg')} alt='Coin Show Page'style={{ maxWidth: '25em', maxHeight: '25em' }}/> 
        <img src = {require('/Users/amandabarlow/Desktop/PostCourse/portfolio2/src/assets/CoinAdd.jpeg')} alt='Coin Add Page'style={{ maxWidth: '25em', maxHeight: '25em' }}/>      */}
      <br />
   
       <div className = 'lingoProj'>
       <h1>LINGO Game</h1>
       <h2>This is a game modeled after the popular gameshow LINGO.<br />
       <br />Lingo is a word guessing game. Players get five guesses to correctly guess a five letter word. The initial game can be played with two players. Any letters that are guessed correctly in the correct spot will turn green. Any letter guessed correctly, but in the wrong spot will turn yellow. Any incorrect letter will turn red. Players win when they are the player that correctly guesses the word. </h2>
       <Lingo />
       {/* <img src = {require('/Users/amandabarlow/Desktop/PostCourse/portfolio2/src/assets/Lingo.jpeg')} alt='LINGO Game'style={{ maxWidth: '25em', maxHeight: '25em' }}/>
       */}
       <h4><Link to='https://barlow-lingo.netlify.app/' style={linkStyle} relative='path'>Click to Play Lingo</Link></h4>
       
            </div>  
         </div>  
      </div>  
   </div> 
   )
};

export default Projects;