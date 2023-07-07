import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const CoinPage = () => {
  return ( 
    <Carousel autoPlay infiniteLoop >
      <div>
        <img src="/assets/coinHome.jpeg" alt="Coin Collector Home" style={{ maxWidth: '20em', maxHeight: '25em' }}/>
        <p className="legend">Coin Collector Home</p>
      </div>
      <div>
        <img src="/assets/coinShow.jpeg" alt="Coin Collector Show Page" style={{ maxWidth: '20em', maxHeight: '20em' }}/>
        <p className="legend">Coin Collector Show Page</p>
      </div>
      <div>
        <img src="/assets/CoinAdd.jpeg" alt="Coin Collector Add Page" style={{ maxWidth: '20em', maxHeight: '20em' }}/>
        <p className="legend">Coin Collector Add Page</p>
      </div>

    </Carousel>
  );
};

export default CoinPage;