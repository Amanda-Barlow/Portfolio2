import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const CarouselPage = () => {
  return ( 
    <Carousel autoPlay infiniteLoop >
      <div>
        <img src="/assets/ASU.jpeg" alt="ASU Alumni Band" style={{ maxWidth: '20em', maxHeight: '25em' }}/>
        <p className="legend">ASU Alumni</p>
      </div>
      {/* <div>
        <img src="/assets/motorhome.jpeg" alt="Through Canada" style={{ maxWidth: '20em', maxHeight: '20em' }}/>
        <p className="legend">Love To Travel</p>
      </div>
      <div>
        <img src="/assets/moose.jpeg" alt="Moose" style={{ maxWidth: '20em', maxHeight: '20em' }}/>
        <p className="legend">Moose in Alaska</p>
      </div>
      <div>
        <img src="/assets/beach8.jpeg" alt="Beach" style={{ maxWidth: '20em', maxHeight: '20em' }}/>
        <p className="legend">Beach</p>
      </div>
      <div>
        <img src="/assets/4 wheeler.jpeg" alt="Family in Punta Cana" style={{ maxWidth: '20em', maxHeight: '20em' }}/>
        <p className="legend">Family</p>
      </div>
      <div>
        <img src="/assets/family in DR.jpeg" alt="On the Beach" style={{ maxWidth: '20em', maxHeight: '20em' }}/>
        <p className="legend">My Family</p>
      </div>
      <div>
        <img src="/assets/goat on back.jpeg" alt="Our Goats" style={{ maxWidth: '20em', maxHeight: '25em' }}/>
        <p className="legend">Our Goats</p>
      </div>
      <div>
        <img src="/assets/oreo2.jpeg" alt="Our Puppy Oreo" style={{ maxWidth: '20em', maxHeight: '20em' }}/>
        <p className="legend">Our Puppy Oreo</p>
      </div>
      <div>
        <img src="/assets/ocean 2.jpeg" alt="Ocean View" style={{ maxWidth: '20em', maxHeight: '20em' }}/>
        <p className="legend">Ocean View</p>
      </div>
      <div>
        <img src="/assets/redoubt.jpeg" alt="Mt. Redoubt in Alaska" style={{ maxWidth: '20em', maxHeight: '20em' }}/>
        <p className="legend">Mt. Redoubt in Alaska</p>
      </div>
      <div>
        <img src="/assets/diy.jpeg" alt="DIY" style={{ maxWidth: '20em', maxHeight: '20em' }}/>
        <p className="legend">DIY Project</p>
      </div>
      <div>
        <img src="/assets/fall.jpeg" alt="Fall" style={{ maxWidth: '20em', maxHeight: '20em' }}/>
        <p className="legend">Fall</p>
      </div> */}
      <div>
        <img src="/assets/me7.jpeg" alt="Sun Devil" style={{ maxWidth: '20em', maxHeight: '20em' }}/>
        <p className="legend">Alumni Band</p>
      </div>
      <div>
        <img src="/assets/me.jpeg" alt="Looking Forward" style={{ maxWidth: '20em', maxHeight: '25em' }}/>
        <p className="legend">Looking Forward</p>
      </div>
    </Carousel>
  );
};

export default CarouselPage;