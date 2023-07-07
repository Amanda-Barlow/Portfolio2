import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const PlanPage = () => {
  return ( 
    <Carousel autoPlay infiniteLoop >
      <div>
        <img src="/assets/plan1.jpeg" alt="My Treatment, My Plan Home Page" style={{ maxWidth: '20em', maxHeight: '25em' }}/>
        <p className="legend">My Treatment, My Plan</p>
      </div>
      <div>
        <img src="/assets/plan2.jpeg" alt="My Plan Show Page" style={{ maxWidth: '20em', maxHeight: '20em' }}/>
        <p className="legend">My Plan Show Page</p>
      </div>
      <div>
        <img src="/assets/plan3.jpeg" alt="My Plan Edit Page" style={{ maxWidth: '20em', maxHeight: '20em' }}/>
        <p className="legend">My Plan Edit Page</p>
      </div>
      
    </Carousel>
  );
};

export default PlanPage;