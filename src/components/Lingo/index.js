import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const LingoPage = () => {
  return ( 
    <Carousel autoPlay infiniteLoop >
      <div>
        <img src="/assets/Lingo.jpeg" alt="LINGO game" style={{ maxWidth: '20em', maxHeight: '25em' }}/>
        <p className="legend">LINGO game</p>
      </div>
    </Carousel>
  );
};

export default LingoPage;