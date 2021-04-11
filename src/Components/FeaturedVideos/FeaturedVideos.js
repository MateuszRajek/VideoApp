import React, { useState } from 'react';
import { Carousel, CarouselItem, CarouselIndicators } from 'reactstrap';
import './FeaturedVideos.css';

const featuredVideos = [
  {
    id: 'povY6y1AXD0',
  },
  {
    id: 'C0rlAYYnb0U',
  },
  {
    id: 'v2XoBeZQ0YQ',
  },
  {
    id: 'lSAz2ONC1rk',
  },
  {
    id: 'EsKVSU-Eqok',
  },
];

function FeaturedVideos() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === featuredVideos.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? featuredVideos.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = newIndex => {
    if (animating) return;
    setActiveIndex(newIndex);
  }

  const slides = featuredVideos.map(item => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <iframe className={'featured-videos'} src={`https://www.youtube.com/embed/${item.id}`} title='YouTube video player' frameBorder='0' 
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'>
        </iframe>
      </CarouselItem>
    );
  });

  return (
    <>
    <h4>Featured Videos</h4>
    <Carousel
      activeIndex={activeIndex}
      next={next}
      previous={previous}
    >
      <CarouselIndicators items={featuredVideos} activeIndex={activeIndex} onClickHandler={goToIndex} />
      {slides}
    </Carousel>
    </>
  );
  
}

export default FeaturedVideos;