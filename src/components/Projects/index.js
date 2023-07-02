import React from 'react';
import { Link } from 'react-router-dom';
import './index.scss';




const Projects = (props) => {
   const  {} = props.items
   return (
   <div className = 'recentProj'>
        
        <h1>My Treatment, My Plan</h1>
        <h2>Project desc</h2>
        <Link to = "https://github.com/Amanda-Barlow/MyPlanBackend"></Link>
        <Link to = "https://github.com/Amanda-Barlow/MyPlanFrontend"></Link>
        <div>
        <img src="/assets/moose.jpeg" alt="Moose" style={{ maxWidth: '50%', maxHeight: '50%' }}/>
        <p className="legend">Moose in Alaska</p>
      </div>
    </div>   
   )
};

export default Projects;