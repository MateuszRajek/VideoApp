import React, { useState } from 'react';
import { Carousel, CarouselItem, CarouselIndicators } from 'reactstrap';
import './FeaturedVideos.css';

const items = [
  {
    src: "https://www.youtube.com/embed/lSAz2ONC1rk",
    altText: 'Slide 1',
    caption: 'Slide 1'
  },
  {
    src: "https://www.youtube.com/embed/C0rlAYYnb0U",
    altText: 'Slide 2',
    caption: 'Slide 2'
  },
  {
    src: "https://www.youtube.com/embed/v2XoBeZQ0YQ",
    altText: 'Slide 3',
    caption: 'Slide 3'
  }
];

function FeaturedVideos({ src }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <iframe width="560" height="315" src={item.src} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
      </CarouselItem>
    );
  });

  return (
    <>
    <h2>Featured Videos</h2>
    <Carousel
      activeIndex={activeIndex}
      next={next}
      previous={previous}
    >
      <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
      {slides}
    </Carousel>
    </>
  );
  
}

export default FeaturedVideos;