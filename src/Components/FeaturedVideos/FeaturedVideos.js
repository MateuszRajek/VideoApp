import React, { useState } from 'react';
import { Carousel, CarouselItem, CarouselIndicators } from 'reactstrap';
import './FeaturedVideos.css';

const featuredVideos = ['povY6y1AXD0', 'C0rlAYYnb0U', 'v2XoBeZQ0YQ', 'lSAz2ONC1rk', 'EsKVSU-Eqok']

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

  return (
    <>
    <h4>Featured Videos</h4>
    <Carousel {...{ activeIndex, next, previous }}>
      <CarouselIndicators {...{ items:featuredVideos, activeIndex, onClickHandler:goToIndex }} />
      {featuredVideos.map(item => {
        return (
          <CarouselItem
            onExiting={() => setAnimating(true)}
            onExited={() => setAnimating(false)}
            key={item}
          >
            <iframe className={'featured-videos'} src={`https://www.youtube.com/embed/${item}`} title='YouTube video player' frameBorder='0' 
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'>
            </iframe>
          </CarouselItem>
        );
      })}
    </Carousel>
    </>
  ); 
};

export default FeaturedVideos;