import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const ReelHappyPage = () => {
  return ( 
    <Carousel autoPlay infiniteLoop >
      <div>
        <img src="/assets/ReelHome.jpeg" alt="Reel Happy Home Page" style={{ maxWidth: '20em', maxHeight: '25em' }}/>
        <p className="legend">Reel Happy Home Page</p>
      </div>
      <div>
        <img src="/assets/ReelBrowse.jpeg" alt="Reel Happy Browse Page" style={{ maxWidth: '20em', maxHeight: '20em' }}/>
        <p className="legend">Reel Happy Browse Page</p>
      </div>
      <div>
        <img src="/assets/ReelShow.jpeg" alt="Reel Happy Show Page" style={{ maxWidth: '20em', maxHeight: '20em' }}/>
        <p className="legend">Reel Happy Show Page</p>
      </div>
      <div>
        <img src="/assets/ReelRating.jpeg" alt="Reel Happy Rating Page" style={{ maxWidth: '20em', maxHeight: '20em' }}/>
        <p className="legend">Reel Happy Rating Page</p>
      </div>
      <div>
        <img src="/assets/ReelComments.jpeg" alt="Reel Happy Comments" style={{ maxWidth: '20em', maxHeight: '20em' }}/>
        <p className="legend">Reel Happy Comments</p>
      </div>
      <div>
        <img src="/assets/ReelAbout.jpeg" alt="Reel Happy About Page" style={{ maxWidth: '20em', maxHeight: '20em' }}/>
        <p className="legend">Reel Happy About Page</p>
      </div>
      
    </Carousel>
  );
};

export default ReelHappyPage;