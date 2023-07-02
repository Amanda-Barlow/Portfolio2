import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const CarouselPage = () => {
  return ( 
    <Carousel autoPlay infiniteLoop>
      <div>
        <img src="/assets/ASU.jpeg" alt="ASU Alumni Band" style={{ maxWidth: '50%', maxHeight: '50%' }}/>
        <p className="legend">ASU Alumni</p>
      </div>
      <div>
        <img src="/assets/moose.jpeg" alt="Moose" style={{ maxWidth: '50%', maxHeight: '50%' }}/>
        <p className="legend">Moose in Alaska</p>
      </div>
      <div>
        <img src="/assets/beach8.jpeg" alt="Beach" style={{ maxWidth: '50%', maxHeight: '50%' }}/>
        <p className="legend">Beach</p>
      </div>
      <div>
        <img src="/assets/4 wheeler.jpeg" alt="Family in Punta Cana" style={{ maxWidth: '50%', maxHeight: '50%' }}/>
        <p className="legend">Family</p>
      </div>
      <div>
        <img src="/assets/goat on back.jpeg" alt="Our Goats" style={{ maxWidth: '50%', maxHeight: '50%' }}/>
        <p className="legend">Our Goats</p>
      </div>
      <div>
        <img src="/assets/fall.jpeg" alt="Fall" style={{ maxWidth: '50%', maxHeight: '50%' }}/>
        <p className="legend">Fall</p>
      </div>
      <div>
        <img src="/assets/me7.jpeg" alt="Sun Devil" style={{ maxWidth: '50%', maxHeight: '50%' }}/>
        <p className="legend">Alumni Band</p>
      </div>
      <div>
        <img src="/assets/me.jpeg" alt="Looking Forward" style={{ maxWidth: '50%', maxHeight: '50%' }}/>
        <p className="legend">Looking Forward</p>
      </div>
    </Carousel>
  );
};

export default CarouselPage;