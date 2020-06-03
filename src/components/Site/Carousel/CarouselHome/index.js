import React from 'react';
import Carousel from '../CarouselBase';
import HomeBanner from '../../HomeBanner';
import { carousel } from '../../../../core/utils/testData';

const settings = {
  dots: true,
  arrows: false,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  autoplay: true,
  autoplaySpeed: 5000
};

export default function CarouselHome() {
  return (
    <Carousel settings={settings}>
      {carousel.map(item => (
        <div key={item.id}>
          <HomeBanner banner={item} />
        </div>
      ))}
    </Carousel>
  );
}
